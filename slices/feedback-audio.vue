<template>
  <div class="main">
    <div class="audio-player" v-for="(url, index) in audioUrls">
      <client-only>
        <mini-audio :audio-source="url" :html5="true" :width="400" />
      </client-only>
    </div>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '~/components'

export default {
  name: 'FeedbackText',
  components,
  mixins: [slice],

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

.main {
  width: 95vw;
  margin: 0 auto;
}

.audio-player {
  overflow-y: auto;
  width: 95vw;
  margin-top: 10px;
}

</style>