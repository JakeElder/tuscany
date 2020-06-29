const withTranspiledModules = require("next-transpile-modules")([
  "@mindfulstudio",
]);

module.exports = withTranspiledModules({
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.resolve.alias["@mindfulstudio/tuscany-components"] =
        "@mindfulstudio/tuscany-components/src";
      config.resolve.alias["@mindfulstudio/tuscany-types"] =
        "@mindfulstudio/tuscany-types/types";
    }
    return config;
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
});
