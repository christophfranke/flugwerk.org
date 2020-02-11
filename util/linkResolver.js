export default doc => ({
  page: doc.uid === 'home' ? '/' : `/${doc.uid}`,
  event: `/events/${doc.uid}`,
  profile: `/profile/${doc.uid}`
})[doc.type]
