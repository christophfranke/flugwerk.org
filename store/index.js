import Vue from 'vue'
import Vuex from 'vuex'
import Api from '~/util/api'
import linkResolver from '~/util/linkResolver'


export default () => new Vuex.Store({
  getters: {
    content: ({ content }) => content,
    header: ({ content }) => content.find(doc => doc.type === 'header'),
    pages: (state, { content }) => content.filter(doc => doc.type === 'page'),
    page: (state, { pages }) => slug => {
      const page = pages.find(page => page.uid === slug)
      return page && page.data
    },
    events: (state, { content }) => content.filter(doc => doc.type === 'event'),
    event: (state, { events }) => slug => {
      const event = events.find(event => event.uid === slug)
      return event && event.data
    },
    slices: (state, { page, home }) => slug => (slug ? page(slug) : home).body,
    // navigation: (state, { content }) => content.find(doc => doc.type === 'site_navigation').data.pages,
    // navEntries: (state, { navigation, page }) =>
    //   navigation.map(navigation => ({
    //     title: (navigation.name && navigation.name[0].text) || (navigation.page.uid && page(navigation.page.uid).title[0].text),
    //     url: linkResolver(navigation.page)
    //   })).filter(({ url }) => url)
  },
  state: {
    content: {}
  },
  actions: {
    nuxtServerInit({ state }, { req }) {
      return Api({ req }).then(api => api.query('', { pageSize : 100 }))
        .then(response => {
          if (response.total_pages > 1) {
            console.error('There are more results than fit into first response page. This will lead to missing cms data. Do another api request for the next page to fix this.')
          }
          return response.results
        }).then(content => {
          Vue.set(state, 'content', content)
        })
    },
  }
})