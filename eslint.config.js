const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
      'import/prefer-default-export': 'off',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-use-before-define': ['error', { functions: false }],
      'no-console': 'warn',
      'no-empty': 'warn',
    },
  },
];
