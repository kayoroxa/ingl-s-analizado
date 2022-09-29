const textSanitizer = require('../utils/textSanitizer')
const folderAnalyser = require('../utils/folderAnalyse')
const pathJoin = require('path').join

function getScene(movieSrt, payload) {
  let lastSentenceEndTime = 0

  const scenes = movieSrt.reduce((allScenes, sentenceSubData) => {
    sentenceSubData.text = textSanitizer(sentenceSubData.text)
    if (allScenes.length === 0) {
      lastSentenceEndTime = sentenceSubData.endTime
      return [
        {
          ...payload,
          startID: sentenceSubData.id,
          endID: sentenceSubData.id,
          text: sentenceSubData.text,
        },
      ]
    }

    const sceneEnded = sentenceSubData.startTime > lastSentenceEndTime + 2000

    if (sceneEnded) {
      const lastIsSizeGood =
        allScenes[allScenes.length - 1].text.length > 100 &&
        allScenes[allScenes.length - 1].text.length < 270

      if (!lastIsSizeGood) allScenes.pop()

      allScenes.push({
        ...payload,
        startID: sentenceSubData.id,
        text: sentenceSubData.text,
      })
    } else {
      allScenes[allScenes.length - 1].endID = sentenceSubData.id
      allScenes[allScenes.length - 1].text += ' ' + sentenceSubData.text
    }
    lastSentenceEndTime = sentenceSubData.endTime

    return allScenes
  }, [])

  return scenes
}

function getScore(text, searchQuery) {
  searchQuery = searchQuery.map((v, i) => ({
    teach: v,
    score: i + i * 0.05,
  }))
  return searchQuery.reduce((mainScore, { teach, score }) => {
    const re = new RegExp(`\\b${teach}\\b`, 'gi')
    if (text.match(re)) {
      return mainScore + score
    }
    return mainScore
  }, 0)
}

function readSrt(path) {
  return folderAnalyser(pathJoin(__dirname, path), {
    filterExt: '.srt',
    readMode: true,
    time: true,
    showFileInfo: true,
  })
}

module.exports = { getScene, getScore, readSrt }
