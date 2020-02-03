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

    <audio controls>
      <source src="sound1.mp3" type="audio/mpeg">
    Your browser does not support the audio element or sound format.
    </audio>
    <audio controls>
      <source src="sound2.mp3" type="audio/mpeg">
    Your browser does not support the audio element or sound format.
    </audio>
    <audio controls>
      <source src="sound3.mp3" type="audio/mpeg">
    Your browser does not support the audio element or sound format.
    </audio>
    <audio controls>
      <source src="sound4.mp3" type="audio/mpeg">
    Your browser does not support the audio element or sound format.
    </audio>
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