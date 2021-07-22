document.addEventListener('DOMContentLoaded', () =>{

  const pixelTag = document.querySelector('div.pixel')

  document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    pixelTag.innerHTML = pixels
  })

})