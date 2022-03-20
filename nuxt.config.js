export default {
    server: {
      host: '0' // default: localhost
    },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/portfolio-nuxtjs/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
        title: 'Jonathan Miskolczy – Portfolio, Selected works & Contact details',
  
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'msapplication-TileColor', content: '#6565ac' },
      { name: 'theme-color', content: '#000000' },
      { hid: 'author', name: 'author', content: 'Jonathan Miskolczy' },
      { hid: 'description', name: 'description', content: 'Hello, my name is Jonathan Miskolczy, I am a former Bachelor of Arts student at the FHNW HGK in Basel, Switzerland. I have studied visual communication with deeper focus on typography.' },
      { property: 'og:title', content: 'Jonathan Miskolczy – Portfolio' },
      { property: 'og:description', content: 'Hello, my name is Jonathan Miskolczy, I am a former Bachelor of Arts student at the FHNW HGK in Basel, Switzerland. I have studied visual communication with deeper focus on typography.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'miskolczy.net' },
      { property: 'og:image', content: '/portfolio-nuxtjs/link.jpg' },
      { name: 'twitter:image', content: '/portfolio-nuxtjs/link.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio-nuxtjs/favicon.ico', sizes: 'any' },
      { rel: 'icon', href: '/portfolio-nuxtjs/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/portfolio-nuxtjs/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/portfolio-nuxtjs/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/portfolio-nuxtjs/favicon-16x16.png' },
      { rel: 'manifest', href: '/portfolio-nuxtjs/safari-pinned-tab.svg', color: '#6565ac' },
      { rel: 'mask-icon', href: '/portfolio-nuxtjs/site.webmanifest' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
