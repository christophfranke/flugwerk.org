<template>
  <div class="main" :style="containerStyle">
    <h2 class="horizontal title">{{ horizontalTitle }}</h2>
    <h2 class="vertical title">{{ verticalTitle }}</h2>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import components from '@/components'
import text from '@/util/text'

export default {
  name: 'Headline',
  components,
  mixins: [slice],

  computed: {
    horizontalTitle() {
      return text(this.primary.horizontal_title)
    },
    verticalTitle() {
      return text(this.primary.vertical_title)
    },
    containerStyle() {
      return {
        transform: `translateX(${-this.primary.horizontal_shift || 0}vw) translateY(${-this.primary.vertical_shift || 0}vw)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';


.title {
  font-weight: normal;
  color: $black;
  margin: 0;
  font-size: 15vw;
  font-family: 'Headline One', sans serif;
}

.horizontal {
  margin-left: 24vw;
}

.main {
  position: relative;
  margin-bottom: -3vw;
}

.vertical {
  position: absolute;
  display: inline;
  top: 0;
  left: 25vw;
  transform: translateY(-47%) translateX(-50%) rotate(90deg) translateX(50%) translateY(50%) scale(-1);
}
</style>