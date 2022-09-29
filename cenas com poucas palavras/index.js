const { getScene, readSrt } = require('../cenas progressivas/funcs')

const srtDatas = readSrt('../movie srt')

function uniqWordsCount(text) {
  return new Set(text.toLowerCase().split(' ')).size
}

function scoreAndSort(scenes) {
  const score = scenes
    .map(value => {
      return {
        value,
        score: (uniqWordsCount(value.text) / value.text.length) * 100,
      }
    })
    .filter(v => v.score > 0 && v.value.text.length > 100)

  return score.sort((a, b) => b.score - a.score)
}

const allScenes = srtDatas.map(v =>
  getScene(v.content, { path: v.fileInfo.path })
)

const allSort = scoreAndSort([].concat(...allScenes))

console.log(allSort.slice(0, 10))
