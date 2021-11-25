import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}