function tokenizer(arr) {
  const uniq = [...new Set(arr)]

  const entries = uniq.map((uniqItem, index) => [uniqItem, index])

  return Object.fromEntries(entries)
}

module.exports = tokenizer
