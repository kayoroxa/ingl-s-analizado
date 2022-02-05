const folderAnalyse = require('./utils/folderAnalyse')
const pathJoin = require('path').join
const textSanitizer = require('./utils/textSanitizer')

const srtDatas = folderAnalyse(pathJoin(__dirname, './movie srt'), {
  filterExt: '.srt',
  readMode: true,
}).map(srtData => srtData.map(s => textSanitizer(s.text)))

const allText = srtDatas
  .reduce((acc, cur) => {
    const splittedByPunctuation = cur.join(' ').split(/[\.*|\?|\!]/i)
    // console.log(splittedByPunctuation)
    return [...acc, ...splittedByPunctuation]
  }, [])
  .filter(text => text.length > 10 && text.length < 60)

function findBeforeAndAfterPercent(word, allText, options = {}) {
  const count = {
    before: {},
    after: {},
  }
  allText.forEach(text => {
    const textSplittedWord = text
      .trim()
      .toLowerCase()
      .match(new RegExp(`\\b${word}\\b|[a-zA-Z']+`, 'gi'))

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
  const sortBefore = Object.keys(count.before).map(word => ({
    word,
    count: count.before[word],
  }))
  sortBefore.sort((a, b) => b.count - a.count)

  const sortAfter = Object.keys(count.after).map(word => ({
    word,
    count: count.after[word],
  }))
  sortAfter.sort((a, b) => b.count - a.count)

  return {
    before: sortBefore.slice(0, 10),
    after: sortAfter.slice(0, 10),
  }
}
const word = 'you have'

const beforeAndAfter = findBeforeAndAfterPercent(word, allText, {
  numberOfWords: 1,
})
console.log(beforeAndAfter)

const beforeAndAfter2 = findBeforeAndAfterPercent(word, allText, {
  numberOfWords: 2,
})
console.log(beforeAndAfter2)

// const mesquinha = [
//   'but',
//   'i',
//   'you',
//   'he',
//   'she',
//   'it',
//   'they',
//   'we',
//   'us',
//   'them',
//   'her',
//   'him',
//   "i'll",
//   "we'll",
//   "you'll",
//   "i'm",
//   "you're",
//   "he's",
//   'my',
//   'an',
//   'the',
//   'your',
//   'me',
//   'and',
//   'man',
//   'car',
// ]
// function catalogar() {
//   const catalog = []
//   const words = []
//   allText.slice(0, 50).forEach((text, i) => {
//     console.log(`${i}/${200}`)
//     const textSplittedWord = text
//       .trim()
//       .toLowerCase()
//       .match(/[a-zA-Z']+/g)

//     textSplittedWord.forEach(word => {
//       if (!words.includes(word)) {
//         words.push(word)
//         if (mesquinha.includes(word)) return
//         const beforeAndAfter = findBeforeAndAfterPercent(word, allText, {
//           numberOfWords: 2,
//         })
//         beforeAndAfter.before.slice(0, 3).forEach(before => {
//           if (
//             before.count > 25 &&
//             // before.count < 40 &&
//             !mesquinha.includes(before.word)
//           ) {
//             catalog.push(before.word + ' ' + word)
//           }
//         })
//         beforeAndAfter.after.slice(0, 3).forEach(after => {
//           if (
//             after.count > 25 &&
//             // after.count < 40 &&
//             !mesquinha.includes(after.word)
//           ) {
//             catalog.push(word + ' ' + after.word)
//           }
//         })
//       }
//     })
//   })
//   // unique catalog
//   const uniqueCatalog = catalog.filter((word, i) => {
//     return catalog.indexOf(word) === i
//   })
//   return uniqueCatalog
// }

// const catalogação = catalogar()
// //save json
// const fs = require('fs')
// fs.writeFileSync(
//   pathJoin(__dirname, './catalog.json'),
//   JSON.stringify(catalogação, null, 2)
// )
// function createText(startWord, len) {
//   //findBeforeAndAfterPercent
//   // loop on len
//   const text = [startWord]

//   for (let i = 0; i < len; i++) {
//     const { after } = findBeforeAndAfterPercent(text.slice(-1)[0], allText)
//     const beforeWords = after.map(v => v.word)
//     const random = Math.floor(Math.random() * 5)
//     const selectedWord = beforeWords
//       .slice(random)
//       .find(w => !text.slice(-20).includes(w))
//     if (!selectedWord) break
//     text.push(selectedWord)
//   }
//   return text.join(' ')
// }

// console.log(createText('i', 20))
