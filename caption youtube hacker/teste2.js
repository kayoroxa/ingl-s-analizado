function transformYoutubeJSON(json) {
  if (json?.events) json = json.events

  var transformed = []
  // const newJson = json.filter(segment => segment?.segs)
  json.forEach(function (segment) {
    segment?.segs?.forEach(function (word, i) {
      if (word.utf8.trim().length === 0) return
      var currentStart = segment.tStartMs
      if (i !== 0) currentStart += word.tOffsetMs

      transformed.push([word.utf8.trim(), currentStart / 1000])
    })
  })
  return transformed
}

module.exports = transformYoutubeJSON
