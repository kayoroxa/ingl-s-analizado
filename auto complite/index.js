const textSanitizer = require('../utils/textSanitizer')
const folderAnalyser = require('../utils/folderAnalyse')
const pathJoin = require('path').join

function readSrt(path) {
  const text = folderAnalyser(pathJoin(__dirname, path), {
    filterExt: '.srt',
    readMode: true,
    time: true,
  }).map(v => {
    return v.map(v => v.text).join(' ')
  })

  return textSanitizer(text)
}

console.log(readSrt('../movie srt'))
