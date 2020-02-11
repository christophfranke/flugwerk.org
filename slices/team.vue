<template>
  <div>
    <ul>
      <li v-for="profile in profiles" :key="profile.uid">
        <nuxt-link :to="profile.url">
          <PrismicImage :image="profile.image" />
          <span>{{ profile.name[0].text.replace(/ /g, '&nbsp;') }}</span>
        </nuxt-link>
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

  computed: {
    profiles () {
      return this.$store.getters.profiles
        .map(profile => ({
          ...profile.data,
          url: linkResolver(profile),
          uid: profile.uid,
          image: {
            ...profile.data.image,
            url: profile.data.image.url.replace(/\.webp\?.*$/, '.webp')
          }
        }))
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  display: flex;
}

li {
  display: block;
  position: relative
}

span {
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  font-size: 16px;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
}
</style>