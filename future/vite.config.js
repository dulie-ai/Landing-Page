import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "node:process";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  base: `${(process.env.VITE_BASE_PATH || "/").replace(/\/$/, "")}/future/`,
  plugins: [react()],
  build: {
    outDir: fileURLToPath(new URL("../dist/future", import.meta.url)),
    emptyOutDir: true,
  },
});
