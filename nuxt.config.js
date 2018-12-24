const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Loading.vue',

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/i18n.js'],

  router: {
    middleware: 'i18n'
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  styleResources: {
    scss: ['./scss/libs/_mixins.scss', './scss/libs/_setting.scss']
  },
  fontawesome: {
    component: 'fa',
    imports: [
      // 如果要使用更多圖示，請單一個的加入，以達到最小化目標
      // fas 開頭的圖示加這
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faAngleDown']
      }
      // fab 開頭的圖示加這
      // {
      //   set: '@fortawesome/free-brands-svg-icons',
      //   icons: ['fab']
      // },
      // far 開頭的圖示加這
      // {
      //   set: '@fortawesome/free-regular-svg-icons',
      //   icons: ['far']
      // }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
