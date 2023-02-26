const sentenceSimilarity = require('./sentenceSimilarity')

const frases = ['a a', 'd d c', 'a a s', 'b b c', 'b b d']

function sortBySimilarity(frases) {
  const primeiraFrase = frases[0]
  const comparações = sentenceSimilarity(primeiraFrase, frases)
  comparações.sort((a, b) => b.score - a.score)

  const frasesOrdenadas = []

  comparações.forEach(comparação => {
    frasesOrdenadas.push(comparação.sentence)
  })

  return frasesOrdenadas
}

// console.log(sortBySimilarity(frases))

module.exports = sortBySimilarity
