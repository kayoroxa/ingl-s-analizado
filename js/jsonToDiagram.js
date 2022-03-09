Array.prototype.setLimitWordUsed = function (limit) {
  const palavras = {}
  const filter = this.filter(words => {
    let yes = words.every(word => {
      if (palavras[word]) {
        palavras[word]++
      } else {
        palavras[word] = 1
      }
      if (palavras[word] <= limit) {
        return true
      }
    })
    return yes
  })
  return filter
}

const diagramMulti = require('../diagramMulti_2Word.json')
// const allWords2 = require('../allWords2.json')
//   .slice(0, 10)
//   .map(({ word }) => word)

// const values = [
//   // ...diagramMulti[150],
//   // ...diagramMulti[200],
//   // ...diagramMulti[250],
//   // ...diagramMulti[350],
//   ...diagramMulti[400],
//   ...diagramMulti[450],
//   ...diagramMulti[500],
// ]
const values = Object.values(diagramMulti)
  .slice(-13)
  .reduce((acc, cur) => {
    return [...acc, ...cur]
  }, [])
  .map(v => v.split('|'))
// .filter(v => v.includes('you'))
// .setLimitWordUsed(5)

const uniques = [...new Set(values.reduce((acc, cur) => [...acc, ...cur], []))]

const array1 = uniques.map(word => ({ key: word, color: 'orange' }))
const array2 = values.map(seq => ({ from: seq[0], to: seq[1] }))

// console.log(array2)

//write json
const fs = require('fs')
const diagram = {
  nodes: array1,
  links: array2,
}
fs.writeFileSync(
  'F:/Downloads/teste/FLOWCHART/diagramData_2words.js',
  `const diagram = ${JSON.stringify(diagram, null, 2)}`
)
//[
//   { key: 'Alpha', color: 'lightblue' },
//   { key: 'Beta', color: 'orange' },
//   { key: 'Gamma', color: 'lightgreen' },
//   { key: 'Delta', color: 'pink' },
// ],
// [
//   { from: 'Alpha', to: 'Beta' },
//   { from: 'Alpha', to: 'Gamma' },
//   { from: 'Beta', to: 'Beta' },
//   { from: 'Gamma', to: 'Delta' },
//   { from: 'Delta', to: 'Alpha' },
// ]
