import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  globalName: "Numeric",
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
});
