import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://flugwerk-org.cdn.prismic.io/api/v2'
export default options => Prismic.getApi(apiEndpoint, options)
