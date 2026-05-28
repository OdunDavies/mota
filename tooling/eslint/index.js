const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', '@next/next', 'tailwindcss'],
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { project } },
    tailwindcss: { callees: ['cn', 'cva'] },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'tailwindcss/no-custom-classname': 'off',
    'import/order': 'off',
  },
  ignorePatterns: [
    '*.js',
    '*.jsx',
    'node_modules/',
    '.next/',
    'dist/',
    '*.config.*',
    '*.d.ts',
  ],
};
