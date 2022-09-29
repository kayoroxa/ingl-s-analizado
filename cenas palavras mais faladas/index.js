const { getScene, readSrt } = require('../cenas progressivas/funcs')
const cogiteWords = require('../cogite_words/cogite_words.json').map(v => v[0])
const mostUsedWords = require('../words most used.json').slice(0, 1000)

const magicWords = [...cogiteWords, ...mostUsedWords]

const srtDatas = readSrt('../movie srt')

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

const allScenes = srtDatas.map(v =>
  getScene(v.content, { path: v.fileInfo.path })
)

const allSort = scoreAndSort([].concat(...allScenes))

console.log(
  allSort.filter(({ score }) => score > 0.85).length + '/' + allSort.length
)

// console.log(
//   allSort.slice(0, 200).map(v => ({ text: v.value.text, score: v.score }))
// )
