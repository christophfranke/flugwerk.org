<template>
  <div>
    <RichText :content="event.title" />
    <PrismicImage :image="event.image" />
    <RichText :content="event.content" />
  </div>
</template>

<script>
import components from '@/components'
export default {
  name: 'Event',
  components,

  computed: {
    slug() {
      return this.$router.currentRoute.params.slug
    },
    event() {
      return this.$store.getters.event(this.slug)
    }
  },

  asyncData({ params, store, error }) {
    if (!store.getters.event(params.slug)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  mounted () {
    console.log(this.$route.params.slug)
  }
}
</script>