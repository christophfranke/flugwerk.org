<template>
  <div class="container">
    <video autoplay muted loop>
      <source src="/fluchttest.mp4" type="video/mp4">
    </video>
    <div class="box">
      Flugwerk
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/index.scss';

video {
  width: 100%;
}


.container {
  position: relative;
}

.box {
  text-transform: uppercase;
  position: absolute;
  bottom: 10vw;
  right: 10vw;
  padding: 20px 10px;
  font-size: 80px;
  color: $blue;
  background-color: rgba($yellow, 0.6);
}
</style>