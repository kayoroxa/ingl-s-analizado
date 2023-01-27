let wordsDict = {}

function findWords(ids) {
  for (let id of ids) {
    const jsonTime = require(`./srt/${id}.json`)
    const transformYoutubeJSON = require('./teste2')

    let srt = transformYoutubeJSON(jsonTime)

    srt.forEach((line, index) => {
      let [word, time] = line
      word = word.toLowerCase()

      const isWordNumber = /^\d+$/.test(word)

      const nextTime = srt[index + 1]?.[1]

      if (isWordNumber || !nextTime) return //skip

      const duration = nextTime - time

      if (!wordsDict[word]) wordsDict[word] = [duration]
      wordsDict[word].push(duration)
    })
  }

  const wordsEntriesAverage = Object.entries(wordsDict).map(
    ([key, durations]) => {
      if (durations.length <= 5) return [key, 99]

      durations = durations.filter(number => !isNaN(number))

      const media =
        durations.reduce((prev, cur) => prev + cur, 0) / durations.length

      return [key, media]
    }
  )

  return wordsEntriesAverage
}

const wordsEntriesAverage = findWords([
  'vGc4mg5pul4',
  'tAQOhsaCz8s',
  'kh5dN72GTQ8',
  '6T7pUEZfgdI',
])

const sortWordsEntriesAverageDuration = wordsEntriesAverage.sort((a, b) => {
  return a[1] - b[1]
})

let _commonWords = require('../words most used.json').slice(0, 1600)
let cogite = require('../cogite_words/cogite_words.json')
  .map(v => v[0])
  .slice(0, 300)

let utilsWords = [..._commonWords, ...cogite]

const sortedUsable = sortWordsEntriesAverageDuration.filter(([word]) =>
  utilsWords.includes(word.toLowerCase())
)

const ss = sortedUsable.map(line => [
  line[0],
  Number(String(line[1]).slice(0, 5)),
])

console.log(ss)

const fs = require('fs')

fs.writeFileSync(
  __dirname + '/wordsFast.json',
  JSON.stringify(
    ss.map(([word]) => word),
    null,
    2
  )
)

console.log(sortedUsable.filter(([word]) => word === 'and'))
