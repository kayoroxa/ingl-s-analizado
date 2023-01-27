const { findBeforeAndAfter, allText } = require('../antes&DepoisDaPalavra')

const word = 'i'
const beforeAndAfter = findBeforeAndAfter(word, allText, {
  numberOfWords: 2,
  // wordMostUsed: 100,
}).after.slice(0, 10)

console.log(beforeAndAfter)

function find(nexts) {
  const child = findBeforeAndAfter(
    nexts.slice(-2).join(' ').replace(" '", "'"),
    allText,
    { numberOfWords: 2 }
  ).after?.[0]

  if (child || child?.count >= 1) {
    return child
  }

  const child1 = findBeforeAndAfter(
    nexts.slice(-2).join(' ').replace(" '", "'"),
    allText,
    { numberOfWords: 1 }
  ).after?.[0]

  if (
    (child1 || child1?.count >= 1) &&
    child1?.word !== nexts.join(' ').replace(" '", "'")
  ) {
    return child
  }
  return false
}

const news = beforeAndAfter.map(({ word: secondWord }) => {
  const nexts = [word, secondWord]
  let end = false

  while (end === false) {
    const searched = find(nexts)

    if (!searched) end = true
    else {
      nexts.push(searched.word)
      continue
    }
  }
  return nexts
})

console.log(news)
console.log(news.map(v => v.join(' ').replace(" '", "'")))
console.log(news.map(v => v.join(' | ')))
// const finded = Array(10).fill().map((_, i) => {

// })

// console.log(beforeAndAfter)

// ser mais de 1
