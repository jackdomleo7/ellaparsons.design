require('dotenv').config();
const siteconfig = require('./siteconfig.json')

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s | Ella Parsons - Designer & Photographer',
  },
  css: [
    'modern-normalize/modern-normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss'
  ],
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
      ogHost: siteconfig.base_url
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
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/sitemap' // Always declare last
  ],
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  sitemap: {
    hostname: siteconfig.base_url,
    exclude: ['/_icons', '/preview']
  },
  build: {
  }
}
