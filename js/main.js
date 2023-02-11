const swiper = new Swiper('.headerSwiper', {
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
  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1240: {
      slidesPerView: 4,
    },
    1650: {
      slidesPerView: 4,
    },
  },
});

document.querySelector('#menu__toggle').addEventListener('change', function (e) {
  document.body.style.overflow = e.target.checked === true ? 'hidden' : '';
});