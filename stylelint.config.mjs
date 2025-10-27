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
  rules: {},
}
