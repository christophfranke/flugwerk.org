import Vue from 'vue';
import Vuex from 'vuex';
import Api from '~/util/api';
import isLang from '~/util/isLang';

export default () =>
    new Vuex.Store({
        getters: {
            content: ({ content }) => content,
            header: ({ content }) =>
                content.find(doc => doc.type === 'header' && isLang(doc, 'de')),
            footer: ({ content }) => content.find(doc => doc.type === 'footer'),
            pages: (state, { content }) =>
                content.filter(doc => doc.type === 'page'),
            page: (state, { pages }) => (slug, lang) => {
                const page = pages.find(page => {
                    return page.uid === slug && isLang(page, lang);
                });
                return page && page.data;
            },
            events: (state, { content }) =>
                content
                    .filter(doc => doc.type === 'event')
                    .sort(
                        (a, b) => new Date(a.data.time) - new Date(b.data.time)
                    ),
            event: (state, { events }) => (slug, lang) => {
                const event = events.find(
                    event => event.uid === slug && isLang(event, lang)
                );
                return event && event.data;
            },
            profiles: (state, { content }) =>
                content.filter(doc => doc.type === 'profile'),
            profile: (state, { profiles }) => (uid, lang) => {
                const profile = profiles.find(
                    profile => profile.uid === uid && isLang(profile, lang)
                );
                return profile && profile.data;
            },
            slices: (state, { page, home }) => (slug, lang) =>
                (slug && lang ? page(slug, lang) : home).body,
            alternateLang: ({ lang }) => (lang == 'de' ? 'en' : 'de')
        },
        state: {
            content: {},
            lang: 'de'
        },
        mutations: {
            setLang(state, lang) {
                state.lang = lang;
            }
        },
        actions: {
            nuxtServerInit({ state }, { req }) {
                return Api({ req })
                    .then(api => api.query('', { pageSize: 100, lang: '*' }))
                    .then(response => {
                        if (response.total_pages > 1) {
                            console.error(
                                'There are more results than fit into first response page. This will lead to missing cms data. Do another api request for the next page to fix this.'
                            );
                        }
                        return response.results;
                    })
                    .then(content => {
                        Vue.set(state, 'content', content);
                    });
            }
        }
    });
