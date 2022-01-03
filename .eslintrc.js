module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:storybook/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/airbnb",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "import/prefer-default-export": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["**.test.js"],
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};