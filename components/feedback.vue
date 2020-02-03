<template>
  <div class="container">
    <client-only>
      <carousel :per-page="1" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true">
        <slide>
          Slide 1<br>
          Slide 1<br>
          Slide 1<br>
          Slide 1<br>
          Slide 1<br>
          Slide 1<br>
        </slide>
        <slide>
          Slide 2<br>
          Slide 2<br>
          Slide 2<br>
          Slide 2<br>
        </slide>
        <slide>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
          Slide 3<br>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '@/style/_imports.scss';

.container {
  width: 50vw;
  margin: 0 auto;
}
</style>