<template>
  <div>
    <PrismicImage :image="primary.image" class="full" />
  </div>
</template>

<script>
import components from '@/components'

export default {
  name: 'FullImage',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.full {
  width: 100%;
  height: auto;
}
</style>