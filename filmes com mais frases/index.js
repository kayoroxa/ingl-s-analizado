const { readSrt, getAllTextFromMovie } = require('../cenas progressivas/funcs')
const words = require('../words most used.json').slice(0, 3000)
const srtDatas = readSrt(
  'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/others/srts/movie srt'
)

const allMoviesTextsWithPath = srtDatas.map(v => {
  return {
    content: getAllTextFromMovie(v),
    timeCompleteMovie: v.content[v.content.length - 1]?.endTime / 1000,
  }
})

function getScore(text) {
  const wordsInText = text.toLowerCase().match(new RegExp(`[’'a-zA-Z]+`, 'gi'))
  if (!wordsInText) return 0

  const wordsFiltered = wordsInText?.filter(w => words.includes(w))

  const wordsLen = wordsFiltered.length

  return wordsLen
}

let scored = allMoviesTextsWithPath.map(({ content, timeCompleteMovie }) => {
  const wordsLength = content.content.match(
    new RegExp(`[’'a-zA-Z]+`, 'gi')
  )?.length
  return {
    fileInfo: content.fileInfo,
    score: getScore(content.content) / wordsLength,
    // wordsLength,
    timeCompleteMovie,
    wordsBySecond: wordsLength / timeCompleteMovie,
  }
})

// scored = scored.filter(v => v.wordsBySecond > 1)

const sorted = scored.sort((a, b) => a.score - b.score).slice(-20)
console.log(sorted)
