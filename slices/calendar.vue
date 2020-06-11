<template>
  <div class="main">
    <div>April</div>
    <div class="events">
      <div v-for="(event, i) of events" :key="i" class="event">
        <nuxt-link :to="event.url"><PrismicImage :image="event.image" /></nuxt-link>
        <nuxt-link :to="event.url"><RichText :content="event.title" /></nuxt-link>
        <nuxt-link :to="event.url"><Time :time="event.time" /></nuxt-link>
      </div>
    </div>
    <client-only v-if="false">
      <carousel :per-page="3" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true">
        <slide v-for="(event, i) of events" :key="i" class="slide">
          <div>
            <nuxt-link :to="event.url"><RichText :content="event.title" /></nuxt-link>
            <nuxt-link :to="event.url"><PrismicImage :image="event.image" /></nuxt-link>
            <nuxt-link :to="event.url"><Time :time="event.time" /></nuxt-link>
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

.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.event {
  width: calc(33% - 20px);
  padding: 10px;
}
// .main {
//   width: 80vw;
//   margin: 0 auto;
// }

// .slide {
//   width: 33%;
// }
</style>