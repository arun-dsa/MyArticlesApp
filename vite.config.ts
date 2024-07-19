import path, { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import * as sass from "sass";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@components": resolve(__dirname, "./src/components"),
        "@utils": resolve(__dirname, "./src/utils"),
        "@interfaces": resolve(__dirname, "./src/interfaces"),
        "@pages": resolve(__dirname, "./src/pages"),
        "@config": resolve(__dirname, "./src/config"),
        "@tests": resolve(__dirname, "./tests"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: "./tests/setup.ts",
    },
  };
});
