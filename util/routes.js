import Api from './api';
import linkResolver from './linkResolver';
import Prismic from '@prismicio/client';

export default () =>
    Api()
        .then(api =>
            api.query(Prismic.Predicates.at('document.type', 'page'), {
                pageSize: 100,
                lang: '*'
            })
        )
        .then(content => content.results)
        .then(pages => pages.map(page => linkResolver(page)))
        .then(pages => ['/', '/de', '/en', ...pages]);
