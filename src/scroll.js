document.addEventListener('DOMContentLoaded', () =>{

  const pixelTag = document.querySelector('div.pixel')
  const bodyTag = document.querySelector('body')
  const progressTag = document.querySelector('div.progress')

  document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    pixelTag.innerHTML = pixels
    progressBar(pixels)
  })

  function progressBar(pixels) {
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollDistance = pageHeight - window.innerHeight
    const percentage = pixels/totalScrollDistance * 100
    progressTag.style.width = `${percentage}%`
  }

})