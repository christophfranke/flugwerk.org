<template>
  <div :style="style" class="spacer" />
</template>

<script>
import slice from '@/mixins/slice'
import components from '@/components'

export default {
  name: 'Spacer',
  components,
  mixins: [slice],

  computed: {
    style() {
      return {
        'height': `${this.primary.distance}${this.primary.unit}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.spacer {
  width: 100%;
}
</style>