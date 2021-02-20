<template>
  <div class="container">
    <client-only>
      <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="false" :loop="true">
        <slide v-for="(item, index) in items" :key="index">
          <RichText :content="item.text" class="content" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '~/components'

export default {
  name: 'FeedbackText',
  components,
  mixins: [slice],
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

.container {
  width: calc(50vw + 150px);
}

.content {
  padding: 0 75px;
  width: 50vw;
}
</style>

<style lang="scss">
@import '@/style/_imports';

button.VueCarousel-navigation-button {
  transform: scale(3.5) translateY(-14%) !important;
  // background-color: $yellow !important;
}
button.VueCarousel-navigation-button:focus {
  outline: none !important;
}
</style>