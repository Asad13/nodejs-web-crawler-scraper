import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/', 'dist/', 'coverage/', '*.config.js', 'pnpm-lock.yaml', '.env'],
  },
  { files: ['src/**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    linterOptions: {
      reportUnusedInlineConfigs: 'warn',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  prettier,
];
