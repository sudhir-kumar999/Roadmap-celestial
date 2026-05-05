import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    rules: {
      // Add custom Node/TS rules here
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars":"warn",
      "@typescript-eslint/consistent-type-imports":"warn",
      "@typescript-eslint/no-explicit-any": "error"
    }
  },
  {
    ignores: ["dist/", "node_modules/"] 
  }
]);
