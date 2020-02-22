<template>
  <div>
    <ul>
      <li v-for="profile in profiles" :key="profile.name">
        <h3>{{ profile.name }}</h3>
        <PrismicImage :image="profile.image" class="image" />
        <RichText :content="profile.description" />
      </li>
    </ul>
  </div>
</template>

<script>
import linkResolver from '@/util/linkResolver'
import components from '@/components'

export default {
  name: 'Team',
  components,
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  computed: {
    profiles () {
      return this.items.map(item => ({
        name: item.name[0] && item.name[0].text.replace(/ /g, '&nbsp;'),
        image: item.image,
        description: item.description
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';
ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

li {
  list-style-type: none;
  padding: 25px;
  margin: 0 25px;
  border: 1px solid $blue
}

.image {
  width: 100%;
}
</style>