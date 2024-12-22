// eslint.cjs

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12, // 최신 ECMAScript 버전
    sourceType: "module", // ESM 사용 시 'module'
  },
  rules: {
    // 규칙 없음, 기본 값 사용
  },
};
