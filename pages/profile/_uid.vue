<template>
  <div class="container">
    <RichText :content="profile.description" />
  </div>
</template>

<script>
import components from '@/components'

export default {
  name: 'Profile',
  components,

  computed: {
    uid() {
      return this.$router.currentRoute.params.uid
    },
    profile() {
      return this.$store.getters.profile(this.uid)
    }
  },

  asyncData({ params, store, error }) {
    if (!store.getters.profile(params.uid)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>