const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(
    'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/890k sentences in english.txt'
  ),
  { encoding: 'utf-8' }
)

const wordsFast = require('../caption youtube hacker/wordsFast.json')

const allSentences = txt.split('\r\n')

// console.log(allSentences.length)

const catalogação = allSentences.map(text => {
  const allWords = text.match(/[a-zA-Z][’'a-zA-Z]*/gi)
  // let smallWord =
  //   ?.filter(w => w.length <= 3).length

  if (text.length > 50) return { score: 0, text }
  const w = allWords?.filter(w => wordsFast.includes(w.toLowerCase())).length

  return {
    score: w,
    text: text.replace(/\.$/g, ''),
  }
})

const sorted = catalogação
  .sort((a, b) => {
    return b.score - a.score
  })
  .map(v => v.text)
  .slice(0, 300)

console.log(sorted.join('\n'))
