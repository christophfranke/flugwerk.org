<template>
  <div class="main">
    <div class="transformed-text flug">Flug</div>
    <div class="transformed-text werk">werk</div>
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

<style lang="scss" scoped>
.main {
  position: relative;
}

.transformed-text {
  position: absolute;
  left: 0;
  font-size: 15vw;
  font-family: 'Headline One', sans serif;

  &.flug {
    top: 73vw;
    left: 7.1vw;
    transform: rotate(270deg);
  }

  &.werk {
    left: auto;
    top: 56vw;
    left: 9.7vw;
  }
}
</style>