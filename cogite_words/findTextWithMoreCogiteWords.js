const fs = require('fs')
const joinPath = require('path').join
const cogiteWords = require('./cogite_words.json')
const onlyCogitePt = cogiteWords.map(v => v[1])

const text = fs.readFileSync(
  joinPath(__dirname, './Essencialismo-greg-mckeown.txt'),
  'utf8'
)

function getPercentage(textWords, cogiteWords) {
  const words = textWords
  const cogiteWordsFind = []

  const cogiteWordsCount = cogiteWords.reduce((acc, cur) => {
    if (words.includes(cur)) {
      cogiteWordsFind.push(cur)
      return acc + 1
    }
    return acc
  }, 0)

  return {
    percentage: (cogiteWordsCount / words.length) * 100,
    wordsFind: cogiteWordsFind,
  }
}

function findTextWithMoreCogiteWords(text) {
  const words = text
    .match(/[^:|,|\s|.|?|!|-]+/g)
    .map(v => v.toLowerCase().trim())

  const texts = []
  for (let i = 0; i < words.length; i += 5) {
    console.log(`${i} / ${words.length}`)
    const wordsRange = words.slice(i, i + 5)
    const { percentage, wordsFind } = getPercentage(wordsRange, onlyCogitePt)

    if (percentage > 13) {
      texts.push({
        text: wordsRange
          .map(w =>
            wordsFind.includes(w) ? cogiteWords.find(v => v[1] === w)[0] : w
          )
          .join(' '),
        percentage,
      })
    }
  }

  const sortText = texts.sort((a, b) => b.percentage - a.percentage)

  return sortText
}

// console.log(findTextWithMoreCogiteWords(text))

fs.writeFileSync(
  'frases_portuglês.json',
  JSON.stringify(findTextWithMoreCogiteWords(text), null, 2)
)
