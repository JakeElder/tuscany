module.exports = {
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-backgrounds",
    "@storybook/addon-controls",
  ],
  stories: ["../stories/**/*.stories.tsx"],
  babel: (config) => {
    config.presets.push(require.resolve("@emotion/babel-preset-css-prop"));
    return config;
  },
};
