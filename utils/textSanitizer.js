function textSanitizer(text, lower) {
  text = text
    .replace(/\n/g, ' ')
    .replace(/\s\s+/g, ' ')
    .replace(/<.*>/g, '')
    .replace(/\(.*\)/g, '')
    .replace(/\[.*\]/g, '')
    .replace(/-/g, '')
    .replace(/^.*?:/g, '')
    .replace(/’/gi, "'")
    .replace(/,(?=\S)/gim, ', ')
    .trim()

  if (lower) text = text.toLowerCase()
  return text
}

module.exports = textSanitizer
