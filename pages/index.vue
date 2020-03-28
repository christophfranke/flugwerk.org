<template>
  <div class="main">
    <div class="transformed-text flug">Flug</div>
    <div class="transformed-text werk">werk</div>
    <template v-for="(slice, index) in slices">
      <div class="spacer1" v-if="index === 1" />
      <div class="spacer2" v-if="index === 2" />
      <div class="spacer3" v-if="index === 3" />
      <div class="spacer4" v-if="index === 4" />
      <Slice :slice="slice" :key="index" />
    </template>
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
.spacer1 {
  padding-top: 10vw;
}

.spacer2 {
  padding-top: 10vw;
}

.spacer3 {
  padding-top: 3vw;
}

.spacer4 {
  padding-top: 8vw;
}

.transformed-text {
  position: absolute;
  left: 0;
  font-size: 15vw;
  font-family: 'Headline One', sans serif;

  &.flug {
    top: 62vw;
    left: 2.6vw;
  }

  &.werk {
    left: auto;
    top: 75vw;
    right: 5.2vw;
    transform: rotate(90deg);
  }
}
</style>