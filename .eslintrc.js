module.exports = {
    settings: {
      react: { version: 'detect' },
    },
    parser: '@typescript-eslint/parser',
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    env: {
      es6: true,
      node: true,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          printWidth: 100,
          semi: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/no-unescaped-entities': 'off',
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
    },
    plugins: ['prettier', 'react', 'react-hooks'],
  };
  