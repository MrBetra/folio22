
export default {

  target: 'static',

  generate: {
    fallback: true
  },

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Italiana&display=swap'
      }
    ],
    // script: [
    //   { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" },
    //   { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/CSSRulePlugin.min.js" },
    //   { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js" },
    // ]
  },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/scss/settings.scss"
  ],
  /*
  ** Global SCSS variables
  */
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/footer.scss',
      '~/assets/scss/content/link.scss',
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    'nuxt-gsap-module'
  ],
  /*
  ** GSAP
  ** Plugins import
  */
  gsap: {
    extraPlugins: {
      // scrollTo: true,
      scrollTrigger: true
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
