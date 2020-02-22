import Vue from 'vue'
import Vuex from 'vuex'
import Api from '~/util/api'
import linkResolver from '~/util/linkResolver'


export default () => new Vuex.Store({
  getters: {
    content: ({ content }) => content,
    header: ({ content }) => content.find(doc => doc.type === 'header'),
    footer: ({ content }) => content.find(doc => doc.type === 'footer'),
    pages: (state, { content }) => content.filter(doc => doc.type === 'page'),
    page: (state, { pages }) => slug => {
      const page = pages.find(page => page.uid === slug)
      return page && page.data
    },
    events: (state, { content }) => content.filter(doc => doc.type === 'event')
      .sort((a, b) => new Date(a.data.time) - new Date(b.data.time)),
    event: (state, { events }) => slug => {
      const event = events.find(event => event.uid === slug)
      return event && event.data
    },
    profiles: (state, { content }) => content.filter(doc => doc.type === 'profile'),
    profile: (state, { profiles }) => uid => {
      const profile = profiles.find(profile => profile.uid === uid)
      return profile && profile.data
    },
    slices: (state, { page, home }) => slug => (slug ? page(slug) : home).body
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