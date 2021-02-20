<template>
  <div>
    <PrismicImage :image="primary.image" class="full" />
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '@/components'

export default {
  name: 'FullImage',
  components,
  mixins: [slice],
}
</script>

<style lang="scss" scoped>
.full {
  width: 100%;
  height: auto;
}
</style>