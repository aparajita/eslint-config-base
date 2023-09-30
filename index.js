const { baseRules, importRules, overrides } = require('./lib/base')
const { typeScriptOverrides } = require('./lib/typescript')

module.exports = {
  extends: ['eslint:recommended', 'standard', 'plugin:import/recommended'],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx'] },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...baseRules,
    ...importRules,
  },
  overrides: [...overrides, ...typeScriptOverrides],
}
