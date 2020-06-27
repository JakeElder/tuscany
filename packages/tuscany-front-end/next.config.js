const withTranspiledModules = require("next-transpile-modules")([
  "@mindfulstudio",
]);

module.exports = withTranspiledModules({
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
});
