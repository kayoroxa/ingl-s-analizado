const fs = require('fs')
const parser = require('subtitles-parser')
const joinPath = require('path').join

// const words = require('./allWords.json').slice(0, 500)

const folderPath =
  'C:/Users/Administrator/OneDrive/SYNC - INGLÊS FLIX/others/srts/movie srt'

const folder = folderPath.includes(':')
  ? folderPath
  : joinPath(__dirname, folder)

function allSrtInFolder(folder) {
  var files = fs.readdirSync(folder)
  var srtFiles = []
  files.forEach(function (file) {
    if (file.indexOf('.srt') > -1) {
      srtFiles.push(file)
    }
  })
  return srtFiles
}

function readAllSrtFiles(filesName) {
  const srtFiles = [{ name: '', content: '' }]

  filesName.forEach(function (file) {
    const fileContent = fs.readFileSync(joinPath(folder, file), 'utf8')
    const dataSrt = parser.fromSrt(fileContent, true)
    srtFiles.push({ name: file, content: dataSrt })
  })
  return srtFiles.filter(v => v.content.length > 0)
}
const all = allSrtInFolder(folder)
const srtFiles = readAllSrtFiles(all)

function srtAnalyse(mode) {
  const allFrases = srtFiles.reduce((a, v) => {
    return a.concat(v.content.map(v => v.text))
  }, [])

  if (mode === 'uniques') {
    const wordUniques = [
      ...new Set(
        allFrases
          .join(' ')
          .toLowerCase()
          .match(/[’'a-zA-Z]+/gi)
      ),
    ]
    return {
      map: function (callBack) {
        return wordUniques.map((...params) => callBack(...params))
      },
      forEach: function (callBack) {
        return wordUniques.forEach((...params) => callBack(...params))
      },
    }
  }
  if (mode === 'sentences') {
    return {
      map: callBack => allFrases.map((...params) => callBack(...params)),
      forEach: callBack =>
        allFrases.forEach((...params) => callBack(...params)),
      slice: (start, end) => allFrases.slice(start, end),
    }
  }

  if (mode === 'words') {
    const wordsInFrase = allFrases
      .toLowerCase()
      .replace(/^.*:|<.*?>|\(.*?\)/gi, '')
      .replace(/’/gi, "'")
      .match(/[’'a-zA-Z]+/gi)

    return {
      map: function (callBack) {
        return wordsInFrase.map((...params) => callBack(...params))
      },
      forEach: function (callBack) {
        return wordsInFrase.forEach((...params) => callBack(...params))
      },
      slice: (start, end) => wordsInFrase.slice(start, end),
    }
  }
}

const getWordsInSentence = sentence => {
  return sentence
    .toLowerCase()
    .replace(/^.*:|<.*?>|\(.*?\)/gi, '')
    .replace(/’/gi, "'")
    .match(/[’'a-zA-Z]+/gi)
}

module.exports = {
  srtAnalyse,
  getWordsInSentence,
}
