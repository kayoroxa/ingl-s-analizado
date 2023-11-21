const fs = require('fs')
const joinPath = require('path').join
const parser = require('subtitles-parser')

function allFriendsSentences({ joinText = false }) {
  const folderPath =
    'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/subtitles/friends subtitles'

  const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.srt'))

  const allFiles = files.map(file => {
    const text = fs.readFileSync(joinPath(folderPath, file), {
      encoding: 'utf-8',
    })

    return text
  })

  let allSentences = allFiles
    .map(file => parser.fromSrt(file, true))
    .map(srt => srt.map(s => s.text.replace(/\n/g, '')))
    .filter(s => s.length > 0)
    .reduce((prev, cur) => {
      return prev.concat(cur)
    }, [])

  console.log(`📚 Read friends series: ${allSentences.length} sentences`)

  if (!joinText) return allSentences
  else {
    const allText = allSentences.join(' ').toLowerCase()
    return allText
  }
}

function allDialoguesSentences({ joinText = false }) {
  const folderPath =
    'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/DATASET ENGLISH/dialogos'

  const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.txt'))

  const allFiles = files.map(file => {
    const text = fs.readFileSync(joinPath(folderPath, file), {
      encoding: 'utf-8',
    })

    return text
  })

  let allSentences = allFiles
    .map(file => file.split(/[\r\n]+/g))
    .map(srt => srt.map(s => s.replace(/\n/g, '')))
    .filter(s => s.length > 0)
    .reduce((prev, cur) => {
      return prev.concat(cur)
    }, [])

  console.log(`📚 Read dialogues: ${allSentences.length} sentences`)

  if (!joinText) return allSentences
  else {
    const allText = allSentences.join(' ').toLowerCase()
    return allText
  }
}

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

function getAllSentences({
  db = 'default',
  joinText = false,
  topUsed = 40,
  topCogite = 40,
  additionalWords,
  slice,
  minLength = 20,
  maxLength = 50,
}) {
  if (db === 'friends') {
    return allFriendsSentences({ joinText })
  }
  if (db === 'dialogues') {
    return allDialoguesSentences({ joinText })
  }

  let _commonWords = require('../words most used.json').slice(0, topUsed)

  let cogite = require('../cogite_words/cogite_words.json')
    .map(v => v[0])
    .slice(0, topCogite)

  let commonWords = [..._commonWords, ...cogite]

  const txt = fs.readFileSync(
    joinPath(__dirname, '../890k sentences in english.txt'),
    { encoding: 'utf-8' }
  )

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
