<template>
  <footer>
    <RichText :content="address" />
    <ul>
      <li v-for="slice in slices" :key="">
        <nuxt-link :to="slice.href" v-if="slice.type === 'menu_entry'">
          {{ linkName(slice) }}
        </nuxt-link>
        <a :href="slice.href" target="_blank" v-else>
          <i :class="classNames(slice.icon)"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import components from '@/components'
import linkResolver from '@/util/linkResolver'

export default {
  name: 'Footer',
  components,

  computed: {
    slices () {
      return this.$store.getters.footer.data.body.map(slice => ({
        ...slice.primary,
        type: slice.slice_type,
        href: slice.slice_type === 'menu_entry' ?
          linkResolver(slice.primary.page) :
          slice.primary.link.url
      }))
    },
    address () {
      return this.$store.getters.footer.data.adresse
    }
  },

  methods: {
    linkName (slice) {
      return slice.name.length > 0 ? slice.name[0].text :
        this.$store.getters.page(slice.page.uid).title[0].text
    },
    classNames (icon) {
      return {
        facebook: ['fab', 'fa-facebook-f'],
        instagram: ['fab', 'fa-instagram']
      }[icon.toLowerCase()]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_imports';

footer {
  margin-top: 50px;
  background-color: $white;
  color: $black;
  padding: 20px 20px 50px 20px;
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

li {
  display: block;
  margin-right: 20px;
}

a {
  color: $blue-on-yellow;
}
</style>