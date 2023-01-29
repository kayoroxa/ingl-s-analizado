const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)
let _commonWords = require('../words most used.json').slice(0, 150)
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
    return checkWords(sentence, quero, options)
  })

  // console.log(result.join('\n'))

  return result
}

const query = `

`
//(for|with|to|by|at|in|on|about|from|like)\\?
//have .*\\?
//how (many|much|often|far|long)
// have .*\\?

// const s = getAll().filter(f => f.split(' ').length > 5)
// console.log(s.join('\n'))

function app() {
  if (query.trim().length === 0) {
    const me = getAll(false, { minLength: 40, maxLength: 50 })
    console.log(me.join('\n'))
  } else {
    const allAll = query
      .split('\n')
      .filter(Boolean)
      .map((q, i) => {
        console.clear()
        console.log(i, query.split('\n').filter(Boolean).length)
        return getAll(q)
      })
    console.log(allAll[0].filter(s => s.length < 30).join('\n'))
  }
}

app()

// fs.writeFileSync(__dirname + '/in-on-at.json', JSON.stringify(allAll, null, 2))
