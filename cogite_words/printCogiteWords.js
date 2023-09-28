const cogite = require('./cogite_words.json')

const wordMostUsed = require('../words most used.json')

const cogiteByUsed = cogite.reduce((acc, cur) => {
  const [en] = cur
  const indexUsed = wordMostUsed.findIndex(
    v => v.toLowerCase() === en.toLowerCase()
  )
  if (indexUsed !== -1) {
    acc[en] = indexUsed
  }

  return acc
}, {})

const sort = Object.entries(cogiteByUsed).sort((a, b) => a[1] - b[1])

console.log(
  sort
    .slice(0, 100)
    .map(v => v[0])
    .join('\n')
)
// cogite.forEach(([en, pt]) => {
//   console.log(`${en}`)
// })
