const cogiteWords = require('./cogite_words.json')

function searchSufix({ sufixEn, sufixPt }) {
  const filtrado = cogiteWords.filter(
    en_pt =>
      en_pt[0].endsWith(sufixEn.toLowerCase()) &&
      en_pt[1].endsWith(sufixPt.toLowerCase())
  )
  const formatado = filtrado.map(
    en_pt => `${en_pt[1].toLowerCase()} = ${en_pt[0].toLowerCase()}\n`
  )
  console.log(formatado.join('\n'))
  return formatado
}

const str = `
ÇÃO → TION
`
// .split('\n')
// .map(w => w.replace('-', ''))
// .filter(w => w.length > 0)[3]

// console.log(str)
// ENCIA / ANCIA → ENCE / ANCE
searchSufix({
  // sufixEn: str.trim().split(' → ')[1],
  sufixPt: 'ÇÃO',
  sufixEn: 'TION',
  // sufixPt: str.trim().split(' → ')[0],
})
