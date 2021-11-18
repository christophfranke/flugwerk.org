export default doc => {
    const lang = doc.lang.substring(0, 2);
    return {
        page: `/${lang}/${doc.uid}`,
        event: `/events/${doc.uid}`,
        profile: `/profile/${doc.uid}`
    }[doc.type];
};
