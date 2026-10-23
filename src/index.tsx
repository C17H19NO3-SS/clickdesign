import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { renderToString } from "react-dom/server";
import { gzipSync } from "node:zlib";
import index from "./index.html";
import { App } from "./App";

const port = Number(process.env.PORT) || 3000;
const isDev = process.env.NODE_ENV?.toLowerCase() !== "production";
const cwdSrc = process.cwd() + "/src";

const allowedOrigins = [
  "https://stamps-short-emissions-fairy.trycloudflare.com",
  "https://brave-drum-extremely.ngrok-free.app"
];

let cachedTemplate = "";
const gzipCache = new Map<string, Uint8Array>();

// Maps "/Resources/..." → "/_bun/asset/hash.svg"
// Built lazily after the server starts so the client bundle exists.
let svgAssetMap = new Map<string, string>();
let assetMapBuilt = false;

/**
 * Build the SVG asset map by:
 * 1. Fetching the bundled client JS
 * 2. Extracting all /_bun/asset/hash.svg URLs
 * 3. Matching each URL's content to a local SVG file
 */
async function buildSvgAssetMap(serverPort: number, templateHtml: string): Promise<void> {
  if (assetMapBuilt && !isDev) return;

  try {
    const scriptMatch = templateHtml.match(/src="(\/_bun\/client\/[^"]+\.js)"/);
    if (!scriptMatch) return;

    const jsRes = await fetch(`http://127.0.0.1:${serverPort}${scriptMatch[1]}`);
    if (!jsRes.ok) return;
    const js = await jsRes.text();

    // Collect all SVG asset URLs from the bundle
    const assetUrls = [...js.matchAll(/"(\/_bun\/asset\/[a-f0-9]+\.svg)"/g)].map(
      (m) => m[1],
    );

    // Read all local SVG files once
    const glob = new Bun.Glob("./src/Resources/**/*.svg");
    const localFiles = new Map<string, string>(); // content → /Resources/... path
    for await (const filePath of glob.scan()) {
      const content = await Bun.file(filePath).text();
      const relPath = filePath.replaceAll("\\", "/").replace(/^\.?\/?src/, "");
      localFiles.set(content, relPath);
    }

    // For each bundled asset URL, find the matching local file
    const newMap = new Map<string, string>();
    for (const url of assetUrls) {
      const assetRes = await fetch(`http://127.0.0.1:${serverPort}${url}`);
      if (!assetRes.ok) continue;
      const assetContent = await assetRes.text();
      const localPath = localFiles.get(assetContent);
      if (localPath != null) {
        newMap.set(localPath, url as string);
      }
    }

    svgAssetMap = newMap;
    if (!isDev) {
      assetMapBuilt = true;
    }

    if (isDev) {
      console.log(`[SSR] Asset map built: ${svgAssetMap.size} SVG(s) mapped`);
    }
  } catch (err) {
    console.error("[SSR] Failed to build SVG asset map:", err);
  }
}

async function getTemplate(serverPort: number): Promise<string> {
  if (cachedTemplate && !isDev) {
    return cachedTemplate;
  }

  try {
    const res = await fetch(`http://127.0.0.1:${serverPort}/_bun_template`);
    if (res.ok) {
      const html = await res.text();
      if (!isDev) {
        cachedTemplate = html;
      }
      // Build (or refresh) the asset map whenever we refresh the template
      await buildSvgAssetMap(serverPort, html);
      return html;
    }
  } catch (err) {
    console.error("Failed to fetch template from Bun bundler:", err);
  }

  return cachedTemplate;
}

function shouldGzip(acceptEncoding: string | null): boolean {
  return !!acceptEncoding && acceptEncoding.includes("gzip");
}

