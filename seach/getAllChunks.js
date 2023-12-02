const getAllSentences = require('../utils/getAllSentences')
const fs = require('fs')

const words = require('../words-most-used-friends.json').slice(0, 1300)

const text = getAllSentences({
  db: 'sentences',
  joinText: true,
})

function getAllChunks() {
  const numberBlocks = 2
  const maxBlocks = 3
  const frequencyMin = 30
  const minWords = 2

  let rawChunks = text
    .match(
      new RegExp(
        `(${words.join('\\b|\\b')}|\\s){${numberBlocks * 2 + 1},${
          maxBlocks ? maxBlocks * 2 : ''
        }}`,
        'gi'
      )
    )
    .filter(c => c.trim().length > numberBlocks * 2 + 1)

  let countChunks = {}

  for (let chunk of rawChunks) {
    chunk = chunk.trim()
    countChunks[chunk] = (countChunks[chunk] || 0) + 1
  }

  const getWords = (chunk, tom) => {
    let words = chunk.match(/[a-zA-Z][’'a-zA-Z]*/gi)

    if (tom) words = words.filter(w => w.toLowerCase() !== 'tom')

    return words
  }

  let sorted = Object.entries(countChunks)
    .filter(
      v =>
        v[1] >= frequencyMin &&
        v[0] &&
        // getWords(v[0]).length <= maxWords &&
        getWords(v[0], true).length >= minWords
    )
    .sort((a, b) => b[1] - a[1])

  console.log(sorted)

  fs.writeFileSync(
    'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/DATASET ENGLISH/chunks-sentences.json',
    JSON.stringify(
      sorted.map(v => v[0]),
      null,
      2
    )
  )
}

getAllChunks()
