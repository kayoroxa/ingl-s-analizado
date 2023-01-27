const result = require('./result-anchor.json')

const resultConsole = result
  .filter(group => group.length > 6)
  .map(group => group.filter(sentence => !sentence.match(/\d/g)).join('\n'))
  .join('\n\n-----------\n')
  .replace(/[.,]/g, '')

console.log(resultConsole)

// I loved writing  = I lov-djwriting
// we loved each other = we lov-di-tchother
// I'd asked her to design = i'dask-ter
