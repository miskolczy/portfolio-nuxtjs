export default {
    server: {
      host: '0' // default: localhost
    },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
      { property: 'og:url', content: 'https://miskolczy.net/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Jonathan Miskolczy – Portfolio' },
      { property: 'og:description', content: 'Hello, my name is Jonathan Miskolczy, I am a former Bachelor of Arts student at the FHNW HGK in Basel, Switzerland. I have studied visual communication with deeper focus on typography.' },
      { property: 'og:image', content: 'https://miskolczy.net/open-graph.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:alt', content: 'Wordmark – Miskolczy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/safari-pinned-tab.svg', color: '#6565ac' },
      { rel: 'mask-icon', href: '/site.webmanifest' }
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
