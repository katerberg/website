import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// Note: eslint-plugin-unicorn is not yet compatible with ESLint 9 (context.getScope etc).
// Re-enable when the plugin supports the new API; keep the dependency for when that lands.
export default defineConfig([
  {
    name: 'project/ignores',
    ignores: [
      '.next/',
      'node_modules/',
      'out/',
      'public/',
      '.prettierrc.js',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
    ],
  },
  {
    name: 'project/base',
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ...js.configs.recommended,
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    name: 'project/next',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  ...compat.extends('prettier', 'plugin:prettier/recommended'),
]);
