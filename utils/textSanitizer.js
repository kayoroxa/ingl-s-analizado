function textSanitizer(text) {
  return text
    .replace(/\n/g, ' ')
    .replace(/\s\s+/g, ' ')
    .replace(/<.*>/g, '')
    .replace(/\(.*\)/g, '')
    .replace(/\[.*\]/g, '')
    .replace(/-/g, '')
    .replace(/^.*?:/g, '')
    .replace(/\,(?=\S)/gim, ', ')
    .trim()
}

module.exports = textSanitizer
