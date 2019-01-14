const pkg = require('./package')

const settings = {
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
  css: ['animate.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  env: { test: 123 },

  router: {
    middleware: ['testMiddle']
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'cn', iso: 'zh_CN', file: 'cn.js' },
          { code: 'en', iso: 'en_US', file: 'en.js' },
          { code: 'tw', iso: 'zh_TW', file: 'tw.js' }
        ],
        langDir: 'locales/',
        strategy: 'prefix_and_default',
        lazy: true,
        defaultLocale: 'tw'
      }
    ]
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
      },
      // fab 開頭的圖示加這
      // {
      //   set: '@fortawesome/free-brands-svg-icons',
      //   icons: ['fab']
      // },
      // far 開頭的圖示加這
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faAngry']
      }
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
      // console.log('webpack config: ', config)
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    terser: {
      terserOptions: {
        compress: { drop_console: true }
      }
    }
  }
}
if (process.env.DEPLOY === 'preproduction') {
  settings.vue = {
    config: {
      productionTip: true,
      devtools: true
    }
  }
  settings.build.terser = {
    terserOptions: {
      compress: { drop_debugger: false },
      output: { comments: true }
    }
  }
  settings.build.filenames = {
    chunk: () => '[name].[chunkhash].js'
  }
}
module.exports = settings
