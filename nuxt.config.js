const webpack = require("webpack");
export default {

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
      // { type: 'text/javascript', src: 'js/popper.min.js', body: true },
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
      { type: 'text/javascript', src: 'js/main.js', body: true }
    ],
  },

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

  plugins: [
    {src: "~/plugins/lodash.js"},
    {src: '~/plugins/vee-validate.js', ssr: true },
    {src: '~/plugins/qrcode.js', ssr: true },
    {src: '~/plugins/qr.js', ssr: true },
    {src: "~/plugins/vue2-google-maps.js"},
    {src: "~/plugins/vue-phone-number.js"},
    {src: "~/plugins/vue-form-wizard.js"},
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  server: {
      port: 5000 // default: 3000
  },

  axios: {
    baseURL:"https://api.adapass.org/selfCompany"
  },

  build: {
    transpile: ['vee-validate'],
    vendor: ["vue2-google-maps","jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ]
  }
}
