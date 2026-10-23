/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders/hydrates the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";

// Bun HMR: access import.meta.hot.data properties directly to avoid
// "cannot be used indirectly" compile errors.
const hotData = import.meta.hot.data as { root?: ReturnType<typeof createRoot> };

const elem = document.getElementById("root");

if (elem) {
  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  if (hotData.root) {
    hotData.root.render(app);
  } else if (elem.hasChildNodes() && elem.innerHTML.trim().length > 0) {
    hotData.root = hydrateRoot(elem, app);
  } else {
    hotData.root = createRoot(elem);
    hotData.root.render(app);
  }
}
