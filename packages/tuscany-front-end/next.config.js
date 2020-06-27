const withTranspiledModules = require("next-transpile-modules")([
  "@mindfulstudio",
]);

module.exports = withTranspiledModules({
  webpack: (config) => {
    config.resolve.alias["@mindfulstudio/tuscany-components"] =
      "@mindfulstudio/tuscany-components/src";
    return config;
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
});
