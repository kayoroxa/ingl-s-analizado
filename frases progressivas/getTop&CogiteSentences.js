const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(
    'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/890k sentences in english.txt'
  ),
  { encoding: 'utf-8' }
)

function checkWords(sentence, additionalWord = '', commonWords) {
  // sentence = sentence.replace(/[^\w\s]/gi, '')
  const re = new RegExp(`\\b${additionalWord}\\b`, 'i')
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

function getAll(additionalWord, allSentences, commonWords) {
  // if (quero) commonWords = [quero, ...commonWords]
  console.log(allSentences.length)
  const result = allSentences.filter(sentence => {
    const words = sentence.toLowerCase().match(/[a-zA-Z][’'a-zA-Z]*/gi)
    if (!words) return false

    return checkWords(sentence, additionalWord, commonWords)
  })
  console.log('oi')
  // console.log(result.join('\n'))

  return result
}

function getEasyAllSentences({ top = 100, additionalWord }) {
  let _commonWords = require('../words most used.json').slice(0, top)
  let cogite = require('../cogite_words/cogite_words.json')
    .map(v => v[0])
    .slice(0, 300)
  let commonWords = [..._commonWords, ...cogite]

  const allSentences = txt.split('\r\n')

  console.log(additionalWord)

  return getAll(additionalWord, allSentences, commonWords)
}

module.exports = getEasyAllSentences
