// Allow for typical indexes, increments, and ms/second
const allowedMagicNumbers = [-1, 0, 1, 2, 1000]

const baseBlankLineBetweenStatementsConfig = [
  { blankLine: 'always', prev: 'block-like', next: '*' },
  { blankLine: 'always', prev: 'break', next: '*' },
  { blankLine: 'always', prev: ['case', 'default'], next: '*' },
  { blankLine: 'always', prev: '*', next: 'class' },
  { blankLine: 'always', prev: '*', next: 'default' },
  { blankLine: 'always', prev: '*', next: 'do' },
  { blankLine: 'always', prev: '*', next: 'for' },
  { blankLine: 'always', prev: '*', next: 'function' },
  { blankLine: 'always', prev: '*', next: 'if' },
  { blankLine: 'always', prev: '*', next: 'iife' },
  { blankLine: 'always', prev: '*', next: 'switch' },
  { blankLine: 'always', prev: 'case', next: 'case' },
  { blankLine: 'always', prev: '*', next: 'try' },
  { blankLine: 'always', prev: '*', next: 'while' }
]

const baseRules = {
  'accessor-pairs': 'error',
  'array-callback-return': ['error', { checkForEach: true }],
  curly: ['error', 'all'],
  'comma-spacing': ['off', { before: false, after: true }], // prettier handles this
  'consistent-return': 'error',
  'consistent-this': ['error', '$this'],
  'default-case': 'error',
  'default-param-last': 'error',
  'dot-notation': 'error',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': 'error',
  'max-depth': ['error', { max: 5 }],
  'no-alert': 'error',
  'no-array-constructor': 'error',
  'no-await-in-loop': 'error',
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-constructor-return': 'error',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'off', // prettier handles this
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': ['error', { ignore: allowedMagicNumbers }],
  'no-mixed-operators': 'off', // prettier handles this
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-param-reassign': ['error', { props: false }],
  'no-promise-executor-return': 'error',
  'no-return-assign': ['error', 'always'],
  'no-return-await': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unneeded-ternary': 'error',
  'no-unreachable-loop': 'error',
  'no-unused-expressions': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': ['error', { varsIgnorePattern: 'exhaustiveCheck' }],
  'no-use-before-define': 'error',
  'no-useless-call': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'object-shorthand': 'error',
  'padding-line-between-statements': [
    'error',
    ...baseBlankLineBetweenStatementsConfig
  ],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  quotes: ['off', 'single', { avoidEscape: true }], // prettier handles this
  'require-await': 'error',
  'require-unicode-regexp': 'error',
  'space-before-function-paren': [
    // prettier handles this
    'off',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }
  ],
  'spaced-comment': ['error', 'always'],
  'symbol-description': 'error',
  yoda: 'error'
}

const importRules = {
  // eslint-plugin-import
  'import/default': 'error',
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': ['error', { js: 'never', json: 'always' }],
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': [
    'error',
    {
      count: 1
      // considerComments: true  // when next version of import plugin is released
    }
  ],
  'import/no-absolute-path': 'error',
  'import/no-anonymous-default-export': 'error',
  'import/no-cycle': 'off',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'error',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'off',
  'import/no-extraneous-dependencies': 'error',
  'import/no-import-module-exports': 'error',
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'off',
  'import/no-named-export': 'off',
  'import/no-namespace': 'error',
  'import/no-nodejs-modules': 'off',
  'import/no-require': 'off',
  'import/no-relative-packages': 'error',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': ['error', { allow: ['**/*.+(css|pcss|svg)'] }],
  'import/no-unresolved': ['error', { commonjs: true }],
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: true,
      commonjs: true
    }
  ],
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'error',
    {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      'newlines-between': 'never'
    }
  ],
  'import/prefer-default-export': 'error',
  'import/unambiguous': 'off'
}

const overrides = [
  // Non-module js
  {
    files: ['*.js'],
    rules: {
      'import/no-unused-modules': 'off',
      'import/unambiguous': 'off'
    }
  }
]

module.exports = {
  allowedMagicNumbers,
  baseRules,
  baseBlankLineBetweenStatementsConfig,
  importRules,
  overrides
}
