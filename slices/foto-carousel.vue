<template>
  <div class="carousel">
    <client-only>
      <carousel :per-page="primary.images_per_page || 1" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="false" :loop="true">
        <slide v-for="(item, index) in items" :key="index">
          <div class="slide">
            <PrismicImage :image="item.image" class="image" />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '@/components'

export default {
  name: 'FotoCarousel',
  components,
  mixins: [slice],
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';


.carousel {
  margin: 0 auto;
  width: calc(80vw + 20px);
}

.slide {
  padding: 10px;
  width: 80vw;
}
.image {
  width: 80vw;
}
</style>