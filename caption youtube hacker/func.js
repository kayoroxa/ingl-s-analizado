function appGetSrt(id) {
  // const id = 'kh5dN72GTQ8'

  const jsonTime = require(`./srt/${id}.json`)
  const transformYoutubeJSON = require('./teste2')

  let srt = transformYoutubeJSON(jsonTime)
  console.log(srt)
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

  function zeroFix(number) {
    return ('00' + number).slice(-2)
  }

  function msToHMS(seconds) {
    // 1- Convert to seconds:
    // let seconds = ms / 1000
    // 2- Extract hours:
    const hours = parseInt(seconds / 3600) // 3,600 seconds in 1 hour
    seconds = seconds % 3600 // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60) // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = Math.round(seconds % 60)
    if (hours === 0) return zeroFix(minutes) + ':' + zeroFix(seconds)
    return zeroFix(hours) + ':' + zeroFix(minutes) + ':' + zeroFix(seconds)
  }

  const result = groupOfSentences
    .filter(x => x.text.split(' ').length >= 8)
    .map(v => ({
      ...v,
      youtubeLink: `https://youtu.be/${id}?t=${Math.round(v.startTime) - 1}`,
      durationSec: v.endTime - v.startTime,
      time: msToHMS(v.startTime - 1),
    }))
    .sort((a, b) => a.durationSec - b.durationSec)

  // console.log(result.map(x => `${x.time} - ${x.text}`).join('\n'))

  const fs = require('fs')

  fs.writeFileSync(
    __dirname + '/result/result.js',
    'var result = ' + JSON.stringify(result, null, 2) + `\nvar id = '${id}'`
  )
}

module.exports = appGetSrt
