function getPatterns(sentence, allTexts) {
  const wordInSentence = sentence.split(' ')
  const variants = generateVariants(wordInSentence)

  const finders = []

  const asd = allTexts.filter(text =>
    variants.some(v => {
      const match = text.match(new RegExp(v, 'i'))
      if (match && !finders.includes(match[0])) {
        // console.log(match[0])
        finders.push(match[0])
        return true
      }
      return false
    })
  )
  // console.log(finders)
  if (asd && asd.length > 0) {
    return [sentence, ...asd]
  }
  return []
}

module.exports = getPatterns

function generateVariants(words) {
  const gabarito = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],

    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],

    [0, 2],
    [0, 3],
    [0, 4],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 4],
    [2, 5],
    [2, 6],
  ]
  // const normal = words.map((_, i) => {
  //   const wordsCopy = [...words]
  //   wordsCopy[i] = '.*'
  //   return wordsCopy.join(' ')
  //   // return '[\\s|^]' + wordsCopy.join(' ') + '[\\s|$]'
  // })
  const advanced = gabarito
    .map(g => {
      const wordsCopy = [...words]
      let retornar = true
      g.forEach(i => {
        if (wordsCopy.length <= i) retornar = false
        wordsCopy[i] = '.*'
      })
      if (!retornar) return
      return wordsCopy.join(' ').replace(/\.\* \.\*/g, '.*')
    })
    .filter(Boolean)

  return [...advanced]
}

console.log(generateVariants(['you', 'are', 'getting', 'weaker']))
