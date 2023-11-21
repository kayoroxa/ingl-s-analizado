const query = `
have you done
have you ever
which .* would
// for something
// How long do
// plan
// // what about
// // are you sure
// // how was
// // have you ever
// // do i have to
// // do you like
// // do you have
// // Do you think
// Why don't
// How long does
// Where is
// May I
// How do you
// what do you
// when do you
// Is there
// Where are
// How did
// What does
// Could you
// are you \\w+ing
// Where have
// Which is your
// How long have
// how many times
// do you want me to
// did you wanna
// Do you need
// do you \\w+ me
// Would you like
// What if
// Who wants some
// Who wants
// How did
// What do you usually
// Why don't you
// What is your
// How many
// Why do you want

// do you have any
// how much time
// how much
// how many times
`
  .split('\n')
  .filter(Boolean)

//read all txt files in the directory
const parser = require('subtitles-parser')
const fs = require('fs')
const path = require('path')

const folderPath =
  'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/subtitles/friends subtitles'
// 'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/subtitles/youtube subtitles'

const files = fs.readdirSync(folderPath)

const allFiles = files.map(file => {
  const text = fs.readFileSync(path.join(folderPath, file), {
    encoding: 'utf-8',
  })

  return text
})

function searchBySentence() {
  let allSentences = allFiles
    .map(file => parser.fromSrt(file, true))
    .map(srt => srt.map(s => s.text).join(' '))
    .filter(s => s.length > 0)
    .reduce((prev, cur) => {
      cur = cur
        .replace(/[\n-]/g, ' ')
        .replace(/\w+\d+:\d+/gi, '')
        .replace(/\s{2,}/g, ' ')
      let sentences = cur.split(/(?<=[.!?])/g)
      sentences = sentences.map(s => s.trim()).filter(s => s.length > 4)
      return prev.concat(sentences)
    }, [])

  let result = query
    .map(myQuery => {
      const results = allSentences.filter(s => {
        return s.match(new RegExp('\\b' + myQuery + '\\b', 'gi'))
      })
      // .match(new RegExp('\\b' + '[^.,!]*' + myQuery + '.*\\.', 'gi'))

      return [myQuery, results?.length || 0]
    })
    .sort((a, b) => b[1] - a[1])

  return result
}

function searchByAllText() {
  const allFiles = files.map(file => {
    const text = fs.readFileSync(path.join(folderPath, file), {
      encoding: 'utf-8',
    })

    return text
  })

  let result = query
    .map(myQuery => {
      const results = allFiles
        .join(' ')
        .match(new RegExp('\\b' + myQuery + '\\b', 'gi'))

      return [myQuery, results?.length || 0]
    })
    .sort((a, b) => b[1] - a[1])

  return result
}

const result = searchByAllText()

console.clear()
console.log(result.filter(s => s[1] > 10).slice(0, 30))
