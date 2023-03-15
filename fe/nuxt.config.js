export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'howto-nuxt-connect-laravel-via-passport',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/sass/main.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    strategies: {
      passport: {
        name: 'passport',
        provider: 'laravel/passport',
        endpoints: {
          userInfo: '/api/user',
        },
        url: '/backend',
        clientId: process.env.API_CLIENT_ID,
        clientSecret: process.env.API_CLIENT_SECRET,
        redirectUri: process.env.API_REDIRECT_URI,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    proxy: true,
  },

  proxy: {
    '/backend/': {
      target: process.env.API_URL,
      pathRewrite: { '^/backend/': '' },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseURL: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    oauth2: {
      clientId: process.env.API_CLIENT_ID,
      clientSecret: process.env.API_CLIENT_SECRET,
      redirectUri: process.env.API_REDIRECT_URI,
    },
  },

  googleFonts: {
    families: {
      'Josefin+Sans': true,
      Lato: [100, 300],
    },
  },
}
