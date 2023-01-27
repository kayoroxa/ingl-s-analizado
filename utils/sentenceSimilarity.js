function sentenceSimilarity(sentence1, sentencesCompare) {
  const words1 = sentence1
    .match(/[a-zA-Z][’'a-zA-Z]*/gi)
    .map(v => v.toLowerCase())

  return sentencesCompare.map(sentenceCompare => {
    const wordsCompare = sentenceCompare
      .match(/[a-zA-Z][’'a-zA-Z]*/gi)
      .map(v => v.toLowerCase())

    const score = words1.filter(w1 => wordsCompare.includes(w1)).length

    return {
      sentence: sentenceCompare,
      score: (score / words1.length) * (score / wordsCompare.length),
    }
  })
}

module.exports = sentenceSimilarity
