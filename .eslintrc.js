module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  // extends: [
  //     "plugin:vue/essential",
  //     "eslint:recommended",
  //     "plugin:vue/recommended",
  //     "plugin:prettier-vue/recommended",
  //     "prettier/vue",
  // ],
  // "@vue/prettier"
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
