module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended', // Habilita o Prettier como plugin do ESLint
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect', // Detecta a versão do React instalada
      },
    },
    rules: {
      'prettier/prettier': 'error', // Configura erros de formatação do Prettier
      'react/prop-types': 'off', // Desabilita checagem de prop-types se usar TypeScript
    },
  };
  