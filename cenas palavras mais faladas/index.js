const { getScene } = require('../cenas progressivas/funcs')
const getAllSentences = require('../utils/getAllSentences')
const cogiteWords = require('../cogite_words/cogite_words.json').map(v => v[0])
const mostUsedWords = require('../words-most-used-friends.json').slice(0, 1000)

// const folder =
// 'E:/series/Gilmore.Girls.Complete.S01-S07.REPACK.1080p.WEB-DL.x265.10bit.HEVC-MONOLITH/Season 7'

const magicWords = [...cogiteWords, ...mostUsedWords]

// const srtDatas = readSrt('../movie srt')

const srtDatas = getAllSentences({
  folder: 'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/subtitles/the-office',
  srt: true,
  joinText: true,
  withPath: true,
})

// console.log(srtDatas)

function getScore(text) {
  const words = text.toLowerCase().match(/[’'a-zA-Z]+/gi)
  if (!words) return 0
  const lenMagic = words?.filter(w => magicWords.includes(w)).length
  return lenMagic / words.length
}

function scoreAndSort(scenes) {
  const score = scenes
    .map(value => {
      return {
        value,
        score: getScore(value.text),
      }
    })
    .filter(v => v.score > 0 && v.value.text.length > 100)

  return score.sort((a, b) => b.score - a.score)
}

const allScenes = srtDatas.map(v => getScene(v.data, { path: v.path }))

let allSort = scoreAndSort([].concat(...allScenes))

console.log(
  allSort.filter(({ score }) => score > 0.85).length + '/' + allSort.length
)

function secondsToHMS(seconds) {
  seconds = seconds / 1000
  var hours = Math.floor(seconds / 3600)
  var minutes = Math.floor((seconds % 3600) / 60)
  var remainingSeconds = seconds % 60

  // Add leading zero if single digit
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  remainingSeconds =
    remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds

  return (
    Math.round(hours) +
    ':' +
    Math.round(minutes) +
    ':' +
    Math.round(remainingSeconds)
  )
}

allSort = allSort
  .filter(
    ({ score, value }) =>
      score > 0.85 &&
      value.text.length > 80 &&
      value.path.startsWith('The Office (US) (2005) - S02E10')
  )
  .slice(0, 60)

allSort.reverse()

console.log(
  allSort.slice(0, 200).map(v => ({
    text: v.value.text,
    score: v.score,
    startTime: secondsToHMS(v.value.startTime),
    path: v.value.path,
  }))
)
