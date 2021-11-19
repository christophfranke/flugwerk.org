<template>
    <div>
        <Header />

        <div class="main">
            <Slice
                v-for="(slice, index) in slices"
                :key="'slice_' + index"
                :slice="slice"
            />
        </div>

        <Footer />
    </div>
</template>

<script>
import components from '@/components';

export default {
    name: 'Page',
    components: {
        ...components
    },
    props: {
        slices: {
            type: Array,
            required: true
        }
    }
};
</script>
