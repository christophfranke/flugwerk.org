<template>
  <div>
    <span>{{ date.toLocaleDateString() }}</span>
    <span>{{ date.toLocaleTimeString() }}</span>
  </div>
</template>

<script>
export default {
  name: 'Time',
  props: {
    time: {
      type: String,
      required: true
    }
  },

  computed: {
    date () {
      return new Date(this.time)
    }
  }
}
</script>