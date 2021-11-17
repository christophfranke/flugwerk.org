<template>
    <div class="main">
        <div class="container" v-if="primary.embed">
            <div
                class="container--embed"
                v-html="primary.embed.html"
                :style="{
                    '--aspect-ratio': aspectRatio
                }"
            ></div>
        </div>
        <template v-else>
            <video autoplay muted loop>
                <source :src="primary.video.url" type="video/mp4" />
            </video>
            <div class="box">
                <RichText :content="primary.text" />
            </div>
        </template>
    </div>
</template>

<script>
import slice from '@/mixins/slice';
import components from '@/components';

export default {
    name: 'Video',
    components,
    mixins: [slice],
    computed: {
        aspectRatio() {
            return 100 / eval(this.primary.aspect_ratio || '16/9') + '%';
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

video {
    width: 100%;
}

.main {
    position: relative;
}
</style>

<style lang="scss">
@import '@/style/_imports';

.box {
    text-transform: uppercase;
    position: absolute;
    bottom: 10vw;
    right: 8.7vw;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 6vw;
        letter-spacing: 15px;
        padding: 0 0 0 40px;
        font-family: 'Headline One';
        color: $yellow;
        font-weight: 400;
        margin: 0;
    }
}

.container--embed {
    position: relative;
    padding-bottom: var(--aspect-ratio, 56.25%);

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
