const words = require('./cogite_words.json')
const stringSimilarity = require('string-similarity')

const groups = {
  90: words.filter(
    ([word, translate]) =>
      stringSimilarity.compareTwoStrings(word, translate) > 0.9
  ),
  80: words.filter(
    ([word, translate]) =>
      stringSimilarity.compareTwoStrings(word, translate) > 0.8 < 0.9
  ),
  60: words.filter(
    ([word, translate]) =>
      stringSimilarity.compareTwoStrings(word, translate) > 0.5 < 0.8
  ),
}

console.log(groups)
