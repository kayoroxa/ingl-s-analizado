const fs = require('fs')
const joinPath = require('path').join

function SaveConst(dirName) {
  if (!dirName) throw new Error('dirName is required')

  function getExistingFile(path) {
    const file = fs.readFileSync(path, { encoding: 'utf-8' })
    return JSON.parse(file)
  }

  return {
    v: (name, func) => {
      const path = joinPath(dirName, `${name}.data`)

      const fileExists = fs.existsSync(path)
      if (fileExists) {
        console.log('exist..')
        const result = getExistingFile(path)
        console.log('PEGOU O JSON..')
        return result
      } else {
        const result = func()
        fs.writeFileSync(path, JSON.stringify(result, null, 2))

        return result
      }
    },
  }
}

module.exports = SaveConst
