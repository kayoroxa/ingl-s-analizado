const allWords = require('../allWords2.json').slice(0, 2000)
const { findBeforeAndAfter, allText } = require('../antes&DepoisDaPalavra')
const fs = require('fs')
const min = 50
const temp = []

function getNameTag(count) {
  let countX = 500
  while (countX >= min) {
    if (count >= countX) {
      return countX
    }
    countX -= 50
  }
}

const diagram = allWords.reduce((acc, { word }, index) => {
  console.log(`${index}/${allWords.length}`)
  const { before, after } = findBeforeAndAfter(word, allText, {
    numberOfWords: 1,
  })

  let newAcc = { ...acc }
  if (before.length > 0 && after.length > 0) {
    newAcc[word] = {
      before: before.filter(b => b.count >= min),
      after: after.filter(a => a.count >= min),
    }
    fs.writeFileSync('./diagramEach.json', JSON.stringify(acc, null, 2))
  }
  return newAcc
}, {})
// .map(v => v.split(' '))

// console.log(diagram)

//save to json

//500
//400
//300
//200
//100
//50

//max = 3504 & 2167
//min = 0
