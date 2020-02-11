<template>
  <div>
    <nuxt-child :key="$route.fullPath" />
    <Calendar />
  </div>
</template>

<script>
import slices from '@/slices'

export default {
  name: 'Events',
  components: {
    ...slices
  }
}
</script>