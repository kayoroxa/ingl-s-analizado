const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)
let _commonWords = require('../words most used.json').slice(0, 40)
let cogite = require('../cogite_words/cogite_words.json')
  .map(v => v[0])
  .slice(0, 300)
let commonWords = [..._commonWords, ...cogite]

const allSentences = txt.split('\r\n')

function checkWords(sentence, additionalWords = '') {
  // sentence = sentence.replace(/[^\w\s]/gi, '')
  const re = new RegExp(`\\b${additionalWords}\\b`, 'i')
  if (!re.test(sentence)) return false

  const newSentence = sentence.replace(re, '').replace(/\s{2,}/g, ' ')
  const words = newSentence?.match(/[a-zA-Z][’'a-zA-Z]*/gi)

  if (!words) return false

  for (const word of words) {
    if (!commonWords.find(c => c === word.toLowerCase())) {
      // if (!commonWords.includes(word.toLowerCase())) {
      return false
    }
  }
  return true
}

function getAll(quero) {
  // if (quero) commonWords = [quero, ...commonWords]
  console.log(allSentences.length)

  const result = allSentences.filter(sentence => {
    const words = sentence.toLowerCase().match(/[a-zA-Z][’'a-zA-Z]*/gi)
    if (!words) return false
    return checkWords(sentence, quero)
  })

  // console.log(result.join('\n'))

  return result
}

getAll()
