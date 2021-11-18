import routes from './util/routes.js';

export default {
    plugins: [{ src: 'plugins/client-only', ssr: false }],
    modules: ['@nuxtjs/redirect-module'],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    generate: {
        routes() {
            return routes();
        }
    },
    redirect: []
};
