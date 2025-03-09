import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from '@stylistic/eslint-plugin-js';
import playwright from 'eslint-plugin-playwright';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
  },
  {
    rules: {
      "no-unused-vars": 2,
      "@stylistic/js/space-in-parens": ["error", "never"]
    }
  }
];