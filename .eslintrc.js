module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jest'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-console': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': 'off',
  },
}
