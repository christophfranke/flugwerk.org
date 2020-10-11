<template>
  <div>
    <ul>
      <li v-for="profile in profiles" :key="profile.name">
        <h3>{{ profile.name }}</h3>
        <PrismicImage :image="profile.image" class="image" />
        <RichText :content="profile.description" className="team-card" />
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

<style lang="scss">
.team-card {
  p {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>

<style lang="scss" scoped>
@import '@/style/_imports';
ul {
  width: 95vw;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

li {
  list-style-type: none;
  padding: 15px;
  border: 1px solid $blue;

  h3 {
    margin-top: 0;
  }
}

.image {
  width: 100%;
}
</style>