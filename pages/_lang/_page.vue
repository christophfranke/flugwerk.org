<template>
    <div class="main">
        <template v-for="(slice, index) in slices">
            <Slice :slice="slice" :key="index" />
        </template>
    </div>
</template>

<script>
import components from '@/components';
import slices from '@/slices';

export default {
    name: 'Page',
    components: {
        ...components,
        ...slices
    },

    computed: {
        slug() {
            return this.$router.currentRoute.params.page;
        },
        lang() {
            return this.$router.currentRoute.params.lang;
        },
        page() {
            return this.$store.getters.page(this.slug, this.lang);
        },
        slices() {
            return this.$store.getters.slices(this.slug, this.lang);
        }
    },

    asyncData({ params, store, error }) {
        if (!store.getters.page(params.page, params.lang)) {
            error({ statusCode: 404, message: 'Page not found' });
        }
    }
};
</script>
