import Elysia from "elysia";
import index from "./index.html";

const allowedOrigins = ["https://stamps-short-emissions-fairy.trycloudflare.com"];

new Elysia({
    serve: {
        development: process.env.NODE_ENV?.toLocaleLowerCase() === "development",
    },
})
.get("/*", index)
.onBeforeHandle(({ request, set }) => {
    const origin = request.headers.get('origin');

    const isAllowed = origin && allowedOrigins.includes(origin);
    const allowOriginHeader = isAllowed ? origin : allowedOrigins[0] as string;

    if (request.method === 'OPTIONS') {
      set.status = 204;
      set.headers['Access-Control-Allow-Origin'] = allowOriginHeader;
      set.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS';
      set.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With';
      set.headers['Access-Control-Allow-Credentials'] = 'true';
      set.headers['Access-Control-Max-Age'] = '86400';

      return new Response(null, { status: 204, headers: set.headers as HeadersInit });
    }
  })
.listen(3000, (sv) => console.log(`Server started on port ${sv.port}`));
