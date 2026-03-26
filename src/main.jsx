// ============================================================
// main.jsx — Entry Point
// This is where React attaches to the HTML page.
// It finds the <div id="root"> in index.html and renders
// the entire app inside it.
// ============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
