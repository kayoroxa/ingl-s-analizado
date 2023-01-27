const commonWords = [
  'the',
  'be',
  'to',
  'of',
  'and',
  'a',
  'in',
  'that',
  'have',
  'I',
  'it',
  'for',
  'not',
  'on',
  'with',
  'he',
  'as',
  'you',
  'do',
  'at',
  'this',
  'but',
  'his',
  'by',
  'from',
  'they',
  'we',
  'say',
  'her',
  'she',
  'or',
  'an',
  'will',
  'my',
  'one',
  'all',
  'would',
  'there',
  'their',
  'what',
  'so',
  'up',
  'out',
  'if',
  'about',
  'who',
  'get',
  'which',
  'go',
  'me',
]
function checkWords(sentence, additionalWords = '') {
  sentence = sentence.replace(/[^\w\s]/gi, '')
  const re = new RegExp(`\\b${additionalWords}\\b`, 'i')
  if (!re.test(sentence)) return false

  const newSentence = sentence.replace(re, '').replace(/\s{2,}/g, ' ')
  const words = newSentence.split(' ')

  for (const word of words) {
    if (!commonWords.find(c => c === word.toLowerCase())) {
      return false
    }
  }
  return true
}

const sentence1 = 'the cat in the that'
const additionalWords1 = 'cat'
console.log(checkWords(sentence1, additionalWords1)) // true

const sentence2 = 'the cat in the hat'
const additionalWords2 = 'cat'
console.log(!checkWords(sentence2, additionalWords2)) // false

const sentence3 = 'the cat caio that'
const additionalWords3 = 'cat caio'
console.log(checkWords(sentence3, additionalWords3)) // true

const sentence4 = 'the cat caio an the that'
const additionalWords4 = 'cat'
console.log(!checkWords(sentence4, additionalWords4)) // false

const sentence5 = 'the cat caio an the that'
const additionalWords5 = 'caio cat'
console.log(!checkWords(sentence5, additionalWords5)) // false

const sentence7 = 'the cat caio is the that'
const additionalWords7 = 'cat caio'
console.log(!checkWords(sentence7, additionalWords7)) // false

const sentence6 = 'the cat caio and the that'
const additionalWords6 = 'cat caio'
console.log(checkWords(sentence6, additionalWords6)) // true
