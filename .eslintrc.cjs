module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", 'tailwind.config.js', 'vite.config.ts', 'postcss.config.js'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.app.json'
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/react-in-jsx-scope": "off",
    "prefer-const": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    "react/function-component-definition": [
      2,
      {
        "namedComponents": [
          "arrow-function",
          "function-declaration"
        ]
      }
    ],
  },
};