module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.app.json'
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prefer-const": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
  },
};