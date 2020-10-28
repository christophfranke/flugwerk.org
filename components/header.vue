<template>
  <header v-if="header">
    <div class="left">
      <nuxt-link to="/"><h1 class="title">{{ title }}</h1></nuxt-link>
    </div>
    <nav>
      <ul class="first">
        <li v-for="(item, index) of firstLevelNavItems" :key="index">
          <ul v-if="item.submenu.length > 0" class="second">
            <li><span>&nbsp;</span></li>
            <li v-for="(subitem, subindex) of item.submenu" :key="index*100 + subindex" class="submenu-item">
              <nuxt-link :to="subitem.href">
                <span>{{ subitem.name }}</span>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link :to="item.href" v-if="item.href">
            <span class="link">{{ item.name }}</span>
          </nuxt-link>
          <span v-else class="no-link">{{ item.name }}</span>
        </li>
        <li v-for="(item, index) of socialMediaNavItems" :key="firstLevelNavItems.length + index" class="social-media">
          <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
        </li>
      </ul>
    </nav>
    <div class="clear" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    PrismicImage: () => import('./prismic-image.vue')
  },

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

.logo {
  display: none;
  max-width: 77px;
  display: inline-block;
}

.left {
  float: left;
  padding: 30px;
}

.clear {
  clear: both;
}

.title, .title:visited {
  display: inline;
  fontSize: 80px;
  color: $black;
}

header {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $yellow;
  a, a:visited {
    color: $black;
  }
  ul {
    margin: 0;
    background-color: $yellow;
    &.first {
      padding: 2vw 4vw;
      display: flex;
      justify-content: center;
      span {
        z-index: 2;
        position: relative;
        background-color: $yellow;
        margin: 1vw 4vw 1vw 1vw;
      }

      .link:hover {
        font-weight: bold;
      }
    }
    &.second {
      border: 7px solid $black;
      padding: 0;
      transition: opacity .3s;
      display: block;
      position: absolute;
      opacity: 0;
      z-index: 1;
    }
  }

  .submenu-item {
    padding: 8px 0;
    white-space: nowrap;

    &:hover {
      font-weight: bold;
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
    i {
      padding: 5px;
      margin: -5px;
      border-radius: 5px;    
      &:hover {
        color: $yellow;
        background-color: $black;
      }
    }
  }
}
</style>