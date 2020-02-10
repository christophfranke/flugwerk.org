<template>
  <div>
    <Header />
    <nuxt/>
  </div>
</template>

<script>
import components from '@/components'

export default {
  name: 'DefaultLayout',
  components
}
</script>

<style lang="scss">
@import '@/style/_global.scss';
</style>