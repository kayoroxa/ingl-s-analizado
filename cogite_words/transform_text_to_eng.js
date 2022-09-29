let text = `
A Heron was walking sedately along the bank of a stream, his eyes on the clear water, and his long neck and pointed bill ready to snap up a likely morsel for his breakfast. The clear water swarmed with fish, but Master Heron was hard to please that morning.

"No small fry for me," he said. "Such scanty fare is not fit for a Heron."

Now a fine young Perch swam near.

"No indeed," said the Heron. "I wouldn't even trouble to open my beak for anything like that!"

As the sun rose, the fish left the shallow water near the shore and swam below into the cool depths toward the middle. The Heron saw no more fish, and very glad was he at last to breakfast on a tiny Snail.
`

const cogite_words = require('./cogite_words.json')

cogite_words.forEach(([en, pt]) => {
  text = text.replace(new RegExp('\\b(' + en + ')\\b', 'ig'), `((${en}))`)
})

console.log(text)
