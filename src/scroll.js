document.addEventListener('DOMContentLoaded', () =>{

  const pixelTag = document.querySelector('div.pixel')
  const bodyTag = document.querySelector('body')
  const progressTag = document.querySelector('div.progress')

  const sections = document.querySelectorAll('section')
  const clientTag = document.querySelector('div.client')
  const pageTag = document.querySelector('div.page')

  document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    pixelTag.innerHTML = pixels
    progressBar(pixels)
    clientAndPageUpdate(pixels)
  })

  function progressBar(pixels) {
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalScrollDistance = pageHeight - window.innerHeight
    const percentage = pixels/totalScrollDistance * 100
    progressTag.style.width = `${percentage}%`
  }

  function clientAndPageUpdate(pixels) {
    sections.forEach( s => {
      if (s.offsetTop - 100 <= pixels) {
        clientTag.innerHTML = s.getAttribute('data-client')
        pageTag.innerHTML = s.getAttribute('data-page')
      }
    })
  }

})