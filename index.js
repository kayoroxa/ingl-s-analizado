const folderAnalyse = require('./utils/folderAnalyse')
const pathJoin = require('path').join
const textSanitizer = require('./utils/textSanitizer')
const getPatterns = require('./js/getPatterns')
const fs = require('fs')

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

// console.log(allText)

const sentence = "i'm going to have"
const patterns = getPatterns(sentence, allText)
console.log(patterns)

// const allPatterns = allText
//   .filter(text => text.split(' ').length < 8 && text.split(' ').length > 5)
//   .slice(0, 50)
//   .map((text, i) => {
//     console.log(`${i + 1}/${1000}`)
//     const patterns = getPatterns(text, allText)
//     return patterns
//   })
//   .filter(patterns => patterns.length > 0)

// // allPatterns sort by length
// const sortAllPatterns = allPatterns
//   .sort((a, b) => b.length - a.length)
//   .filter(patterns => patterns.length > 7)
//   .map(v => v.map(v => v.trim()))

// const json = JSON.stringify(sortAllPatterns, null, 2)
// fs.writeFileSync(pathJoin(__dirname, './patterns2.json'), json)
