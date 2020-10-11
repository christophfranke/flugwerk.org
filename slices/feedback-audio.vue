<template>
  <div>
    <div class="audio-player" v-for="(url, index) in audioUrls">
      <client-only>
        <mini-audio :audio-source="url" :html5="true" :width="400" />
      </client-only>
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
  },

  computed: {
    audioUrls() {
      return this.items
        .filter(item => item.audio && item.audio.url)
        .map(item => item.audio && item.audio.url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

.audio-player {
  width: 95vw;
  margin: 10px auto 0 auto;
}

</style>