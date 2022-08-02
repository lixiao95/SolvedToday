module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'alloy',
        'alloy/react',
        'alloy/typescript',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module'
    },
    env: {
        mocha: true
    },
    globals: {
        page: true
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-one-expression-per-line': [2, {
            allow: 'single-child'
        }],
        'react/jsx-boolean-value': [2, 'never'],
        'react/jsx-closing-bracket-location': [2, 'line-aligned'],
        'react/jsx-closing-tag-location': [2],
        'react/jsx-curly-newline': [
            2,
            {
                singleline: 'consistent',
                multiline: 'consistent'
            }
        ],
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-space-before-closing': [2, 'always'],
        'react/jsx-props-no-multi-spaces': [2],
        'react/jsx-tag-spacing': [
            2,
            { 'beforeClosing': 'never' }
        ],
        'react/jsx-max-props-per-line': [2, {
            maximum: {
                single: 3,
                multi: 1
            }
        }],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-wrap-multilines': [
            2,
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line'
            }
        ],
        '@typescript-eslint/no-use-before-define': 0,
        'no-undef': 0,
        '@typescript-eslint/quotes': [2, 'single'],
        'jsx-quotes': [2, 'prefer-double'],
        '@typescript-eslint/semi': [2, 'never'],
        '@typescript-eslint/comma-dangle': [2, 'never'],
        'comma-style': [2, 'last'],
        '@typescript-eslint/comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        '@typescript-eslint/indent': [2, 4],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        '@typescript-eslint/no-extra-parens': [2, 'all', { ignoreJSX: 'multi-line' }],
        '@typescript-eslint/space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'space-in-parens': [2, 'never'],
        '@typescript-eslint/space-infix-ops': [2, { int32Hint: true }],
        'dot-location': [2, 'property'],
        'no-implicit-coercion': [2],
        'no-multi-spaces': [2],
        'no-multiple-empty-lines': [2],
        'array-bracket-newline': [2, 'consistent'],
        'array-element-newline': [2, 'consistent'],
        'array-bracket-spacing': [2, 'never'],
        'no-param-reassign': [0],
        'block-spacing': [2],
        '@typescript-eslint/brace-style': [2],
        '@typescript-eslint/object-curly-spacing': [2, 'always'],
        'object-curly-newline': [2, { consistent: true }],
        'computed-property-spacing': [2],
        'consistent-this': [2],
        'key-spacing': [2],
        'arrow-spacing': [2],

        'array-callback-return': 0,
        '@typescript-eslint/consistent-type-assertions': 0
    },

    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/explicit-member-accessibility': 0
            }
        }
    ]
}
