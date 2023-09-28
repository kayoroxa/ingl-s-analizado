const query = 'have you ever went'

//read all txt files in the directory
const fs = require('fs')
const path = require('path')
const files = fs.readdirSync(
  path.join('C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/friends subtitles')
)

const allFiles = files.map(file => {
  const text = fs.readFileSync(
    path.join(
      'C:/Users/Caio/OneDrive/SYNC - INGLÊS FLIX/friends subtitles',
      file
    ),
    { encoding: 'utf-8' }
  )

  return text
})

const results = allFiles
  .join(' ')
  .match(new RegExp('\\b' + query + '\\b', 'gi'))

console.log(results)
console.log(results.length)
