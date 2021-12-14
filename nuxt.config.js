import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#3B82F6'
  },
  buildModules: [
    'vue-plausible',
    ['nuxt-canonical', { baseUrl: 'https://serversideup.net/open-source/spin' }]
  ],
  plausible: {
    domain: 'serversideup.net',
    apiHost: 'https://a.521dimensions.com'
  },
  router: {
    base: '/open-source/spin/'
  }
})