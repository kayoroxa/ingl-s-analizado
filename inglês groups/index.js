const fs = require('fs')
const saveProgress = require('../utils/saveProgress')
const sentenceSimilarity = require('../utils/sentenceSimilarity')
const pathJoin = require('path').join
require('../utils/saveProgress')

Array.prototype.removeByValue = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === val) {
      this.splice(i, 1)
      i--
    }
  }
  return this
}

// const allWords = sentences.reduce((acc, sentence) => {
//   const wordsInSentence = sentence.match(/[a-zA-Z][’'a-zA-Z]*/gi)

//   const all = [...acc, wordsInSentence]

//   return all
// }, [])

// const uniqAllWords = [...new Set(allWords)]

const txt = fs.readFileSync(
  pathJoin(__dirname, '../890k sentences in english.txt'),
  {
    encoding: 'utf-8',
  }
)

const mostUsedWords = require(pathJoin(__dirname, '../words most used.json'))

const sentences = txt.split('\r\n')

function getSentencesFiltered() {
  return sentences.filter(sentence => {
    const wordsInSentence = sentence.match(/[a-zA-Z][’'a-zA-Z]*/gi)
    return wordsInSentence?.every(w =>
      mostUsedWords.slice(0, 1000).includes(w.toLowerCase())
    )
  })
}

function removeInArray(arrRemove, arrTarget) {
  let newArrTarget = [...arrTarget]

  for (let sentenceTarget of arrRemove) {
    const index = newArrTarget.indexOf(sentenceTarget)
    if (index > -1) {
      newArrTarget.splice(index, 1)
    }
  }

  return newArrTarget
}

async function app() {
  const sentencesFiltered = await saveProgress(
    getSentencesFiltered,
    './sentences-1k_RESULT.json'
  )

  function getGroups() {
    let sentencesGood = sentencesFiltered
      .filter(w => w.length > 25 && w.length < 53)
      .filter(w => w.length > 25 && w.length < 53)

    let result = []

    for (let c = 0; c < 700; c++) {
      const sentenceFiltered = sentencesGood[0]
      console.log(`${result.length}/${sentencesGood.length}`)
      console.clear()
      const sentencesSimilarity = sentenceSimilarity(
        sentenceFiltered,
        sentencesGood
      )

      const resultSorted = sentencesSimilarity
        .sort((a, b) => b.score - a.score)
        .filter(v => v.score > 0.4)

      const group = resultSorted.map(v => v.sentence)

      sentencesGood = removeInArray(group, sentencesGood)

      result.push([...new Set(group)])
    }

    return result
  }

  const pesadinha = await saveProgress(getGroups, './groups-300-5w.json')

  console.log(pesadinha)
}

app()
