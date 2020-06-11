<template>
  <div class="container">
    <div class="audio-player" v-for="(item, index) in items">
      <audio controls>
        <source :src="item.audio.url" type="audio/mpeg">
      Your browser does not support the audio element or sound format.
      </audio>
    </div>
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'FeedbackText',
  components,
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

.audio-player {
  margin-top: 10px;
}
</style>