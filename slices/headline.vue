<template>
  <div class="main" :style="containerStyle">
    <h2 class="horizontal title">{{ horizontalTitle }}</h2>
    <h2 class="vertical title">{{ verticalTitle }}</h2>
  </div>
</template>

<script>
import components from '@/components'
import text from '@/util/text'

export default {
  name: 'Headline',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

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
}

.vertical {
  position: absolute;
  top: 1vw;
  transform: translateY(-50%) rotate(270deg) translateX(-50%);
}
</style>