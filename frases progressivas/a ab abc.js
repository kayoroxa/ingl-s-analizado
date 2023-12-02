const getAllSentences = require('../utils/getAllSentences')
const saveProgress = require('../utils/saveProgress')
const sentenceSimilarity = require('../utils/sentenceSimilarity')

function getMediaScore(sentence, similarSentences) {
  const all = similarSentences.map(similar => {
    let { score } = sentenceSimilarity(sentence, similar)
    return score
  })

  return all.reduce((a, b) => a + b, 0) / all.length
}

;`
I just want you to think about it.
Do you want him to know about it?
You don't know how to do it, do you?
I don't want to know about it.
I don't want to think about it.
What do you want to do about it?
What do you want to do with it?
Do you want to do it right now?
I don't know what you want to do.
You don't know what it is, do you?
I don't know what you want me to do.
You know what I want, don't you?
What do you really want to do?
What do you want to do that for?
Do you really want to do that?
Do you really want me to do that?
What do you want to know that for?
What is it that you want me to do?
What is it that you want me to do now?
Do you want me to go with you?
Do you want me to come with you?
Do you want me to come in with you?
Do you really want to do this?
Do you want us to go with you?
What do you want me to do now?
Do you think I want to do this?
I think they want you to do it.
I want you to take me with you.
I want you to think about this.
You know what I want you to do.
Do you want to know what I see?
I don't know what I want to do.
What do you all want to do now?
I want you to go to the doctor.
What do you want to do in the future?
`

function getSentences() {
  return getAllSentences({
    topUsed: 1000,
    topCogite: 300,
    minLength: 20,
    maxLength: 40,
  })
}

async function app() {
  let frases = await saveProgress(
    getSentences,
    './sentences_t-1000_c-300_mi-20_ma-40.json'
  )

  const gotFrases = []

  console.log(frases.length)

  let currentIndex = 50

  // eslint-disable-next-line no-constant-condition
  while (true) {
    let currentSentence = frases[currentIndex]
    gotFrases.push(currentSentence)
    frases.splice(currentIndex, 1)

    const nextIndex = frases.findIndex(compereSentence => {
      if (!compereSentence) return false

      const score = getMediaScore(compereSentence, [
        ...gotFrases.slice(-60).slice(0, 4),
        ...gotFrases.slice(-30).slice(0, 5),
        ...gotFrases.slice(-8),
      ])

      if (score >= 0.6 && score < 0.8) {
        return true
      }
    })

    if (nextIndex < 0) return
    console.log(frases[nextIndex])

    currentIndex = nextIndex
  }
}

app()

// const script = [
//   { likelyMin: 0.4, likelyMax: 0.6, lengthMax: 20 },
//   { likelyMin: 0.4, likelyMax: 0.6, lengthMax: 20 },
//   { likelyMin: 0.4, likelyMax: 0.6, lengthMax: 22 },
//   { likelyMin: 0.3, likelyMax: 0.5, lengthMax: 24 },
//   { likelyMin: 0.3, likelyMax: 0.5, lengthMax: 24 },
// ]
