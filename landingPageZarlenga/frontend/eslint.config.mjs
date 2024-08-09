import { defineConfig } from 'eslint';
import eslintRecommended from 'eslint-config-eslint-recommended';
import reactRecommended from 'eslint-config-react-recommended';

export default defineConfig({
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['react'],
      rules: {
        // Define any specific rules here
      },
      extends: [eslintRecommended, reactRecommended],
    },
  ],
});