const app = new Elysia({
  serve: {
    development: isDev,
    routes: {
      "/_bun_template": index,
    },
  },
})
  .use(
    cors({
      origin: (request: Request) => {
        const origin = request.headers.get("origin");
        if (!origin) return true;
        if (allowedOrigins.includes(origin)) return true;
        if (origin.endsWith(".trycloudflare.com")) return true;
        if (origin.includes("localhost") || origin.includes("127.0.0.1")) return true;
        return true;
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
      maxAge: 86400,
    }),
  )
  .use(staticPlugin({ assets: "src/Resources", prefix: "/Resources" }))
  .use(staticPlugin({ assets: "public", prefix: "/public" }))
  .get("/*", async ({ request, set }) => {
    const url = new URL(request.url);

    // Let Bun handle internal asset bundles (/_bun/...)
    if (url.pathname.startsWith("/_bun/")) {
      return;
    }

    // Serve /Resources/ assets directly with correct MIME type
    if (url.pathname.startsWith("/Resources/")) {
      const relPath = url.pathname.slice("/Resources/".length);
      const file = Bun.file(`./src/Resources/${relPath}`);
      if (await file.exists()) {
        return file;
      }
    }

    // Serve static files from public/ or src/
    if (url.pathname !== "/") {
      const publicFile = Bun.file(`./public${url.pathname}`);
      if (await publicFile.exists()) {
        return publicFile;
      }
      const srcFile = Bun.file(`./src${url.pathname}`);
      if (await srcFile.exists()) {
        return srcFile;
      }
    }

    // Asset extension → 404 (prevents HTML fallback on broken asset paths)
    const isAsset = /\.(svg|png|jpe?g|gif|webp|ico|css|js|map|woff2?|ttf|eot)$/i.test(
      url.pathname,
    );
    if (isAsset) {
      set.status = 404;
      return new Response("Not Found", { status: 404 });
    }

    const currentPort = app.server?.port || port;
    const template = await getTemplate(currentPort);
    let finalHtml = template || "";

    try {
      // 1. Render React tree on server (SSR)
      let appHtml = renderToString(<App path={url.pathname} />);

      // 2. Replace absolute server file paths with web paths
      //    Step A: strip the CWD prefix  /home/.../src → ""
      const normCwd = process.cwd().replaceAll("\\", "/");
      appHtml = appHtml
        .replaceAll(normCwd + "/src", "")
        .replaceAll(normCwd.toLowerCase() + "/src", "")
        .replaceAll(process.cwd() + "\\src", "")
        .replaceAll(process.cwd().toLowerCase() + "\\src", "")
        .replaceAll("\\Resources\\", "/Resources/")
        .replaceAll("\\", "/");

      // Step B: replace /Resources/... paths with the Bun-bundled /_bun/asset/hash.svg URLs
      //         so server and client use identical src attributes → no hydration mismatch
      for (const [localPath, assetUrl] of svgAssetMap) {
        appHtml = appHtml.replaceAll(`src="${localPath}"`, `src="${assetUrl}"`);
      }

      // 3. Hoist any <link> tags emitted by React 19 into <head>
      //    Also rewrite /Resources/ hrefs → /_bun/asset/ so preload URLs match src URLs
      const linkTags: string[] = [];
      appHtml = appHtml.replace(/<link [^>]+\/>/g, (match) => {
        // Rewrite href if it's a /Resources/ path
        let rewritten = match;
        for (const [localPath, assetUrl] of svgAssetMap) {
          rewritten = rewritten.replaceAll(`href="${localPath}"`, `href="${assetUrl}"`);
        }
        linkTags.push(rewritten);
        return "";
      });
      if (finalHtml && linkTags.length > 0) {
        finalHtml = finalHtml.replace(
          "</head>",
          `${linkTags.join("\n    ")}\n  </head>`,
        );
      }

      // 4. Inject SSR HTML into #root
      if (finalHtml) {
        finalHtml = finalHtml.replace(
          /<div id="root">.*?<\/div>/s,
          `<div id="root">${appHtml}</div>`,
        );
      } else {
        finalHtml = `<!doctype html><html><head></head><body><div id="root">${appHtml}</div></body></html>`;
      }
    } catch (err) {
      console.error("SSR render error (falling back to CSR):", err);
      finalHtml = template || "";
    }

    // Gzip compression
    const acceptEncoding = request.headers.get("accept-encoding");
    if (shouldGzip(acceptEncoding)) {
      const cacheKey = url.pathname;
      let compressed = !isDev ? gzipCache.get(cacheKey) : undefined;
      if (!compressed) {
        compressed = gzipSync(finalHtml);
        if (!isDev) gzipCache.set(cacheKey, compressed);
      }

      return new Response(Buffer.from(compressed) as unknown as BodyInit, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Content-Encoding": "gzip",
          "Vary": "Accept-Encoding",
        },
      });
    }

    set.headers["Content-Type"] = "text/html; charset=utf-8";
    return finalHtml;
  });

app.listen(port, async (sv) => {
  console.log(`Server started on port ${sv.port} (http://localhost:${sv.port})`);
  try {
    const res = await fetch(`http://127.0.0.1:${sv.port}/_bun_template`);
    if (res.ok) {
      const html = await res.text();
      cachedTemplate = html;
      // Build SVG asset map eagerly on startup
      const listenPort = sv.port ?? port;
      await buildSvgAssetMap(listenPort, html);
    }
  } catch {
    // Will build on first request
  }
});

export default app;
