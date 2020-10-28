<template>
  <div>
    <ul>
      <li v-for="profile in profiles" :key="profile.name">
        <a :href="profile.url" target="_blank">
          <PrismicImage :image="profile.image" class="image" />
          <h3 class="name">{{ profile.name }}</h3>
        </a>
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
        name: item.name[0] && item.name[0].text,
        image: item.image,
        url: item.link.url
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';
ul {
  padding: 0 15px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
}

li {
  list-style-type: none;
  padding: 15px;
  border: 7px solid $black
}


.image {
  width: 100%;
  display: block;
}

.name {
  [href] & {
    text-decoration: underline;
    &:hover {
      color: $blue;
    }
  }

  color: $black;
  width: 100%;
  margin: 0;
}
</style>