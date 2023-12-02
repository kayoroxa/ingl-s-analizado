/* eslint-disable no-unused-vars */
const fs = require('fs')
const joinPath = require('path').join

const getAllSentences = require('../utils/getAllSentences')

const text = getAllSentences({
  db: 'dialogues',
  joinText: true,
})

function getAllFrequency() {
  let query = `
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
at my 
at my apartment
i don't know why
because i want it
when i was there
at my home
watch tv
at the _
travel
wants to
`
    .replace(/_/g, '\\w+\\b')
    .trim()
    .split('\n')

  query = [...new Set(query)]

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

  const results = query
    .map(q => ({
      // q,
      ls:
        q.includes('*') || q.includes('\\')
          ? getFrequency(text.match(new RegExp(q, 'gi')) || [])
          : [q],
      l: text.match(new RegExp(q, 'gi'))?.length || 0,
    }))
    .sort((a, b) => b.l - a.l)

  let resultsFilter = results.filter(v => v.l > 1)

  console.log(resultsFilter.reverse())

  const bads = query
    .filter(s => !resultsFilter.some(({ ls }) => ls.includes(s)))
    .join('\n')

  console.log('\n\n' + '-- 👎'.repeat(6) + '\n\n' + bads + '\n')
}

getAllFrequency()
