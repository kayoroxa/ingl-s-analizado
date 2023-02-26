const fs = require('fs')
const sentenceSimilarity = require('../utils/sentenceSimilarity')
const sortBySimilarity = require('../utils/sortBySimilarity')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)
let _commonWords = require('../words most used.json').slice(0, 200)
let cogite = require('../cogite_words/cogite_words.json')
  .map(v => v[0])
  .slice(0, 100)

let commonWords = [
  ..._commonWords,
  ...cogite,
  'enjoy',
  'hates',
  'hate',
  'loves',
  'avoid',
  'mind',
]

const allSentences = txt.split('\r\n')

function checkWords(
  sentence,
  additionalWords = '',
  { minLength, maxLength } = {}
) {
  // sentence = sentence.replace(/[^\w\s]/gi, '')

  if (additionalWords) {
    const notB = additionalWords.includes('$') || additionalWords.includes('^')

    const notAllB = additionalWords.startsWith('-')

    let regex = notB
      ? additionalWords
      : `\\b${additionalWords}${additionalWords?.endsWith('?') ? '' : '\\b'}`

    if (notAllB) {
      additionalWords = additionalWords.slice(1)
      regex = additionalWords
    }

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

// (any|nothing|something|anything|everything)

//(are|is|be|been|being|am|was|were)

const query = `
-ing
`

const query2 = `
(too|as well|also|either)
how many times
how long
how much
(been|gone|had|seen|finished|lived|spoken)
-(?<!go)ing
supposed to
how did (he|you|i|she|we|it)
What would (he|you|i|she|we|it) like to
all of
`

//(behind|in front of|along|across|onto|into|out of|next to|around|through)
//^(?!.*(Did|ed |had|done|\\?|n't|not|'ll|will|gonna|going to|'d|got|no)).*$
//(for|with|to|by|at|in|on|about|from|like)\\?
//have .*\\?
//how (many|much|often|far|long)
// have .*\\?

// const s = getAll().filter(f => f.split(' ').length > 5)
// console.log(s.join('\n'))

function getLenConnection(sentence) {
  const words = sentence.match(/[a-zA-Z][’'a-zA-Z]*/gi)

  const lenConnection = words.reduce((acc, word, i) => {
    const nextWord = words[i + 1]
    if (!nextWord) return acc

    if (word.toLowerCase().endsWith('e')) {
      word = word.slice(0, -1)
    }

    const reEndWithConsonant = new RegExp(`[^aeiouyw]$`, 'gi')
    const reStartWithVowel = new RegExp(`^[aeiouyw]`, 'gi')

    const endWithConsonant = reEndWithConsonant.test(word)
    const startWithConsonant = reStartWithVowel.test(nextWord)

    if (endWithConsonant && startWithConsonant) acc += 1

    return acc
  }, 0)

  return lenConnection
}

function sortByCTS(a, b) {
  const lenA = getLenConnection(a)
  const lenB = getLenConnection(b)

  return lenB - lenA
}

function app() {
  let deleted = {}
  const hasQuery = query.trim().length > 0

  if (hasQuery) {
    const allAll = query
      .split('\n')
      .filter(Boolean)
      .map((q, i) => {
        console.clear()
        console.log(i, query.split('\n').filter(Boolean).length)
        return getAll(q).filter(
          f => !f.match(/(is|am|are|was|were|'m|'s|'re|be)/gi)
        )
      })

    allAll.forEach((group, index) => {
      const sentences = group.filter(s => s.length > 20 && s.length < 30)
      deleted.delBySize = group.length - sentences.length
      if (sentences.length === 0) return

      console.log('\n')
      console.log(query.split('\n').filter(Boolean)[index])
      // const sortedSentence = sentences.sort(sortByCTS)
      const sortedSentence = sortBySimilarity(sentences)
      console.log(sortedSentence.join('\n'))
    })

    console.log('\n')
    console.log(allAll.map(g => g.length))
    console.log(deleted)
  } else {
    const me = getAll(false, { minLength: 40, maxLength: 50 })
    console.log(me.join('\n'))
  }
}

app()

// fs.writeFileSync(__dirname + '/in-on-at.json', JSON.stringify(allAll, null, 2))
