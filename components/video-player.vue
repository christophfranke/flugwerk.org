<template>
  <div class="container">
    <video autoplay muted loop>
      <source src="/fluchttest.mp4" type="video/mp4">
    </video>
    <div class="box">
      <h1>Flugwerk</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/_imports.scss';

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
  background-color: rgba($yellow, 0.6);

  h1 {
    font-size: 140px;
    letter-spacing: 40px;
    padding: 0 0 0 40px;
    font-family: 'Headline One';
    color: $blue-on-yellow;
    font-weight: 400;
    margin: 0;    
  }
}
</style>