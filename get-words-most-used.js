const fs = require('fs')
const pathJoin = require('path').join

const folderPath = `C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/subtitles/friends subtitles`
// const folderPath = `E:/REPOS/primo-bilingue/GERADORES/getYoutubeSubtitles/files`

const allFilesNames = fs.readdirSync(folderPath)

const allFilesContents = allFilesNames.map(fileName => {
  return fs.readFileSync(pathJoin(folderPath, fileName), 'utf8')
})

const allText = allFilesContents.join(' ').toLowerCase()

const allWords = allText.match(new RegExp(`[’'a-zA-Z]+`, 'gi'))
// const uniqueWords = [...new Set(allWords)]

const wordsFrequencyScore = allWords.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1
  return acc
}, {})

const wordsMostUsed = Object.entries(wordsFrequencyScore)
  .sort((a, b) => {
    return b[1] - a[1]
  })
  .map(v => v[0])

fs.writeFileSync(
  pathJoin(__dirname, 'friends-words-most-used.json'),
  JSON.stringify(wordsMostUsed, null, 2)
)
// console.log(wordsMostUsed.filter(([w]) => w === 'party'))
