require('dotenv').config();

const title = 'Ella Parsons - Designer & Photographer';

export default {
  ssr: false,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: title,
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/clickaway.client.ts'
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/prismic'
  ],
  pwa: {
    meta: {
      description: 'Hi, I\'m Ella Parsons from Nottingham, UK. I love anything and everything to do with design, taking photos and being outdoors.',
      themeColor: '#ffc0cb',
      ogTitle: title,
      ogHost: process.env.BASE_URL
    }
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  prismic: {
    endpoint: 'https://ellaparsons-design.cdn.prismic.io/api/v2',
    apiOptions: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/sitemap' // Always declare last
  ],
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: ['/_icons']
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
