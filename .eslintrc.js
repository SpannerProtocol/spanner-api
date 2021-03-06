const base = require('@open-web3/dev-config/config/eslint.cjs');

module.exports = {
    ...base,
    root:true,
    ignorePatterns: [
        '.eslintrc.cjs',
        '.eslintrc.js',
        '.github/**',
        '.idea/**',
        '.yarn/**',
        '**/build/*',
        '**/coverage/*',
        '**/node_modules/*'
    ],
    parserOptions: {
        ...base.parserOptions,
        project: ['./tsconfig.json']
    },
    rules: {
        ...base.rules,
        '@typescript-eslint/no-explicit-any': 'off'
    }
};
