import theme from '@nuxt/content-theme-docs'

const createSitemapRoutes = async () => {
  const { $content } = require('@nuxt/content')
  let routes = [];

  const posts = await $content({ deep: true })
    .only(['to'])
    .fetch()

  posts.forEach( function( post, index ){
    // For some reason it always pulls the settings.json from the content.
    if( post.to != '//settings' ){
      routes.push( post.to );
    }
  });

  return routes;
}

export default theme({
  docs: {
    primaryColor: '#3B82F6'
  },
  buildModules: [
    'vue-plausible',
    ['nuxt-canonical', { baseUrl: 'https://serversideup.net/open-source/spin' }]
  ],
  modules: [
    '@nuxtjs/sitemap'
  ],
  plausible: {
    domain: 'serversideup.net',
    apiHost: 'https://a.521dimensions.com'
  },
  router: {
    base: '/open-source/spin/'
  },
  sitemap: {
    hostname: 'https://serversideup.net',
    gzip: true,
    routes: createSitemapRoutes
  }
})