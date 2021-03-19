<template>
  <header v-if="header" :class="isMobileMenuOpen ? 'fixed' : ''">
    <div class="left">
      <img src="/flieger.png" class="logo" />
      <nuxt-link to="/"><h1 class="title">{{ title }}</h1></nuxt-link>
    </div>
    <img src="/bars.svg" class="mobile-menu-icon" @click="toggleMobileMenu" />
    <nav :class="isMobileMenuOpen ? 'open' : 'closed'">
      <ul class="first-level">
        <li v-for="(item, index) of firstLevelNavItems" :key="index">
          <nuxt-link :to="item.href" v-if="item.href" class="mobile-only">
            <span class="link">{{ item.name }}</span>
          </nuxt-link>
          <span v-else class="no-link mobile-only">{{ item.name }}</span>
          <ul v-if="item.submenu.length > 0" class="second-level">
            <li class="desktop-only"><span>&nbsp;</span></li>
            <li v-for="(subitem, subindex) of item.submenu" :key="index*100 + subindex" class="submenu-item">
              <nuxt-link :to="subitem.href">
                <span>{{ subitem.name }}</span>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-link :to="item.href" v-if="item.href" class="desktop-only">
            <span class="link">{{ item.name }}</span>
          </nuxt-link>
          <span v-else class="no-link desktop-only">{{ item.name }}</span>
        </li>
        <li class="mobile-only">
          <ul class="social-media">
            <li v-for="(item, index) of socialMediaNavItems" :key="firstLevelNavItems.length + index">
              <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
            </li>
          </ul>
        </li>
        <li v-for="(item, index) of socialMediaNavItems" :key="firstLevelNavItems.length + index" class="social-media desktop-only">
          <a :href="item.href" target="_blank"><i :class="item.icon"></i></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    PrismicImage: () => import('./prismic-image.vue')
  },

  data () {
    return {
      isMobileMenuOpen: false
    }
  },

  watch:{
    $route () {
        this.isMobileMenuOpen = false
    }
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
    },
    toggleMobileMenu () {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
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
  pointer-events: none;
  position: absolute;
  top: 0.5vw;
  left: 1.5vw;
  width: 20vw;
  height: 20vw;
  max-width: 200px;
  max-height: 200px;
  z-index: 1;

}

.left {
  padding: 30px;
  z-index: 3;
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

// mobile menu
.mobile-menu-icon {
  display: block;
  height: 48px;
  margin-right: 30px;
  margin-top: 30px;
  width: auto;
  cursor: pointer;
}

@include upto(949px) {
  header.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $yellow;
    z-index: 2;
  }
  .desktop-only {
    display: none;
  }

  nav {
    display: none;
    &.open {
      display: block;
    }

    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: $yellow;
    overflow-y: auto;
    padding-bottom: 50px;

    ul {
      margin: 0;
      padding: 0;
      display: block;
    }
    li {
      text-align: center;
    }

    .first-level > li {
      margin-top: 50px;
      font-size: 24px;
    }

    .second-level li {
      font-size: 20px;
      margin-top: 5px;
    }

    ul.social-media {
      display: flex;
      justify-content: center;

      li {
        display: block;
        margin: 0 10px;
      }
    }
  }
}

// desktop menu
@include from(950px) {
  .mobile-menu-icon {
    display: none;
  }

  .mobile-only {
    display: none;
  }

  nav {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $yellow;
    a, a:visited {
      font-weight: normal;
    }
    a:hover, a:active {
      color: $black;
      text-decoration: none;
      font-weight: bold;
    }
    ul {
      margin: 0;
      background-color: $yellow;
      &.first-level {
        padding: 2vw 4vw;
        display: flex;
        justify-content: center;
        span {
          white-space: nowrap;
          z-index: 2;
          position: relative;
          background-color: $yellow;
          margin: 1vw 4vw 1vw 1vw;
        }

      }
      &.second-level {
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
      &:hover ul.second-level {
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
}
</style>