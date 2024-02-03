module.exports = {
  printWidth: 100,
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  endOfLine: "auto",
  eslintIntegration: false,
  htmlWhitespaceSensitivity: "ignore",
  ignorePath: ".prettierignore",
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  requireConfig: false,
  stylelintIntegration: false,
  trailingComma: "es5",
  "prettier.tslintIntegration": false,
};
