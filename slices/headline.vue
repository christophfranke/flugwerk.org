<template>
    <div
        class="main"
        :style="containerStyle"
        :class="{ 'title--right': alignment == 'right' }"
    >
        <h2 class="horizontal title">
            {{ horizontalTitle }}
        </h2>
        <h2 class="vertical title">
            {{ verticalTitle }}
        </h2>
    </div>
</template>

<script>
import slice from '@/mixins/slice';
import components from '@/components';
import text from '@/util/text';

export default {
    name: 'Headline',
    components,
    mixins: [slice],

    computed: {
        horizontalTitle() {
            return text(this.primary.horizontal_title);
        },
        verticalTitle() {
            return text(this.primary.vertical_title);
        },
        containerStyle() {
            return {
                transform: `translateX(${-this.primary.horizontal_shift ||
                    0}vw) translateY(${-this.primary.vertical_shift || 0}vw)`
            };
        },
        alignment() {
            return this.primary.alignment ? 'right' : 'left';
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

.title {
    font-weight: normal;
    color: $black;
    margin: 0;
    font-family: 'Headline One', sans serif;
    font-size: 11vw;
    @include from(950px) {
        font-size: 15vw;
    }
}

@include upto(499px) {
    .main {
        width: 95vw;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        flex-direction: row-reverse;
    }

    .vertical {
        margin-right: 10px;
    }

    .title--right {
        &.main {
            flex-direction: row;
        }
    }
}

@include from(500px) {
    .horizontal {
        margin-left: 10vw;

        @include from(950px) {
            margin-left: 24vw;
        }
    }

    .main {
        position: relative;
        margin-bottom: -3vw;
    }

    .vertical {
        position: absolute;
        display: inline;
        top: 0;
        transform: translateY(-47%) translateX(-50%) rotate(90deg)
            translateX(50%) translateY(50%) scale(-1);
        left: 11vw;

        @include from(950px) {
            left: 25vw;
        }
    }

    .title--right {
        .horizontal {
            margin-left: 0;
            text-align: right;

            @include from(950px) {
                margin-right: 10vw;
            }
        }

        .vertical {
            transform: none;
            right: 0;
            left: auto;
            transform-origin: 100% 100%;
            transform: rotate(90deg) translate3d(100%, 100%, 0);

            @include from(950px) {
                right: 10vw;
            }
        }
    }
}
</style>
