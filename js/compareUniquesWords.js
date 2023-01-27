function compareUniqWords(text) {
  text = text
    .replace(/(Person|Dialogue)\s?\d*:?/gi, '')
    .trim()
    .replace(/[.,!?]/g, '')
    .replace(/\s{2,}/g, ' ')

  const uniqSize = new Set(text.split(' ')).size
  const size = text.split(' ').length

  const _return = {
    size: size,
    uniq: uniqSize,
    multiply: (size * 100) / uniqSize / 100,
  }

  console.log(_return)

  return _return
}

module.exports = compareUniqWords
