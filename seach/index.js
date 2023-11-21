/* eslint-disable no-unused-vars */
const fs = require('fs')
const joinPath = require('path').join

const getAllSentences = require('../utils/getAllSentences')
const words = require('../words-most-used-friends.json').slice(0, 1300)

const text = getAllSentences({
  db: 'dialogues',
  joinText: true,
})

function getAllChunks() {
  const numberBlocks = 2
  const frequencyMin = 2

  let rawChunks = text
    .match(
      new RegExp(
        `(${words.join('\\b|\\b')}|\\s){${numberBlocks * 2 + 1},}`,
        'gi'
      )
    )
    .filter(c => c.trim().length > numberBlocks * 2 + 1)

  let countChunks = {}

  for (let chunk of rawChunks) {
    chunk = chunk.trim()
    countChunks[chunk] = (countChunks[chunk] || 0) + 1
  }

  let sorted = Object.entries(countChunks)
    .sort((a, b) => b[1] - a[1])
    .filter(v => v[1] >= frequencyMin)

  console.log(sorted)

  // fs.writeFileSync(
  //   joinPath(__dirname, 'chunks-must-used-friends.json'),
  //   JSON.stringify(sorted, null, 2)
  // )
}
function getAllFrequency() {
  const query = `
reading a book
talks to me
in the morning
at the restaurant
last night
because I suggested it
at the restaurant
because i want it
when i was there
goes to the party
yesterday
goes to the party
nobody
got sick
had a great time
studying
at my house
is going [^.?,!]*?
doing that
doing this
doing it
my neighbor
my cousin
someone
no one
my son
me
at my \\w+
at my apartment
i don't know why
because i want it
when i was there
`
    .trim()
    .split('\n')

  function getFrequency(frases) {
    if (frases.length === 1) {
      return [frases[0]]
    }

    let countChunks = {}

    for (let chunk of frases) {
      chunk = chunk.trim()
      countChunks[chunk] = (countChunks[chunk] || 0) + 1
    }

    let sorted = Object.entries(countChunks)
      .sort((a, b) => b[1] - a[1])
      .filter(v => v[1] > 5)

    return sorted.map(v => v[0] + ' - ' + v[1])
    // return sorted.map(v => v[0])
  }

  const oi = query
    .map(q => ({
      // q,
      ls:
        q.includes('*') || q.includes('\\')
          ? getFrequency(text.match(new RegExp(q, 'gi')) || [])
          : [q],
      l: text.match(new RegExp(q, 'gi'))?.length || 0,
    }))
    .sort((a, b) => b.l - a.l)
    .filter(v => v.l > 2)

  console.log(oi)
}

getAllFrequency()
