<template>
    <Page :slices="slices" />
</template>

<script>
import components from '@/components';

// use fixed home slug for home page
const slug = 'home';
const lang = 'de';

export default {
    name: 'HomePage',
    components: {
        ...components
    },

    computed: {
        page() {
            return this.$store.getters.page(slug, lang);
        },
        slices() {
            return this.$store.getters.slices(slug, lang);
        }
    },

    asyncData({ params, store, error }) {
        if (!store.getters.page(slug, lang)) {
            error({ statusCode: 404, message: 'Page not found' });
        }
    }
};
</script>
