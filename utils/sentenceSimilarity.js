function compare(sentence1, sentence2) {
  sentence1 = typeof sentence1 === 'string' ? sentence1 : sentence1[0]

  const words1 = sentence1
    .match(/[a-zA-Z][’'a-zA-Z]*/gi)
    .map(v => v.toLowerCase())

  const wordsCompare = sentence2
    .match(/[a-zA-Z][’'a-zA-Z]*/gi)
    .map(v => v.toLowerCase())

  // const score = words1.filter(w1 => wordsCompare.includes(w1)).length
  // const similarityScore =
  //   (score / words1.length) * (score / wordsCompare.length)

  const smallerLength = Math.min(words1.length, wordsCompare.length)
  const score = words1.filter(w1 => wordsCompare.includes(w1)).length
  const similarityScore = score / smallerLength

  return {
    sentence: sentence2,
    score: similarityScore,
  }
}

function sentenceSimilarity(sentence1, sentencesCompare) {
  if (typeof sentencesCompare === 'string') {
    return compare(sentence1, sentencesCompare)
  }

  return sentencesCompare
    .map(sentenceCompare => compare(sentence1, sentenceCompare))
    .sort((a, b) => b.score - a.score)
}

module.exports = sentenceSimilarity

console.log(compare('you like helping people', 'I love helping people'))
