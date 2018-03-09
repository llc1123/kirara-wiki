module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'extends': 'eslint:recommended',
  'rules': {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'no-confusing-arrow': ['error', {'allowParens': true}],
    'no-console': ['warn'],
    'react/jsx-filename-extension': 'off',
  }
}