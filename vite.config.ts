import path from "node:path";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import icons from "./plugins/watch-icons";

export default defineConfig({
  base: "/component-registry-test/",
  build: {
    target: "es2015",
  },
  plugins: [vue(), icons()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./registry")
    } 
  }
})
