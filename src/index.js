const eslintNativeRules = require("eslint-config-evernaut-javascript/src/eslint-native-rules");
const eslintNativeRulesDisabledByPrettier = require("eslint-config-evernaut-javascript/src/eslint-native-rules-disabled-by-prettier");
const eslintNativeRulesDisabledForSpecFiles = require("eslint-config-evernaut-javascript/src/eslint-native-rules-disabled-for-spec-files");
const eslintNativeRulesRestrictedByPrettier = require("eslint-config-evernaut-javascript/src/eslint-native-rules-restricted-by-prettier");
const eslintPluginJsonRules = require("eslint-config-evernaut-javascript/src/eslint-plugin-json-rules");
const eslintPluginPrettierRules = require("eslint-config-evernaut-javascript/src/eslint-plugin-prettier-rules");

const eslintNativeRulesDisabledByPluginTypescriptEslint = require("eslint-config-evernaut-typescript/src/eslint-native-rules-disabled-by-plugin-typescript-eslint.js");
const eslintPluginTypescriptEslintRules = require("eslint-config-evernaut-typescript/src/eslint-plugin-typescript-eslint-rules");
const eslintPluginTypescriptEslintRulesDisabledByPrettier = require("eslint-config-evernaut-typescript/src/eslint-plugin-typescript-eslint-rules-disabled-by-prettier");
const eslintPluginTypescriptEslintRulesDisabledForSpecFiles = require("eslint-config-evernaut-typescript/src/eslint-plugin-typescript-eslint-rules-disabled-for-spec-files");
const eslintPluginTypescriptEslintRulesRestrictedByPrettier = require("eslint-config-evernaut-typescript/src/eslint-plugin-typescript-eslint-rules-restricted-by-prettier");

const eslintNativeRulesDisabledByPluginVue = require("./eslint-native-rules-disabled-by-plugin-vue");
const eslintPluginVueEslintRules = require("./eslint-plugin-vue-eslint-rules");
const eslintPluginVueEslintRulesDisabledByPrettier = require("./eslint-plugin-vue-eslint-rules-disabled-by-prettier");

module.exports = {
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        ecmaVersion: 11,
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        sourceType: "module",
      },
      rules: {
        ...eslintNativeRules,
        ...eslintNativeRulesDisabledByPrettier,
        ...eslintNativeRulesRestrictedByPrettier,
        ...eslintPluginPrettierRules,
        ...eslintPluginJsonRules,
        ...eslintNativeRulesDisabledByPluginTypescriptEslint,
        ...eslintPluginTypescriptEslintRules,
        ...eslintPluginTypescriptEslintRulesDisabledByPrettier,
        ...eslintPluginTypescriptEslintRulesRestrictedByPrettier,
        ...eslintNativeRulesDisabledByPluginVue,
        ...eslintPluginVueEslintRules,
        ...eslintPluginVueEslintRulesDisabledByPrettier,
      },
    },
    {
      files: ["*.spec.js", "*.spec.ts"],
      rules: {
        ...eslintNativeRulesDisabledForSpecFiles,
      },
    },
    {
      files: ["*.spec.ts"],
      rules: {
        ...eslintPluginTypescriptEslintRulesDisabledForSpecFiles,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "json", "prettier", "vue"],
  rules: {
    ...eslintNativeRules,
    ...eslintNativeRulesDisabledByPrettier,
    ...eslintNativeRulesRestrictedByPrettier,
    ...eslintPluginJsonRules,
    ...eslintPluginPrettierRules,
  },
};
