import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin/vite";

export default defineConfig({
  plugins: [
    stylex({
      useCSSLayers: { before: ["reset"] },
      runtimeInjection: false,
    }),
    react(),
  ],
});
