<template>
    <Page :slices="slices" />
</template>

<script>
import components from '@/components';

// use fixed home slug for home page
const slug = 'home';

export default {
    name: 'PrismicPage',
    components: {
        ...components
    },

    computed: {
        lang() {
            return this.$router.currentRoute.params.lang;
        },
        page() {
            return this.$store.getters.page(slug, this.lang);
        },
        slices() {
            return this.$store.getters.slices(slug, this.lang);
        }
    },

    created() {
        this.$store.commit('setLang', this.lang);
    },

    asyncData({ params, store, error }) {
        if (!store.getters.page(slug, params.lang)) {
            error({ statusCode: 404, message: 'Page not found' });
        }
    }
};
</script>
