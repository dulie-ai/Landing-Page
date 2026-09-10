import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/manrope";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import App from "./App.jsx";
import "./styles.css";
import "./editorial.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
