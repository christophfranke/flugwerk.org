<template>
  <div :style="style" class="spacer" />
</template>

<script>
import components from '@/components'

export default {
  name: 'Spacer',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

  computed: {
    style() {
      return {
        'height': `${this.primary.distance}${this.primary.unit}`
      }
    }
  },

  mounted() {
    console.log('spacer found', this.primary);
  }
}
</script>

<style lang="scss" scoped>
.spacer {
  width: 100%;
  // background-color: pink;
}
</style>