const folderAnalyse = require('./utils/folderAnalyse')
const pathJoin = require('path').join
const textSanitizer = require('./utils/textSanitizer')
// const allWords2 = require('./utils/allWords2.json').slice(0, 1)
const readlineSync = require('readline-sync')
const wordsMostUsed = require('./words most used.json')
const fs = require('fs')
const words = require('./words most used')
const srtDatas = folderAnalyse(pathJoin(__dirname, './movie srt'), {
  filterExt: '.srt',
  readMode: true,
}).map(srtData => srtData.map(s => textSanitizer(s.text)))

let allText = srtDatas
  .reduce((acc, cur) => {
    const splittedByPunctuation = cur.join(' ').split(/[.*|?|!]/i)
    return [...acc, ...splittedByPunctuation]
  }, [])
  .filter(text => text.length > 10 && text.length < 60)

const datSetText = fs.readFileSync('./datasetText.txt', { encoding: 'utf-8' })

allText.push(datSetText)

allText = allText.map(s => s.trim())

console.log(`total sentences: ${allText.length}`)

function findFrequentSentence(query) {
  const match =
    allText
      .join(' ')
      .match(new RegExp(`${query}`, 'gi'))
      ?.filter(s => s.length < 30) || []

  const matchIncludes = allText.filter(s => {
    const goodSize = s.length < 200

    const words = s.toLowerCase().match(new RegExp(`[’'a-zA-Z]+`, 'gi'))
    const queryWords = query
      .toLowerCase()
      .match(new RegExp(`[’'a-zA-Z]+`, 'gi'))

    if (queryWords?.every(qWord => words?.includes(qWord)) && goodSize) {
      return true
    }
    return false
  })

  const matchSentence = allText.filter(s => {
    const goodSize = s.length < 200

    if (s.match(new RegExp(`${query}`, 'gi')) && goodSize) {
      return true
    }
    return false
  })

  const uniqSent = [...new Set(matchIncludes)]
  const uniqSentMatch = [...new Set(matchSentence)]
  console.log('\nincludes:', uniqSent)
  console.log('\nregex:', uniqSentMatch)

  const dictWithFrequency = match?.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {})

  const arrayWithDict = Object.entries(dictWithFrequency).map(
    ([word, count]) => ({ word, count })
  )

  return arrayWithDict
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)
    .filter(v =>
      v.word
        .split(' ')
        .every(v => words.slice(0, 500).includes(v.toLowerCase()))
    )
}

function filtrar(sizeWordMostUsed, payload) {
  if (!sizeWordMostUsed) return payload

  const payLoadFiltered = payload.filter(p => {
    const allWordsInPayload = p.word.match(new RegExp(`[’'a-zA-Z]+`, 'gi'))
    const isPayloadWordsInMostUsed = allWordsInPayload.every(w =>
      wordsMostUsed.slice(0, sizeWordMostUsed).includes(w)
    )
    return isPayloadWordsInMostUsed
  })

  return payLoadFiltered
}

function findBeforeAndAfterPercent(word, allText, options = {}) {
  word = word.toLowerCase()
  const count = {
    alone: 0,
    before: {},
    after: {},
  }
  allText.forEach(text => {
    const textSplittedWord = textSanitizer(text, true).match(
      new RegExp(`\\b${word}\\b|[’'a-zA-Z]+`, 'gi')
    )

    if (textSplittedWord) {
      const indexWord = textSplittedWord.indexOf(word)
      if (indexWord > -1) {
        let wordBefore
        let wordAfter

        if (options.numberOfWords) {
          wordBefore = textSplittedWord.slice(
            indexWord - options.numberOfWords,
            indexWord
          )
          wordAfter = textSplittedWord.slice(
            indexWord + 1,
            indexWord + options.numberOfWords + 1
          )

          if (wordAfter.length === options.numberOfWords)
            wordAfter = wordAfter.join(' ')
          else wordAfter = false

          if (wordBefore.length === options.numberOfWords)
            wordBefore = wordBefore.join(' ')
          else wordBefore = false
        } else {
          wordBefore = textSplittedWord[indexWord - 1]
          wordAfter = textSplittedWord[indexWord + 1]
        }
        count.alone += 1
        if (wordBefore) {
          count.before[wordBefore] = count.before[wordBefore]
            ? count.before[wordBefore] + 1
            : 1
        }
        if (wordAfter) {
          count.after[wordAfter] = count.after[wordAfter]
            ? count.after[wordAfter] + 1
            : 1
        }
      }
    }
  })

  //sort by count [{word: 'word', count: 10}, {word: 'word', count: 10}]
  let sortBefore = Object.keys(count.before).map(word => ({
    word,
    count: count.before[word],
  }))
  sortBefore.sort((a, b) => b.count - a.count)

  let sortAfter = Object.keys(count.after).map(word => ({
    word,
    count: count.after[word],
  }))
  sortAfter.sort((a, b) => b.count - a.count)

  if (typeof options?.wordMostUsed === 'number') {
    sortBefore = filtrar(options.wordMostUsed, sortBefore)
    sortAfter = filtrar(options.wordMostUsed, sortAfter)
  }

  return {
    alone: count.alone,
    first10Before: Math.round(
      (sortBefore.slice(0, 30).reduce((acc, cur) => acc + cur.count, 0) * 100) /
        count.alone
    ), //+ '%',
    first10After: Math.round(
      (sortAfter.slice(0, 10).reduce((acc, cur) => acc + cur.count, 0) * 100) /
        count.alone
    ), //+ '%',
    before: sortBefore.slice(0, 10),
    after: sortAfter.slice(0, 10),
  }
}

module.exports = { findBeforeAndAfter: findBeforeAndAfterPercent, allText }

// const result = findFrequentSentence('hope')
// console.log(result)

while (true) {
  const word = readlineSync.question('palavra: ')
  // const word = 'you'
  if (word === '0') break
  const beforeAndAfter = findBeforeAndAfterPercent(word, allText, {
    numberOfWords: 2,
    // wordMostUsed: 100,
  })
  const beforeAndAfter1 = findBeforeAndAfterPercent(word, allText, {
    numberOfWords: 1,
    // wordMostUsed: 100,
  })

  console.log({
    ...beforeAndAfter,
    before: [...beforeAndAfter.before, ...beforeAndAfter1.before].sort(
      (a, b) => b.count - a.count
    ),
    after: [...beforeAndAfter.after, ...beforeAndAfter1.after].sort(
      (a, b) => b.count - a.count
    ),
  })
  console.log('\n')
}
