module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        'standard',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:vue/recommended'
    ],
    plugins: ['vue'],
    rules: {

        /**
         * General
         */

        // Enforce import order
        'import/order': 'error',

        // Imports should come first
        'import/first': 'error',

        // Other import rules
        'import/no-mutable-exports': 'error',

        // Allow unresolved imports
        'import/no-unresolved': 'off',

        // Allow async-await
        'generator-star-spacing': 'off',

        // Allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

        // Prefer const over let
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
        }],

        // No single if in an "else" block
        'no-lonely-if': 'error',

        // Force curly braces for control flow,
        // including if blocks with a single statement
        curly: ['error', 'all'],

        // No async function without await
        'require-await': 'error',

        // Force dot notation when possible
        'dot-notation': 'error',

        // No var
        'no-var': 'error',

        // Force object shorthand where possible
        'object-shorthand': 'error',

        // No useless destructuring/importing/exporting renames
        'no-useless-rename': 'error',

        /**
         * Vue
         */

         // Disable template errors regarding invalid end tags
        'vue/no-parsing-error': ['error', {
         'x-invalid-end-tag': false
        }],

        // Set indentation to 4 spaces
        'vue/html-indent': ['error', 4],
    }
}
