/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    reporters: ["default", "junit"],
    outputFile: "junit.xml",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "cobertura"],
    },
  },
});
