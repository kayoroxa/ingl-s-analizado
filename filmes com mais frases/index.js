const { readSrt, getAllTextFromMovie } = require('../cenas progressivas/funcs')
const words = require('../words most used.json').slice(0, 1000)
const srtDatas = readSrt('../movie srt')

const allMoviesTextsWithPath = srtDatas.map(v => getAllTextFromMovie(v))

function getScore(text) {
  const wordsInText = text.toLowerCase().split(' ')

  const wordsFiltered = wordsInText.filter(w => words.includes(w))

  const wordsLen = wordsFiltered.length

  return wordsLen
}

const scored = allMoviesTextsWithPath.map(({ fileInfo, content }) => {
  return {
    fileInfo,
    score: getScore(content),
  }
})

const sorted = scored.sort((a, b) => a.score - b.score)
console.log(sorted)
