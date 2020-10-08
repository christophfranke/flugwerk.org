<template>
  <div class="container">
    <client-only>
      <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true">
        <slide v-for="(item, index) in items" :key="index">
          <RichText :content="item.text" class="content" />
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
@import '@/style/_imports';

.content {
  padding: 0 75px;
}
</style>

<style>
button.VueCarousel-navigation-button {
  transform: scale(3.5) translateY(-14%) !important;
}
button.VueCarousel-navigation-button:focus {
  outline: none !important;
}
</style>