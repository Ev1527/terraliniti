export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    '.nuxt/**',
    'dist/**',
    'coverage/**',
    'node_modules/**',
    'playwright-report/**',
    'test-results/**',
  ],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9-]*$',
      {
        message: 'Expected class selector to be kebab-case or camelCase',
      },
    ],
  },
}
