const allWords = require('../allWords2.json').slice(0, 400)
const { findBeforeAndAfter, allText } = require('../antes&DepoisDaPalavra')
const fs = require('fs')
const min = 20
const temp = []

function getNameTag(count) {
  let countX = 500
  while (countX >= min) {
    if (count >= countX) {
      return countX
    }
    countX -= 20
  }
}

const diagram = allWords.reduce((acc, { word }, index) => {
  console.log(`${index}/${allWords.length}`)
  const { before, after } = findBeforeAndAfter(word, allText, {
    numberOfWords: 2,
  })

  let newAcc = { ...acc }
  before
    .filter(b => b.count >= min)
    .forEach(b => {
      const beforeJoin = `${b.word}|${word}`
      if (temp.indexOf(`${b.word}|${word}`) === -1) {
        const countTag = getNameTag(b.count)

        if (newAcc[countTag]) newAcc[countTag].push(beforeJoin)
        else newAcc[countTag] = [beforeJoin]
        temp.push(`${b.word} ${word}`)
      }
    })
  after
    .filter(a => a.count >= min)
    .forEach(a => {
      const afterJoin = `${word}|${a.word}`
      if (
        temp.indexOf(`${word} ${a.word}`) === -1 &&
        a.word.slice(0, 1) !== "'"
      ) {
        const countTag = getNameTag(a.count)

        if (newAcc[countTag]) newAcc[countTag].push(afterJoin)
        else newAcc[countTag] = [afterJoin]
        temp.push(`${word} ${a.word}`)
      }
    })
  fs.writeFileSync('./diagramMulti_2Word.json', JSON.stringify(acc, null, 2))
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
