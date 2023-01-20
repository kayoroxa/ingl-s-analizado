const fs = require('fs')
const joinPath = require('path').join

const txt = fs.readFileSync(
  joinPath(__dirname, '../890k sentences in english.txt'),
  { encoding: 'utf-8' }
)
let allWords = require('../words most used.json').slice(0, 40)

const allSentences = txt.split('\r\n')

function getAll(quero) {
  if (quero) allWords.push(quero)

  const result = allSentences.filter(sentence => {
    const words = sentence.toLowerCase().match(/[a-zA-Z][’'a-zA-Z]*/gi)
    if (!words) return false
    const isWool = words.every(w => allWords.includes(w.toLowerCase()))

    if (!quero) return isWool
    const is = words.includes(quero)

    return isWool && is
  })

  // console.log(result.join('\n'))

  return result
}

const query = `
happened
called
corrected
wanted
saved
started
scared
used
tried
worked
supposed
asked
ruined
changed
missed
played
needed
loved
fired
tired
named
liked
stopped
learned
looked
finished
worried
talked
hundred
interested
moved
closed
`

// const s = getAll().filter(f => f.split(' ').length > 5)
// console.log(s.join('\n'))

// const allAll = query
//   .split('\n')
//   .filter(Boolean)
//   .map((q, i) => {
//     console.clear()
//     console.log(i, query.split('\n').filter(Boolean).length)
//     return getAll(q)
//   })

// fs.writeFileSync(__dirname + '/result-ed.json', JSON.stringify(allAll, null, 2))
