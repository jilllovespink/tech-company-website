// eslint.config.js
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

// 兼容不同版本的 flat config key（有的版本是 'flat/vue3-recommended'，有的是 'flat/recommended'）
const vueFlatConfig =
  pluginVue.configs["flat/vue3-recommended"] ??
  pluginVue.configs["flat/recommended"];

export default [
  // 忽略輸出與套件
  { ignores: ["dist/**", "node_modules/**"] },

  // JS 基本規則
  js.configs.recommended,

  // Vue 3 推薦規則（必須展開，因為它本身就是一組陣列）
  ...vueFlatConfig,

  // 專案客製規則
  {
    files: ["**/*.{js,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Vue 3 允許多個 template root；若想強制單一 root，把這行拿掉即可
      "vue/no-multiple-template-root": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },
];
