<template>
  <div class="container">
    <RichText :content="text" />
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'TextBlock',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

  computed: {
    text() {
      return this.primary.text
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports.scss';
</style>