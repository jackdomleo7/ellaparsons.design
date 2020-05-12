export default {
  mode: 'universal',
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-165367468-3',
        defer: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
        if(window.location.hostname != "ellaparsons.design") {
          window['ga-disable-UA-165367468-3'] = true;
        }
        else {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'UA-165367468-3');
        }
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    titleTemplate: '%s | Ella Parsons - Designer & Photographer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'robots', content: 'index, follow' },
      { name: 'msapplication-TileColor', content: '#e34396' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/mstile-144x144.png'
      },
      { name: 'theme-color', content: '#e34396' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: "/favicons/apple-touch-icon.png" },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: "/favicons/favicon-32x32.png" },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: "/favicons/favicon-16x16.png" },
      { rel: 'manifest', href: "/site.webmanifest" },
      { rel: 'mask-icon', color: '#e34396', href: "/favicons/safari-pinned-tab.svg" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Slab|Playfair+Display|Sacramento&display=swap' }
    ]
  },
  pwa: {
    meta: {
      name: 'Ella Parsons',
      author: 'Jack Domleo',
      description:
        'I\'m <%= VUE_APP_NAME %> and I love anything and everything to do with design. I love taking photos and being outdoors.',
      ogType: 'profile',
      ogHost: 'https://ellaparsons.design',
      ogImage: {
        path: '/open-graph.png',
        width: '1200',
        height: '630',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image'
    }
  },
  loading: { color: '#e34396' },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],
  build: {
  }
}
