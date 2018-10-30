module.exports = {
  extends: [
    "eslint-config-umi",
  ],
  globals: {
    "THIS_IS_A_TEST_DEFINE": true
  },
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": [2, "single"],
    "semi": ["error", "always"],
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-empty": 2,
    "no-eq-null": 2,
    "no-new": 0,
    "no-fallthrough": 0,
    "no-unreachable": 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
