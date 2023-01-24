let srt = []
const videoElem = document.querySelector('video')

function next(text) {
  const currentTime = videoElem.currentTime
  if (srt[srt.length - 1]?.[0] === text) return
  console.log([text, currentTime])
  srt.push([text, currentTime])
  prevText = text
}

const captionElem = document.querySelector('#caption-window-1')

captionElem.addEventListener('DOMSubtreeModified', () => {
  const elements = document.querySelectorAll('.ytp-caption-segment')

  if (!elements) return
  const lastElement = elements[elements.length - 1]
  const lastWord = lastElement.lastChild.textContent.trim()
  if (!lastWord) return
  next(lastWord)
})
// videoElem.addEventListener('timeupdate', () => {
//   const elements = document.querySelectorAll('.ytp-caption-segment')

//   if (!elements) return
//   const lastElement = elements[elements.length - 1]
//   const lastWord = lastElement.lastChild.textContent.trim()
//   if (!lastWord) return
//   next(lastWord)
// })
