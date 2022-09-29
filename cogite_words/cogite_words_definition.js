const axios = require('axios')
const cogite_words = require('./cogite_words.json')
const fs = require('fs')
const joinPath = require('path').join

async function getDefinition(word) {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    )

    const notFound = response.data[0].title === 'No Definitions Found'

    if (!notFound) {
      return response.data[0].meanings.map(v => v.partOfSpeech)
    }
    return false
  } catch (error) {
    return false
  }
}

async function main() {
  const dict = {}

  for (let word_en_pt of cogite_words) {
    const word_en = word_en_pt[0]

    const definition = await getDefinition(word_en)

    console.log(`${word_en} - ${definition}`)

    if (!definition) {
      dict['not_found'] = dict['not_found'] || []
      dict['not_found'].push(word_en_pt)
      continue
    }

    definition.forEach(d => {
      if (!dict[d]) {
        dict[d] = []
      }
      dict[d].push(word_en_pt)
    })

    fs.writeFileSync(
      joinPath(__dirname, './cogite_words_definition.json'),
      JSON.stringify(dict, null, 2)
    )
  }
}

main()
