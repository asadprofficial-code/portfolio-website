import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'

export default defineConfig([
  globalIgnores(['.next', 'out', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-irregular-whitespace': 'error',
      'eol-last': 'error',
    },
  },
])
