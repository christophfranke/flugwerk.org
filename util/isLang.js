export default (doc, lang) =>
    doc.lang && doc.lang.substring(0, 2) == (lang || 'de');
