const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)
let commonWords = require('../words most used.json').slice(0, 40)

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
      return false
    }
  }
  return true
}

function getAll(quero) {
  // if (quero) commonWords = [quero, ...commonWords]

  const result = allSentences.filter(sentence => {
    const words = sentence.toLowerCase().match(/[a-zA-Z][’'a-zA-Z]*/gi)
    if (!words) return false

    return checkWords(sentence, quero)
  })

  // console.log(result.join('\n'))

  return result
}

const query = `
let me
`

// const s = getAll().filter(f => f.split(' ').length > 5)
// console.log(s.join('\n'))

const allAll = query
  .split('\n')
  .filter(Boolean)
  .map((q, i) => {
    console.clear()
    console.log(i, query.split('\n').filter(Boolean).length)
    return getAll(q)
  })

fs.writeFileSync(
  __dirname + '/result-anchor.json',
  JSON.stringify(allAll, null, 2)
)
