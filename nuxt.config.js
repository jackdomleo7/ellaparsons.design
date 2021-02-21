require('dotenv').config();

export default {
  ssr: false,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ella Parsons - Designer & Photographer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'modern-normalize/modern-normalize.css',
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
    'nuxt-rfg-icon', // Icons are generated during `npm run build`
    '@nuxtjs/robots',
    '@nuxtjs/svg-sprite',
    '@luxdamore/nuxt-prune-html',
    '@nuxtjs/sitemap' // Always declare last
  ],
  'rfg-icon': {
    static: true,
    masterPicture: 'static/icon.png',
    force: true,
    rfg: {
      "iconsPath": "/",
      "design": {
        "ios": {
          "pictureAspect": "backgroundAndMargin",
          "backgroundColor": "#ffffff",
          "margin": "21%",
          "assets": {
            "ios6AndPriorIcons": true,
            "ios7AndLaterIcons": true,
            "precomposedIcons": true,
            "declareOnlyDefaultIcon": true
          }
        },
        "desktopBrowser": {
          "design": "raw"
        },
        "windows": {
          "pictureAspect": "whiteSilhouette",
          "backgroundColor": "#00aba9",
          "onConflict": "override",
          "assets": {
            "windows80Ie10Tile": true,
            "windows10Ie11EdgeTiles": {
              "small": true,
              "medium": true,
              "big": true,
              "rectangle": true
            }
          }
        },
        "androidChrome": {
          "pictureAspect": "backgroundAndMargin",
          "margin": "17%",
          "backgroundColor": "#ffffff",
          "themeColor": "#ffffff",
          "manifest": {
            "name": "Ella Parsons",
            "display": "browser",
            "orientation": "notSet",
            "onConflict": "override",
            "declared": true
          },
          "assets": {
            "legacyIcon": true,
            "lowResolutionIcons": true
          }
        },
        "safariPinnedTab": {
          "pictureAspect": "silhouette",
          "themeColor": "#ffc0cb"
        }
      },
      "settings": {
        "scalingAlgorithm": "Mitchell",
        "errorOnImageTooSmall": false,
        "readmeFile": false,
        "htmlCodeFile": false,
        "usePathAsIs": false
      }
    }    
  },
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
