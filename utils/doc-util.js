export function getDocumentByCategory(category, docs) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocumentByTag(tag, docs) {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}

export function getDocumentByAuthor(author, docs) {
  return docs.filter((doc) => encodeURI(doc.author) === author);
}
