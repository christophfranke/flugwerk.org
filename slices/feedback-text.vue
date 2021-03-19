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
  margin: 0 auto;

  width: calc(80vw + 60px);
  @include from(950px) {
    width: calc(50vw + 150px);
  }
}

.content {
  width: 80vw;
  padding: 0 30px;

  @include from(950px) {
    width: 50vw;
    padding: 0 75px;
  }
}
</style>

<style lang="scss">
@import '@/style/_imports';
</style>