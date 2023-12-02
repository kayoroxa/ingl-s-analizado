const fs = require('fs')
const joinPath = require('path').join

const getAllSentences = require('./getAllSentences')

const text = getAllSentences({
  db: 'sentences',
  joinText: true,
})

function getTopWords(dbTextStr) {
  let wordsCount = {}
  const words = dbTextStr.match(/[a-zA-Z][’'a-zA-Z]*/gi)

  for (let word of words) {
    word = word.toLowerCase()
    wordsCount[word] = (wordsCount[word] || 0) + 1
  }

  const sorted = Object.entries(wordsCount).sort((a, b) => b[1] - a[1])

  return sorted.map(v => v[0]).slice(0, 6000)
}

fs.writeFileSync(
  joinPath(__dirname, '../words-most-sentences.json'),
  JSON.stringify(getTopWords(text), null, 2)
)
