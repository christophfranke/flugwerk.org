import routes from './util/routes.js'

export default {
  plugins: [{ src: 'plugins/vue-carousel', ssr: false }],
  generate: {
    routes() {
      return routes()
    }
  }
}