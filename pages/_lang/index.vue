<template>
    <div>
        <Slice :slice="slice" :key="index" v-for="(slice, index) in slices" />
    </div>
</template>

<script>
import components from '@/components';
import slices from '@/slices';

// use fixed home slug for home page
const slug = 'home';

export default {
    name: 'Home',
    components: {
        ...components,
        ...slices
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

    asyncData({ params, store, error }) {
        if (!store.getters.page(slug, params.lang)) {
            error({ statusCode: 404, message: 'Page not found' });
        }
    }
};
</script>
