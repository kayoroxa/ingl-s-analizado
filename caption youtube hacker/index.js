const id = '6T7pUEZfgdI'
// const id = 'kh5dN72GTQ8'

const jsonTime = require(`./srt/${id}.json`)
const transformYoutubeJSON = require('./teste2')

let srt = transformYoutubeJSON(jsonTime)

function getDict() {
  const srtTime = srt.map((line, index) => {
    if (index === 0)
      return {
        text: line[0],
        videoTime: line[1],
        difference: 0,
      }
    const prev = srt[index - 1]

    return {
      text: line[0],
      videoTime: line[1],
      difference: line[1] - prev[1],
    }
  })

  return srtTime
}

const dictTime = getDict()

const groupOfSentences = dictTime.reduce((prev, cur, i) => {
  if (i === 0)
    return [
      {
        text: cur.text,
        startTime: cur.videoTime,
        endTime: cur.videoTime + 0.25,
      },
    ]
  if (cur.difference < 0.2) {
    prev[prev.length - 1].text += ' ' + cur.text
    prev[prev.length - 1].endTime = cur.videoTime + 0.25

    return prev
  } else {
    prev.push({
      text: cur.text,
      startTime: cur.videoTime,
      endTime: cur.videoTime + 0.25,
    })
    return prev
  }
}, [])

const result = groupOfSentences
  .filter(x => x.text.split(' ').length >= 9)
  .map(v => ({
    ...v,
    youtubeLink: `https://youtu.be/${id}?t=${Math.round(v.startTime) - 1}`,
    durationSec: v.endTime - v.startTime,
  }))
  .sort((a, b) => a.durationSec - b.durationSec)

console.log(result)

// const fs = require('fs')

// fs.writeFileSync(
//   __dirname + '/result/result.js',
//   'var result = ' + JSON.stringify(result, null, 2)
// )
