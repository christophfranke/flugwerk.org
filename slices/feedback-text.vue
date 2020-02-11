<template>
  <div class="container">
    <client-only>
      <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true">
        <slide v-for="(item, index) in items" :key="index">
          <RichText :content="item.text" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'FeedbackText',
  components,
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports.scss';
</style>