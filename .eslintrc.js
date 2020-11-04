module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: [],
  rules: {},
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
};
