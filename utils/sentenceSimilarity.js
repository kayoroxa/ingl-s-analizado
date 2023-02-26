function compare(sentence1, sentence2) {
  sentence1 = typeof sentence1 === 'string' ? sentence1 : sentence1[0]

  const words1 = sentence1
    .match(/[a-zA-Z][’'a-zA-Z]*/gi)
    .map(v => v.toLowerCase())

  const wordsCompare = sentence2
    .match(/[a-zA-Z][’'a-zA-Z]*/gi)
    .map(v => v.toLowerCase())

  const score = words1.filter(w1 => wordsCompare.includes(w1)).length

  return {
    sentence: sentence2,
    score: (score / words1.length) * (score / wordsCompare.length),
  }
}

function sentenceSimilarity(sentence1, sentencesCompare) {
  if (typeof sentencesCompare === 'string') {
    return compare(sentence1, sentencesCompare)
  }

  return sentencesCompare.map(sentenceCompare =>
    compare(sentence1, sentenceCompare)
  )
}

module.exports = sentenceSimilarity
