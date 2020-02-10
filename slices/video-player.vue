<template>
  <div class="container">
    <video autoplay muted loop>
      <source :src="primary.video.url" type="video/mp4">
    </video>
    <div class="box">
      <RichText :content="primary.text" />
    </div>
  </div>
</template>

<script>
import components from '@/components'

export default {
  name: 'Video',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

video {
  width: 100%;
}


.container {
  position: relative;
}

</style>

<style lang="scss">
@import '@/style/_imports';

.box {
  text-transform: uppercase;
  position: absolute;
  bottom: 10vw;
  right: 10vw;
  background-color: rgba($yellow, 0.6);

  h1 {
    font-size: 140px;
    letter-spacing: 40px;
    padding: 0 0 0 40px;
    font-family: 'Headline One';
    color: $blue-on-yellow;
    font-weight: 400;
    margin: 0;    
  }
}
</style>