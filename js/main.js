const swiper = new Swiper('.headerSwiper', {
  effect: "flip",
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
})

const largeSwiper = new Swiper('.largeSwiper', {
  watchSlidesProgress: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
});