// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
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
);
