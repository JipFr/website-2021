export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jip Frijlink',
    meta: [
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Jip Frijlink',
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Jip Frijlink's website",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "Jip Frijlink's website",
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: "Jip's site",
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#457461',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://frij.link/icon.png',
      },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
        rel: 'stylesheet',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  content: {
    markdown: {
      prism: {
        theme: '~/assets/scss/prism.scss',
      },
    },
  },
  css: ['assets/scss/main.scss'],
  components: false,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
}
