let div = document.getElementsByClassName('img-wrapper')

let timer
let slideIndex = 1

let deviceWidth = document.body.clientWidth

showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('slider__item')
  let dots = document.getElementsByClassName('slider-dots__item')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'

  if (deviceWidth <= 1024) {
    slides[slideIndex - 1].style.display = 'flex'
  }

  // clearTimeout(timer)
  // timer = setTimeout(() => plusSlides(1), 3000)
}
