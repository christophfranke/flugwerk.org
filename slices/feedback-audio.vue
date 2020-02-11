<template>
  <div class="container">
    <audio controls v-for="(item, index) in items">
      <source :src="item.audio.url" type="audio/mpeg">
    Your browser does not support the audio element or sound format.
    </audio>
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'FeedbackText',
  components,
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
@import '@/style/_imports.scss';
</style>