<template>
  <div>Archive is not implemented yet</div>
</template>

<script>
import components from '@/components'

export default {
  name: 'Archive',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
}
</script>
