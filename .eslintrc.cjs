module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    // "simple-import-sort",
    "react-refresh",
    "prettier",
    "react",
    "import",
  ],
  extends: ["next", "next/core-web-vitals", "plugin:prettier/recommended"],
  settings: {
    "import/resolver": "node",
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "import/order": "off",
    "consistent-return": "off",
    "no-restricted-exports": "off",
    "no-use-before-define": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "@typescript-eslint/no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
    // "simple-import-sort/imports": "error",
    // "simple-import-sort/exports": "error",

    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],

    // "simple-import-sort/imports": [
    //   "error",
    //   {
    //     groups: [
    //       // react > next > @ > a~z
    //       ["^react$", "^next", "^@", "^[a-z]"],
    //       // ~
    //       ["^~"],
    //       // `../` > './'
    //       [
    //         "^\\.\\.(?!/?$)",
    //         "^\\.\\./?$",
    //         "^\\./(?=.*/)(?!/?$)",
    //         "^\\.(?!/?$)",
    //         "^\\./?$",
    //       ],
    //       // Side effect imports
    //       ["^\\u0000"],
    //     ],
    //   },
    // ],
    // "simple-import-sort/exports": "error",
    "import/no-duplicates": "error",

    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "_",
        varsIgnorePattern: "_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
    ],
    "prettier/prettier": ["error"],
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.ts", "**/*.tsx"],
      rules: {
        // "simple-import-sort/imports": [
        //   "error",
        //   {
        //     groups: [
        //       // `react` first, `next` second, then packages starting with a character
        //       ["^react$", "^next", "^[a-z]"],
        //       // Packages starting with `@`
        //       ["^@"],
        //       // Packages starting with `~`
        //       ["^~"],
        //       // Imports starting with `../`
        //       ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
        //       // Imports starting with `./`
        //       ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        //       // Style imports
        //       ["^.+\\.s?css$"],
        //       // Side effect imports
        //       ["^\\u0000"],
        //     ],
        //   },
        // ],
      },
    },
  ],
};
