<template>
  <div class="container">
    <div class="transformed-text feed">Feed</div>
    <div class="transformed-text back">Back</div>
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
  width: calc(50vw - 150px);
}

.container {
  padding-top: 17vw;
  position: relative;
}

$translation: translate(-16vw, 0);

.transformed-text {
  position: absolute;
  left: 0;
  font-size: 15vw;
  font-family: 'Headline One', sans serif;
  transform: $translation;

  &.feed {
    top: 17vw;
    left: -1vw;
    transform: $translation rotate(270deg);
  }

  &.back {
    left: auto;
    top: 0;
    left: 2.6vw;
  }
}</style>

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