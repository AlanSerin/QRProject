export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AdaPass',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { type: 'text/javascript', src: 'js/vendor/jquery-3.5.1.min.js', body: true },
      { type: 'text/javascript', src: 'js/vendor/waypoints.min.js', body: true },
      { type: 'text/javascript', src: 'js/bootstrap.bundle.min.js', body: true },
      { type: 'text/javascript', src: 'js/jquery.meanmenu.js', body: true },
      { type: 'text/javascript', src: 'js/owl.carousel.min.js', body: true },
      { type: 'text/javascript', src: 'js/jquery.fancybox.min.js', body: true },
      { type: 'text/javascript', src: 'js/isotope.pkgd.min.js', body: true },
      { type: 'text/javascript', src: 'js/parallax.min.js', body: true },
      { type: 'text/javascript', src: 'js/backToTop.js', body: true },
      { type: 'text/javascript', src: 'js/jquery.counterup.min.js', body: true },
      { type: 'text/javascript', src: 'js/ajax-form.js', body: true },
      { type: 'text/javascript', src: 'js/wow.min.js', body: true },
      { type: 'text/javascript', src: 'js/imagesloaded.pkgd.min.js', body: true },
      { type: 'text/javascript', src: 'js/main.js', body: true },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/meanmenu.css',
    '@/assets/css/animate.min.css',
    '@/assets/css/owl.carousel.min.css',
    '@/assets/css/backToTop.css',
    '@/assets/css/jquery.fancybox.min.css',
    '@/assets/css/fontAwesome5Pro.css',
    '@/assets/css/elegantFont.css',
    '@/assets/css/default.css',
    '@/assets/css/style.css',
    '@/assets/css/vue-form-wizard.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/lodash.js"},
    {src: '~/plugins/vee-validate.js', ssr: true },
    {src: '~/plugins/qrcode.js', ssr: true },
    {src: '~/plugins/qr.js', ssr: true },
    {src: "~/plugins/vue2-google-maps.js"},
    {src: "~/plugins/vue-phone-number.js"},
    {src: "~/plugins/vue-form-wizard.js"},
    // { src: '~/plugins/googleMaps.js', ssr: true },
    // { src: '~/plugins/useGeolocation.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    // ['nuxt-gmaps', {
    //   key: 'AIzaSyBshazo-Nrs6_vKy0Ksn-b7FFXRsXHjhRY',
    //   //you can use libraries: ['places']
    // }],
  ],
  server: {
      port: 5000 // default: 3000
  },

  axios: {
    baseURL:"http://localhost:3000/selfCompany"
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
    vendor: ["vue2-google-maps"]
  }
}
