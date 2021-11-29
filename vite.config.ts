import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslintPlugin from 'vite-plugin-eslint'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: 'src/assets/css/quasar-variables.sass',
    }),

    // eslintPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
      {
        find: '@models',
        replacement: '/src/models',
      },
    ],
  },
})
