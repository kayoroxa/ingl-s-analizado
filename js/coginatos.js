const stringSimilarity = require('string-similarity')
const wordsEnglish = require('../words most used.json').slice(0, 6000)
// save txt with wordsEnglish
const fs = require('fs')
const pathJoin = require('path').join

const wordsPortuguese = fs
  .readFileSync(pathJoin(__dirname, '../wordsPortugues.txt'), 'utf8')
  .split('\r\n')

const wordsEnComparePt = wordsEnglish
  .map((word, i) => {
    // console.log(`${i}/${wordsEnglish.length}`)
    // console.log(word, wordsPortuguese[i])
    return compare2String(word, wordsPortuguese[i])
  })
  .filter(predicate => predicate.length > 1)

console.log(wordsEnComparePt)
save_compare2String(wordsEnComparePt)

function getTheBestMatch(word) {
  return [
    { word: word },
    ...stringSimilarity
      .findBestMatch(word, wordsPortuguese)
      .ratings.filter(predicate => {
        if (predicate.target.length > 3 && predicate.rating > 0.8) {
          return true
        }
      })
      .map(predicate => predicate.target),
  ]
}

function compare2String(str1, str2) {
  const result = stringSimilarity.compareTwoStrings(str1, str2)
  if (result > 0.5) {
    return [str1, str2]
  } else {
    return []
  }
}

function save_compare2String(data) {
  fs.writeFileSync(
    pathJoin(__dirname, '../cogite_words.json'),
    '[' + data.map(word => `${JSON.stringify(word)},`).join('\r\n') + ']'
  )
}
