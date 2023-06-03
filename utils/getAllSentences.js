const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)

function checkWords({
  sentence,
  minLength,
  maxLength,
  commonWords,
  additionalWords,
} = {}) {
  // sentence = sentence.replace(/[^\w\s]/gi, '')

  if (additionalWords) {
    const notB =
      additionalWords.includes('$') ||
      additionalWords.includes('^') ||
      additionalWords.startsWith('-')

    if (additionalWords.startsWith('-')) {
      additionalWords = additionalWords.slice(1)
    }

    const regex = notB
      ? additionalWords
      : `\\b${additionalWords}${additionalWords?.endsWith('?') ? '' : '\\b'}`

    let re = new RegExp(regex, 'i')

    if (!re.test(sentence)) return false

    const sentenceWithoutQuery = sentence
      .replace(re, '')
      .replace(/\s{2,}/g, ' ')

    sentence = sentenceWithoutQuery === '' ? sentence : sentenceWithoutQuery
  }

  const words = sentence?.match(/[a-zA-Z][’'a-zA-Z]*/gi)

  if (!words) return false

  for (const word of words) {
    if (!commonWords.find(c => c === word.toLowerCase())) {
      // if (!commonWords.includes(word.toLowerCase())) {
      return false
    }
  }

  if (minLength && sentence.length < minLength) return false
  if (maxLength && sentence.length > maxLength) return false
  return true
}

function getAll(options, allSentences, quero) {
  // if (quero) commonWords = [quero, ...commonWords]
  console.log(allSentences.length)

  const result = allSentences.filter((sentence, i) => {
    if (i % 1000 === 0) console.log(i)
    const words = sentence.toLowerCase().match(/[a-zA-Z][’'a-zA-Z]*/gi)
    if (!words) return false
    return checkWords({ sentence, additionalWords: quero, ...options })
  })

  // console.log(result.join('\n'))

  return result
}

const initOp = {
  topUsed: 40,
  topCogite: 40,
  minLength: 20,
  maxLength: 50,
}

function getAllSentences({
  topUsed,
  topCogite,
  additionalWords,
  slice,
  minLength,
  maxLength,
} = initOp) {
  let _commonWords = require('../words most used.json').slice(0, topUsed)

  let cogite = require('../cogite_words/cogite_words.json')
    .map(v => v[0])
    .slice(0, topCogite)

  let commonWords = [..._commonWords, ...cogite]
  const allSentences = slice
    ? txt.split('\r\n').slice(0, 100)
    : txt.split('\r\n')

  const me = getAll(
    { minLength, maxLength, commonWords },
    allSentences,
    additionalWords
  )

  return me
}

module.exports = getAllSentences

// const all = getAllSentences({ additionalWords: 'that' })

// console.log(all)
