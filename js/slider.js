var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
