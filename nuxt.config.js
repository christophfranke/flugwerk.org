import routes from './util/routes.js'

export default {
  plugins: [{ src: 'plugins/client-only', ssr: false }],
  generate: {
    routes() {
      return routes()
    }
  }
}