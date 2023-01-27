const fs = require('fs')
const joinPath = require('path').join

async function saveProgress(callBackFunc, saveDir) {
  const pathCall = module.parent?.path
  const exist = fs.existsSync(joinPath(pathCall, saveDir))
  if (!exist) {
    const result = await callBackFunc()
    fs.writeFileSync(
      joinPath(pathCall, saveDir),
      JSON.stringify(result, null, 2)
    )
    return result
  } else {
    const path = joinPath(pathCall, saveDir)
    if (saveDir.endsWith('.json')) {
      return require(path)
    } else {
      const content = fs.readFileSync(path, {
        encoding: 'utf-8',
      })
      return content
    }
  }
}

module.exports = saveProgress
