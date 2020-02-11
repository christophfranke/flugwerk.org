export default doc => ({
  page: doc.uid === 'home' ? '/' : `/${doc.uid}`,
  event: `/events/${doc.uid}`
})[doc.type]
