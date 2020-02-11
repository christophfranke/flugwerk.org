<template>
  <div class="main">
    <client-only>
      <carousel :per-page="3" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true">
        <slide v-for="(event, i) of events" :key="i" class="slide">
          <div>
            <RichText :content="event.title" />
            <PrismicImage :image="event.image" />
            <RichText :content="event.content" />
            <nuxt-link :to="event.url">mehr</nuxt-link>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import linkResolver from '@/util/linkResolver'
import components from '@/components'

export default {
  name: 'Calendar',
  components,

  computed: {
    events () {
      return this.$store.getters.events
        .map(event => ({
          ...event.data,
          url: linkResolver(event)
        }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

.main {
  width: 80vw;
  margin: 0 auto;
}

.slide {
  width: 33%;
}
</style>