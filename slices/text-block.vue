<template>
    <div class="container">
        <RichText
            :content="text"
            :className="{
                'text-left': textAlign == 'left',
                'text-right': textAlign == 'right',
                'text-justify': textAlign == 'justify',
                'text-smaller': fontSize == 'smaller',
                'text-larger': fontSize == 'larger'
            }"
        />
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
        textAlign() {
            return this.primary['text-align'];
        },
        fontSize() {
            return this.primary['font-size'];
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/style/_imports.scss';
</style>
