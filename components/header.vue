<template>
  <header v-if="header">
    <nav>
      <ul class="first">
        <li><nuxt-link to="/"><h1><span>{{ title }}</span></h1></nuxt-link></li>
        <li v-for="(item, index) of firstLevelNavItems" :key="index">
          <ul v-if="item.submenu.length > 0" class="second">
            <li><span>&nbsp;</span></li>
            <li v-for="(subitem, index) of item.submenu" :key="index">
              <nuxt-link :to="subitem.href">
                <span>{{ subitem.name }}</span>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link :to="item.href" v-if="item.href">
            <span>{{ item.name }}</span>
          </nuxt-link>
          <span v-else class="no-link">{{ item.name }}</span>
        </li>
        <li v-for="(item, index) of socialMediaNavItems" :key="index" class="social-media">
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
      return slice.items.filter(item => item.page || item.name.length > 0)
        .map(item => ({
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

<style lang="scss" scoped>
@import '@/style/_imports';
.no-link {
  cursor: default;
}

nav {
  a, a:visited {
    color: $blue-on-yellow;
  }
  ul {
    margin: 0;
    background-color: $yellow;
    &.first {
      padding: 2vw 4vw;
      display: flex;
      span {
        z-index: 2;
        position: relative;
        background-color: $yellow;
        margin: 1vw 4vw 1vw 1vw;
      }
    }
    &.second {
      padding: 0;
      transition: opacity .3s, transform .3s ease-out;
      display: block;
      position: absolute;
      opacity: 0;
      transform: translateY(-50%);
      z-index: 1;
    }
  }

  h1 {
    margin: 0;
  }

  li {
    background-color: $yellow;
    display: block;
    position: relative;
    text-transform: uppercase;
    &:hover ul.second {
      opacity: 1;
      transform: none;
    }
  }

  .social-media {
    margin-left: 2vw;
    position: relative;
    z-index: 2;
  }
}
</style>