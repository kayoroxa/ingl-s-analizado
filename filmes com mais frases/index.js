const { readSrt, getAllTextFromMovie } = require('../cenas progressivas/funcs')

const srtDatas = readSrt('../movie srt')

const allMoviesTextsWithPath = srtDatas.map(v => getAllTextFromMovie(v))

function getScore(text) {
  const wordsLen = text.split(' ').length

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
