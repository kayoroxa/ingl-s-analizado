const { srtAnalyse, getWordsInSentence } = require('../utils/srtAnalyse')

const frasesWithBlocks = srtAnalyse('sentences')
  // .slice(0, 6000)
  .map((sentence, i, allSentences) => {
    return getWordsInSentence(sentence)?.join(' ')
  })
  .filter(v => v?.split(' ').length > 2 && v?.split(' ').length < 6)

console.log('finish frasesWithBlocks')
const repetidas = frasesWithBlocks.reduce((a, v, i) => {
  console.log(`${i}/${frasesWithBlocks.length}`)
  return { ...a, [v]: a[v] ? a[v] + 1 : 1 }
}, {})

console.log('finish repetidas')
const repetidasArray = Object.keys(repetidas)
  .map(v => ({
    frase: v,
    repetidas: repetidas[v],
  }))
  .sort((a, b) => b.repetidas - a.repetidas)

// .sort((a, b) => b.len - a.len)
console.log(repetidasArray)
//write file json
const fs = require('fs')
fs.writeFileSync(
  './frases-pequenas.json',
  JSON.stringify(repetidasArray, null, 2)
)
