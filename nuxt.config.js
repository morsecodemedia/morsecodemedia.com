const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'morsecodemedia.com' },
      { name: 'msapplication-TileColor', content: 'FFFFFF' },
      { name: 'msapplication-TileImage', content: '/favicon/mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: '/favicon/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/favicon/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/favicon/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/favicon/mstile-310x310.png' },
      { hid: 'description', name: 'description', content: 'description' }
    ],
    link: [
      { rel: 'author', href:'/humans.txt' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicon/favicon-196x196.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicon/favicon-128.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/favicon/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/favicon/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/favicon/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/favicon/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/favicon/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/favicon/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/favicon/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/favicon/apple-touch-icon-152x152.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#333',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage', ssr: false },
    { src: '~/plugins/axe', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-5476316-1'
    }],
    '@nuxtjs/style-resources',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    "nuxt-imagemin"
  ],

  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_typography.scss'
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
