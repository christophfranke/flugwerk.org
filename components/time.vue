<template>
  <div class="date-time">
    <span>{{ dateString }}</span>
    <span class="seperator">&middot;</span>
    <span>{{ timeString }}</span>
  </div>
</template>

<script>

const MONTH = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

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
    },

    dateString() {
      const day = this.date.getDate()
      const month = MONTH[this.date.getMonth()]
      const year = 1900 + this.date.getYear()
      return `${day}. ${month} ${year}`
    },

    timeString() {
      const hour = this.date.getHours()
      const minutes = `${this.date.getMinutes()}`.padStart(2, '0')

      return `${hour}:${minutes} Uhr`
    }
  }
}
</script>

<style lang="scss" scoped>
.date-time {
  display: flex;
  justify-content: flex-start;
}

.seperator {
  margin: 0 10px;
}
</style>