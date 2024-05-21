import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import parserVue from 'vue-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';

const vueRules = {
  'vue/block-lang': [2, { script: { lang: 'ts' }, style: { allowNoLang: true } }],
  'vue/block-order': [2, { order: ['template', 'script', 'style'] }],
  'vue/block-tag-newline': 2,
  'vue/component-api-style': [2, ['script-setup']],
  'vue/component-name-in-template-casing': [2, 'PascalCase', { registeredComponentsOnly: false }],
  'vue/component-options-name-casing': 2,
  'vue/custom-event-name-casing': 1,
  'vue/define-emits-declaration': 2,
  'vue/define-macros-order': 2,
  'vue/define-props-declaration': 2,
  'vue/dot-notation': 2,
  'vue/enforce-style-attribute': 1,
  'vue/eqeqeq': 1,
  'vue/html-button-has-type': 1,
  'vue/html-comment-content-newline': 2,
  'vue/html-comment-content-spacing': 2,
  'vue/html-comment-indent': 2,
  'vue/match-component-file-name': [0, { extensions: ['vue'], shouldMatchCase: true }],
  'vue/match-component-import-name': 2,
  'vue/new-line-between-multi-line-property': 2,
  'vue/next-tick-style': 2,
  'vue/no-boolean-default': 1,
  'vue/no-console': 2,
  'vue/no-constant-condition': 1,
  'vue/no-deprecated-model-definition': 2,
  'vue/no-duplicate-attr-inheritance': 2,
  'vue/no-empty-component-block': 2,
  'vue/no-empty-pattern': 2,
  'vue/no-irregular-whitespace': 2,
  'vue/no-loss-of-precision': 2,
  'vue/no-multiple-objects-in-class': 2,
  'vue/no-potential-component-option-typo': 2,
  'vue/no-ref-object-reactivity-loss': 2,
  'vue/no-required-prop-with-default': 1,
  // 确实有这种在根目录设置 v-if 的需求，比如 NoticeBarUser 组件
  // 'vue/no-root-v-if': 2,
  'vue/no-setup-props-reactivity-loss': 1,
  'vue/no-sparse-arrays': 2,
  'vue/no-static-inline-styles': 1,
  'vue/no-template-target-blank': 1,
  'vue/no-this-in-before-route-enter': 2,
  'vue/no-undef-components': [
    2,
    {
      // Element Plus 和 Vue Router 作为例外
      ignorePatterns: ['el(\\-\\w+)+', 'router(\\-\\w+)+'],
    },
  ],
  'vue/no-undef-properties': 2,
  // 2024.01.27 vue 最新版本为 3.4.15
  'vue/no-unsupported-features': [2, { version: '^3.4.15' }],
  'vue/no-unused-emit-declarations': 1,
  'vue/no-unused-properties': 1,
  'vue/no-unused-refs': 2,
  'vue/no-use-v-else-with-v-for': 2,
  'vue/no-useless-concat': 2,
  'vue/no-useless-mustaches': 2,
  'vue/no-useless-v-bind': 2,
  'vue/no-v-text': 2,
  'vue/object-shorthand': 2,
  'vue/padding-line-between-blocks': 2,
  'vue/padding-line-between-tags': 2,
  'vue/padding-lines-in-component-definition': 2,
  'vue/prefer-define-options': 2,
  'vue/prefer-prop-type-boolean-first': 2,
  'vue/prefer-separate-static-class': 2,
  'vue/prefer-template': 2,
  'vue/prefer-true-attribute-shorthand': 1,
  'vue/require-direct-export': 2,
  'vue/require-emit-validator': 2,
  // 2024.01.27 eslint-plugin-vue@9.20.1 尚未支持此规则
  // 'vue/require-explicit-slots': 2,
  'vue/require-expose': 2,
  'vue/require-macro-variable-name': 1,
  'vue/require-name-property': 2,
  // @TODO 补全注释
  // 'vue/require-prop-comment': 1,
  'vue/require-typed-object-prop': 2,
  'vue/require-typed-ref': 2,
  'vue/sort-keys': 2,
  'vue/v-for-delimiter-style': 2,
  'vue/valid-define-options': 2,
};

export default [
  // eslint 默认推荐规则
  pluginJs.configs.recommended,
  // ts 默认推荐规则
  ...tseslint.configs.recommended,
  // vue3 基础推荐规则
  ...pluginVue.configs['flat/recommended'],
  // 默认推荐规则
  eslintConfigPrettier,
  {
    files: ['**/*.vue'],
    ignores: ['**/*.config.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      ecmaVersion: 2020,
      parser: parserVue,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      ...vueRules,
      'no-console': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
    },
  },
];
