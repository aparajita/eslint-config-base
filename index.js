const { join } = require('path')
const { kBaseRules, kNamingConventions, kTypeScriptRules } = require('./rules')

module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowAutomaticSingleRunInference: true,
    tsconfigRootDir: process.cwd()
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.cjs', '.mjs', '.ts'] }
    }
  },

  rules: kBaseRules,

  overrides: [
    // TypeScript
    {
      files: ['*.ts', '*.d.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: join(process.cwd(), 'tsconfig.json')
      },
      rules: { ...kTypeScriptRules }
    },

    // TypeScript definitions
    {
      files: ['*.d.ts'],
      rules: { 'spaced-comment': 'off' }
    },

    // Vite env files
    {
      files: ['env.d.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['typeProperty'],
            format: ['UPPER_CASE'],
            filter: '^VITE_'
          },

          ...kNamingConventions
        ]
      }
    },

    // Plain js
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      rules: { '@typescript-eslint/no-var-requires': 'off' }
    }
  ]
}
