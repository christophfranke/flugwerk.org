<template>
  <header v-if="header">
    <nuxt-link to="/"><h1>{{ title }}</h1></nuxt-link>
    <nav>
      <ul>
        <li v-for="(item, index) of firstLevelNavItems" :key="index">
          <nuxt-link :to="item.href" v-if="item.href">
            <span>{{ item.name }}</span>
          </nuxt-link>
          <span v-else>{{ item.name }}</span>
          <ul v-if="item.submenu.length > 0">
            <li v-for="(subitem, index) of item.submenu" :key="index">
              <nuxt-link :to="subitem.href" v-if="subitem.href">
                <span>{{ subitem.name }}</span>
              </nuxt-link>
              <span v-else>{{ subitem.name }}</span>
            </li>
          </ul>
        </li>
        <li v-for="(item, index) of socialMediaNavItems" :key="index">
          <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    header () {
      return this.$store.getters.header
    },
    title () {
      return this.header && this.header.data.title[0].text
    },
    firstLevelNavItems () {
      return this.header && this.header.data.body
        .filter(slice => slice.slice_type === 'menu')
        .map(slice => ({
          name: this.name(slice.primary),
          href: this.href(slice.primary),
          submenu: this.secondLevelNavItems(slice)
        }))
    },
    socialMediaNavItems () {
      return this.header && this.header.data.body
        .filter(slice => slice.slice_type === 'social_media_item')
        .map(slice => ({
          icon: this.classNames(slice.primary.icon),
          href: slice.primary.link.url
        }))
    }
  },

  methods: {
    secondLevelNavItems(slice) {
      return slice.items.map(item => ({
        name: this.name(item),
        href: this.href(item)
      }))
    },
    name(item) {
      return (item.name[0] && item.name[0].text) || this.$store.getters.page(item.page.uid).title[0].text
    },
    href(item) {
      return (item.page && item.page.uid && `/${item.page.uid}`)
    },
    classNames(icon) {
      return {
        facebook: ['fab', 'fa-facebook-f'],
        instagram: ['fab', 'fa-instagram']
      }[icon.toLowerCase()]
    }
  }
}
</script>