const { join } = require('path')
const {
  baseRules,
  allowedMagicNumbers,
  baseBlankLineBetweenStatementsConfig
} = require('./base')

function fromBaseRule(rule, options) {
  return {
    [rule]: 'off',
    [`@typescript-eslint/${rule}`]: options || baseRules[rule] || 'error'
  }
}

const namingConventions = [
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'forbid'
  },
  {
    selector: 'variable',
    format: ['camelCase']
  },
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'allow'
  },
  {
    selector: 'objectLiteralProperty',
    format: ['camelCase', 'snake_case']
  },
  {
    selector: ['property', 'objectLiteralProperty'],
    format: ['camelCase', 'snake_case', 'PascalCase'],
    leadingUnderscore: 'allow',
    filter: '^(_id|_rev|_deleted|_removed|attached_to|content_type|space_key)$'
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase']
  },
  {
    selector: 'typeLike',
    format: ['PascalCase']
  },
  {
    selector: 'enum',
    format: ['PascalCase']
  }
]

/*
  NOTE: Whenever you see a call to fromBaseRule(), it's because
  the base rule must be disabled as it can report incorrect errors.
*/
const typeScriptRules = {
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 7
    }
  ],
  ...fromBaseRule('brace-style', ['off', '1tbs']), // prettier handles this
  '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
  ...fromBaseRule('comma-dangle', 'off'), // prettier handles this
  ...fromBaseRule('comma-spacing'),
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'never' }
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: true }
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true
    }
  ],
  ...fromBaseRule('default-param-last'),
  ...fromBaseRule('dot-notation'),
  '@typescript-eslint/explicit-function-return-type': ['error'],
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    { accessibility: 'no-public' }
  ],
  '@typescript-eslint/explicit-module-boundary-types': ['error'],
  ...fromBaseRule('func-call-spacing', ['off', 'never']), // prettier handles this
  ...fromBaseRule('keyword-spacing', ['off', { before: true, after: true }]), // prettier handles this
  ...fromBaseRule('lines-between-class-members', [
    'error',
    'always',
    {
      exceptAfterOverload: true,
      exceptAfterSingleLine: true
    }
  ]),
  '@typescript-eslint/member-delimiter-style': [
    // prettier handles this
    'off',
    {
      multiline: {
        delimiter: 'none'
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      }
    }
  ],
  // Use the default: https://typescript-eslint.io/rules/member-ordering#default-configuration
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  // See https://typescript-eslint.io/rules/naming-convention
  '@typescript-eslint/naming-convention': ['error', ...namingConventions],
  '@typescript-eslint/no-base-to-string': ['error'],
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  '@typescript-eslint/no-confusing-void-expression': 'error',
  ...fromBaseRule('no-dupe-class-members'),
  ...fromBaseRule('no-duplicate-imports'),
  '@typescript-eslint/no-dynamic-delete': 'error',
  ...fromBaseRule('no-extra-parens', ['off']),
  ...fromBaseRule('no-extra-semi', ['off']), // prettier handles this
  '@typescript-eslint/no-extraneous-class': ['error'],
  ...fromBaseRule('no-invalid-this'),
  '@typescript-eslint/no-invalid-void-type': ['error'],
  ...fromBaseRule('no-loop-func'),
  ...fromBaseRule('no-magic-numbers', [
    'error',
    {
      ignore: allowedMagicNumbers,
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreTypeIndexes: true
    }
  ]),
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    {
      checkNever: false
    }
  ],
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksConditionals: true,
      checksVoidReturn: true
    }
  ],
  '@typescript-eslint/no-parameter-properties': ['error'],
  ...fromBaseRule('no-redeclare'),
  '@typescript-eslint/no-require-imports': 'error',
  ...fromBaseRule('no-shadow', ['error', { ignoreTypeValueShadow: true }]),
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  ...fromBaseRule('no-unused-expressions', ['error', { allowTernary: true }]),
  ...fromBaseRule('no-use-before-define'),
  ...fromBaseRule('no-useless-constructor'),
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  ...fromBaseRule('padding-line-between-statements', [
    'error',
    ...baseBlankLineBetweenStatementsConfig,
    {
      blankLine: 'always',
      prev: '*',
      next: 'interface'
    },
    {
      blankLine: 'always',
      prev: '*',
      next: ['import', 'type']
    },
    {
      blankLine: 'always',
      prev: ['import', 'type'],
      next: '*'
    },
    {
      blankLine: 'any',
      prev: 'type',
      next: 'type'
    },
    {
      blankLine: 'any',
      prev: 'import',
      next: 'import'
    }
  ]),
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-literal-enum-member': [
    'error',
    { allowBitwiseExpressions: true }
  ],
  '@typescript-eslint/prefer-nullish-coalescing': 'error',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-readonly': 'error',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  ...fromBaseRule('quotes'),
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true }
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
      allowBoolean: true,
      allowAny: false,
      allowNullish: true,
      allowRegExp: false
    }
  ],
  ...fromBaseRule('return-await', ['error', 'in-try-catch']),
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  '@typescript-eslint/unbound-method': 'error',
  '@typescript-eslint/unified-signatures': 'error'
}

const typeScriptOverrides = [
  // Plain js
  {
    files: ['*.js', '*.cjs', '*.mjs', '*.jsx'],
    rules: { '@typescript-eslint/no-var-requires': 'off' }
  },

  // TypeScript
  {
    files: ['*.ts', '*.tsx'],
    extends: [
      'eslint:recommended',
      'standard',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: join(process.cwd(), 'tsconfig.json')
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      }
    },
    rules: { ...typeScriptRules }
  },

  // TypeScript definitions
  {
    files: ['*.d.ts'],
    rules: { 'spaced-comment': 'off' }
  },

  // Vite env files
  {
    files: ['env.d.ts', 'vite-env.d.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['typeProperty'],
          format: ['UPPER_CASE'],
          filter: '^VITE_'
        },

        ...namingConventions
      ]
    }
  }
]

module.exports = {
  namingConventions,
  typeScriptOverrides,
  typeScriptRules
}
