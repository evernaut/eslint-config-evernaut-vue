const eslintConfig = require("./src/index");

module.exports = {
  ...eslintConfig,
  env: {
    es6: true,
    node: true,
  },
  root: true,
};
