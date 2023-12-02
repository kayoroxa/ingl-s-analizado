const getAllSentences = require('../utils/getAllSentences')
const SaveConst = require('../utils/saveConst')
const wordsMostCommon = require('../words-most-used-sentences.json').slice(
  0,
  5000
)
const { v } = SaveConst(__dirname)

function getData() {
  let text1 = getAllSentences({
    db: 'sentences',
    // joinText: true,
  })
    .filter(v => {
      const words = v.match(/[a-zA-Z][’'a-zA-Z]*/gi)

      const bad = words?.some(w => !wordsMostCommon.includes(w.toLowerCase()))
      return !bad
    })
    .join(' ')

  // const text2 = getAllSentences({
  //   db: 'friends',
  //   // joinText: true,
  // })
  //   .filter(v => {
  //     const words = v.match(/[a-zA-Z][’'a-zA-Z]*/gi)
  //     if (!words) return false
  //     const bad = words.some(w => !wordsMostCommon.includes(w.toLowerCase()))
  //     return !bad
  //   })
  //   .join(' ')

  const text = text1 //+ ' ' + text2

  const allWords = text.match(/[a-zA-Z][’'a-zA-Z]*|\.|\?|!/gi)

  return allWords
}

function createMarkovModel(order) {
  if (typeof order !== 'number') {
    console.error('Parâmetros inválidos para criar o modelo de Markov.')
    return null
  }
  const data = getData()

  const markovModel = {}

  for (let i = 0; i < data.length - order; i++) {
    const ngram = data.slice(i, i + order).join(' ')
    const nextWord = data[i + order]

    if (!markovModel[ngram]) {
      markovModel[ngram] = {}
    }

    if (!markovModel[ngram][nextWord]) {
      markovModel[ngram][nextWord] = 0
    }

    markovModel[ngram][nextWord]++
  }

  // Normaliza as probabilidades para cada n-grama
  for (const ngram in markovModel) {
    const totalOccurrences = Object.values(markovModel[ngram]).reduce(
      (acc, count) => acc + count,
      0
    )
    for (const nextWord in markovModel[ngram]) {
      markovModel[ngram][nextWord] /= totalOccurrences
    }
  }

  return markovModel
}

function generateMarkovText(model, order, length) {
  if (!model || typeof order !== 'number' || typeof length !== 'number') {
    console.error(
      'Parâmetros inválidos para gerar texto com base no modelo de Markov.'
    )
    return ''
  }

  let currentNgram = Object.keys(model)[0]
  let generatedText = currentNgram

  for (let i = 0; i < length; i++) {
    const nextWordOptions = model[currentNgram]
    if (!nextWordOptions || Object.keys(nextWordOptions).length === 0) {
      break
    }

    const nextWordProbabilities = nextWordOptions
    const randomNumber = Math.random()
    let cumulativeProbability = 0

    for (const nextWord in nextWordProbabilities) {
      cumulativeProbability += nextWordProbabilities[nextWord]

      if (randomNumber <= cumulativeProbability) {
        generatedText += ' ' + nextWord
        currentNgram = `${currentNgram
          .split(' ')
          .slice(1)
          .join(' ')} ${nextWord}`
        break
      }
    }
  }

  return generatedText
}

function fillGapInPhrase(model, order, incompletePhrase) {
  if (
    !model ||
    typeof order !== 'number' ||
    typeof incompletePhrase !== 'string'
  ) {
    console.error('Parâmetros inválidos para preencher a lacuna na frase.')
    return ''
  }

  const words = incompletePhrase.split(' ')
  const prefix = words.slice(0, order).join(' ')

  if (!model[prefix]) {
    console.error('Prefixo não encontrado no modelo de Markov.')
    return 'Não é possível preencher a lacuna. Prefixo não encontrado no modelo.'
  }

  let currentNgram = prefix
  let generatedText = currentNgram

  for (let i = 0; i < model[prefix].length; i++) {
    const nextWord = Object.keys(model[prefix])[i]
    generatedText += ' ' + nextWord
  }

  return generatedText
}

const back = 4
const result = v('model-w4-s', () => createMarkovModel(back))

const mytext = generateMarkovText(result, back, 500).replace(
  /\s([?!.])\s/g,
  '$1\n'
)
console.log(mytext)
