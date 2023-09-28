const search = 'mid'

const words = require('../words most used.json')

const searchWords = words
  // .slice(0, 2000)
  .map((word, i) => {
    return [word, i]
  })
  .filter(([word]) => {
    return word.match(new RegExp(search, 'gi'))
  })
  .join('\n')

console.log(searchWords)
