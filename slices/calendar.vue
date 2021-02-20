<template>
  <div class="main">
    <div class="events">
      <div v-for="(event, i) of events" :key="i" class="event" @click="open(event)">
        <PrismicImage :image="event.image" />
        <RichText :content="event.title" className="event-title" />
        <Time :time="event.time" />
      </div>
    </div>

    <transition name="fade">
      <div class="modal" v-if="event">
        <div class="backdrop" @click="close">
          <div class="wrapper">
            <div class="scroller">
              <div class="content" @click.stop>
                <img src="/close.svg" @click="close" class="close-icon" />
                <RichText :content="event.title" />
                <Time :time="event.time" />
                <PrismicImage :image="event.image.Modal" />
                <RichText :content="event.content" />
              </div>
            </div>
            <div class="fader" />
          </div>
        </div>
      </div>
    </transition>

    <client-only v-if="false">
      <carousel :per-page="3" :navigation-enabled="true" :pagination-enabled="false" :adjustable-height="true">
        <slide v-for="(event, i) of events" :key="i" class="slide">
          <div @click="open(event)">
            <PrismicImage :image="event.image" />
            <RichText :content="event.title" />
            <Time :time="event.time" />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import slice from '@/mixins/slice'
import linkResolver from '@/util/linkResolver'
import components from '@/components'

export default {
  name: 'Calendar',
  components,
  mixins: [slice],

  data() {
    return {
      event: null
    }
  },

  computed: {
    events () {
      return this.$store.getters.events
        .map(event => ({
          ...event.data,
          url: linkResolver(event)
        }))
    }
  },

  methods: {
    open(event) {
      this.event = event
    },

    close() {
      this.event = null
    }
  }
}
</script>

<style lang="scss">
.cms-content.event-title {
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
}
</style>

<style lang="scss" scoped>
@import '@/style/_imports';

.modal {
  .backdrop {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6vw;
  }

  .wrapper {
    height: 100%;
    position: relative;
  }

  .scroller {
    height: 100%;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .fader {
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }

  .content {
    padding: 25px;
    background-color: white;
    min-width: 500px;
    max-width: 1050px;
    position: relative;
  }

  .close-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: opacity 0.2s;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    margin-top: 5px;
  }
}

.month {
  h3 {
    font-size: 36px;
  }
}

.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 -25px;
}

.event {
  width: calc(30vw - 40px);
  margin: 0 25px;
  cursor: pointer;

  img {
    width: 100%;
  }
}

.fade-enter-active, .fade-leave-active {
  z-index: 1;
  position: absolute;
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.main {
  width: 90vw;
  margin: 0 auto;
}

</style>