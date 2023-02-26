const fs = require('fs')
const saveProgress = require('../utils/saveProgress')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)
let _commonWords = require('../words most used.json').slice(0, 1500)
let cogite = require('../cogite_words/cogite_words.json')
  .map(v => v[0])
  .slice(0, 1)

let commonWords = [..._commonWords, ...cogite]

const allSentences = txt.split('\r\n')

function checkWords(
  sentence,
  additionalWords = '',
  { minLength, maxLength } = {}
) {
  // sentence = sentence.replace(/[^\w\s]/gi, '')
  if (additionalWords) {
    const re = new RegExp(
      `\\b${additionalWords}${additionalWords?.endsWith('?') ? '' : '\\b'}`,
      'i'
    )
    if (!re.test(sentence)) return false

    const sentenceWithoutQuery = sentence
      .replace(re, '')
      .replace(/\s{2,}/g, ' ')

    sentence = sentenceWithoutQuery
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

function getAll(quero, options) {
  // if (quero) commonWords = [quero, ...commonWords]
  console.log(allSentences.length)

  const result = allSentences.filter(sentence => {
    const words = sentence.toLowerCase().match(/[a-zA-Z][’'a-zA-Z]*/gi)
    if (!words) return false
    // return true
    return checkWords(sentence, quero, options)
  })

  // console.log(result.join('\n'))

  return result
}

function getPattern(sentences, n = 2) {
  const patterns2 = []

  sentences.forEach((sentence, index) => {
    const firstXWordsPattern = sentence
      .match(/[a-zA-Z][’'a-zA-Z]*/gi)
      .slice(0, n)
      .join(' ')
      .toLowerCase()

    const count = sentences.filter(sen => {
      const firstXWordsSen = sen
        .match(/[a-zA-Z][’'a-zA-Z]*/gi)
        .slice(0, n)
        .join(' ')
        .toLowerCase()

      if (firstXWordsSen === firstXWordsPattern) return true
    }).length

    if (
      count > 10 &&
      !patterns2.find(({ pattern }) => pattern === firstXWordsPattern)
    ) {
      patterns2.push({ pattern: firstXWordsPattern, count })
      console.log(index, '-', sentences.length)
      console.log(firstXWordsPattern)
    }
  })

  return patterns2
}

async function getSentences() {
  const getSentences = () => getAll(false, { minLength: 40, maxLength: 50 })
  const sentences = await saveProgress(getSentences, './sentences-top-150.json')

  let index = 5
  console.log(
    sentences.slice(60 * (index - 1), 60 * (index - 1) + 60).join('\n')
  )

  // const patterns2 = await saveProgress(
  //   () => getPattern(sentences.slice(0, 30000), 4),
  //   './4-patterns-30k.json'
  // )

  // console.log(patterns2.sort((a, b) => b.count - a.count))
}

getSentences()
