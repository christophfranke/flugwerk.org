<template>
  <div>
    <Slice :slice="slice" :key="index" v-for="(slice, index) in slices" />
  </div>
</template>

<script>
import components from '@/components'
import slices from '@/slices'

// use fixed home slug for home page
const slug = 'home'

export default {
  name: 'Home',
  components: {
    ...components,
    ...slices
  },

  computed: {
    page() {
      return this.$store.getters.page(slug)
    },
    slices() {
      return this.$store.getters.slices(slug)
    },
  },

  asyncData({ params, store, error }) {
    if (!store.getters.page(slug)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
