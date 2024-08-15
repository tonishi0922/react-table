import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import kumaUI from "@kuma-ui/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), kumaUI()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
