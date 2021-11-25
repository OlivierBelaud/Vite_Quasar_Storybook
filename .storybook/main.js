const vue = require('@vitejs/plugin-vue');
const { quasar, transformAssetUrls } = require('@quasar/vite-plugin');

module.exports = {
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins.map(plugin => {
      if(plugin.name === 'vite:vue') {
        return vue({
          template: { transformAssetUrls }
        })
      }
      return plugin
    })

    config.plugins.push(
      quasar({
        sassVariables: '../src/assets/css/quasar-variables.sass'
      })
    )
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
}