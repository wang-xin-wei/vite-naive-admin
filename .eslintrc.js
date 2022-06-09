module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
  },
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    },
    {
      files: ['src/views/index.vue', 'src/views/**/index.vue', 'src/components/**/index.vue', 'src/layout/**/index.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
