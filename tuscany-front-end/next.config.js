const withTranspiledModules = require("next-transpile-modules")([
  "@mindfulstudio",
]);

module.exports = withTranspiledModules({
  webpack: (config) => {
    config.resolve.alias["@/ui"] = "@mindfulstudio/tuscany-components/src";
    return config;
  },
});
