const mySwiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
