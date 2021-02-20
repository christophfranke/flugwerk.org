<template>
  <div class="main">
    <video autoplay muted loop>
      <source :src="primary.video.url" type="video/mp4">
    </video>
    <div class="box">
      <RichText :content="primary.text" />
    </div>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '@/components'

export default {
  name: 'Video',
  components,
  mixins: [slice],
}
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

  h1, h2, h3, h4, h5, h6 {
    font-size: 6vw;
    letter-spacing: 15px;
    padding: 0 0 0 40px;
    font-family: 'Headline One';
    color: $yellow;
    font-weight: 400;
    margin: 0;    
  }
}
</style>