const folderAnalyze = require('../utils/folderAnalyse')
const textSanitizer = require('../utils/textSanitizer')
const words = require('../words most used')
const compareUniqWords = require('./compareUniquesWords')
const pathJoin = require('path').join

const srtDatas = folderAnalyze(pathJoin(__dirname, '../movie srt'), {
  filterExt: '.srt',
  readMode: true,
}).map(srtData => srtData.map(s => textSanitizer(s.text)))

// const allSentences = srtDatas
//   .reduce((acc, cur) => {
//     const splittedByPunctuation = cur.join(' ').split(/[.+|?|!]/i)

//     return [...acc, ...splittedByPunctuation]
//   }, [])
//   .filter(
//     text =>
//       text.length > 10 && text.trim().split(' ').length > 1 && text.length < 50
//   )
const allSentences = `
I am fine and you?
i am not fine but thanks for asking
thanks for asking but i am great
I don't know if you are okay
i know he is fine
I am thinking about that
you have to think about it
you have to ask if he is okay
he wants you to ask that
I don't know if he wants you to ask that
thanks but i will not ask
i saw you last night
You are great
you are thinking if it is night
he is thinking about you
he is thinking about last night
he will think about it
he will have to think about it
he is asking for you
he wants to know if you will ask
It is okay
I saw you last night and I am thinking if you are okay
I don't think about it
he is asking you about last night
he is asking if you are okay
You and I are great
he is asking if you have
but i saw it last night
but i saw you last night
i don't have to think about it
if he thanks you i will not ask about that
he wants to ask you that
`
  .toLowerCase()
  .split('\n')
  .filter(Boolean)

// function countScore(text) {
//   return text.
// }

const wordsReverse = words.reverse()

const allSentencesScored = allSentences.map(s => {
  const words = s.match(/[a-zA-Z][’'a-zA-Z]*/gi)
  if (!words) return { text: '', score: 0 }

  const score = words.reduce((acc, w) => acc + wordsReverse.indexOf(w), 0)

  return { text: s, score }
})

const sentencesSorted = allSentencesScored.sort((a, b) => b.score - a.score)

const sentencesSplitted = sentencesSorted
  .slice(0, 60)
  .map(({ text }) => text.match(/[a-zA-Z][’'a-zA-Z]*/gi))

const allWords = [].concat(...sentencesSplitted)

const wordsWithScore = allWords.reduce((acc, w) => {
  acc[w] = acc[w] ? acc[w] + 1 : 1
  return acc
}, {})

const groupScored = Object.entries(wordsWithScore).sort((a, b) => b[1] - a[1])
// .filter(([_, score]) => score > 3)

// const groupW = groupScored.map(v => v[0])

// const filterSentenceUsingGroup = allSentences.filter(s => {
//   return s
//     .match(/[a-zA-Z][’'a-zA-Z]*/gi)
//     ?.every(w => groupW.includes(w.toLowerCase()))
// })

// console.log(sentencesSorted.slice(0, 10))
console.log(groupScored)

// const info = {
//   lenSentenceWords: allWords.length,
//   lenGroup: groupW.length,
//   percent:
// }

compareUniqWords(allSentences.join(' '))
