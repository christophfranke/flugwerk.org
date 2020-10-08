<template>
  <div class="main">
    <div class="month">
      <h3>April</h3>
    </div>
    <div class="events">
      <div v-for="(event, i) of events" :key="i" class="event" @click="open(event)">
        <PrismicImage :image="event.image" />
        <RichText :content="event.title" />
        <Time :time="event.time" />
      </div>
    </div>

    <transition name="fade">
      <div class="modal" v-if="event">
        <div class="backdrop" @click="close">
          <div class="content" @click.stop>
            <img src="/close.svg" @click="close" class="close-icon" />
            <RichText :content="event.title" />
            <PrismicImage :image="event.image" />
            <Time :time="event.time" />
            <RichText :content="event.content" />
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
import linkResolver from '@/util/linkResolver'
import components from '@/components'

export default {
  name: 'Calendar',
  components,

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
  }

  .content {
    background-color: white;
    min-width: 500px;
    padding: 25px;
    margin-top: -10vh;
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
}

.event {
  width: calc(30vw - 20px);
  padding: 10px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.main {
  width: 90vw;
  margin: 0 auto;
}

</style>