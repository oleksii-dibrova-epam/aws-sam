import { defineConfig } from 'eslint/config';
import tsEslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    // Replaces .eslintignore
    { ignores: ['node_modules/', 'coverage/', '.aws-sam/'] },

    // Replaces parser + "plugin:@typescript-eslint/recommended"
    tsEslint.configs.recommended,

    // Replaces "plugin:prettier/recommended" (keep it last)
    prettierRecommended,

    {
        files: ['**/*.ts'],
        rules: {
            // your overrides, e.g.
            // '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
]);
