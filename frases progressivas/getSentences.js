const getAllSentences = require('../utils/getAllSentences')
const saveProgress = require('../utils/saveProgress')

const func = () =>
  getAllSentences({
    topUsed: 1000,
    // topCogite: 300,
    minLength: 20,
    maxLength: 25,
  })

saveProgress(func, './sentences_t-1000_c-0_mi-20_ma-25.json')
