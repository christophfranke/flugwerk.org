<template>
    <div class="container">
        <RichText :content="text" :className="justify ? 'text-justify' : ''" />
    </div>
</template>

<script>
import slice from '@/mixins/slice';
import components from '~/components';

export default {
    name: 'TextBlock',
    components,
    mixins: [slice],

    computed: {
        text() {
            return this.primary.text;
        },
        justify() {
            return !!this.primary.justify;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/style/_imports.scss';
</style>
