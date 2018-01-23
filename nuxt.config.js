module.exports = {
  build: {
    vendor: ['element-ui']
  },
  plugins: [
    // Will inject the plugin in the $root app and also in the context as `i18n`
    { src: '~plugins/vuetify.js' }
  ],
  srcDir: '.',
  head: {
    title: 'gauto',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  router: { base: '/gmarket-gazua/' },
}
