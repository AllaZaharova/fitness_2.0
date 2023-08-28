const swiperInit = new Swiper('.trainer-swiper', {
  direction: 'horizontal',
  slidePerView: 4,
  spaseBetween: 40,
  freeMode: true,

  navigation: {
    nextEl: '.trainer_button_next',
    prevEl: '.trainer_button_prev',
  },

  breakpoints: {
    1199: {
      slidePerView: 2,
      spaseBetween: 30,
    },

    767: {
      slidePerView: 1,
      spaseBetween: 20,
    },
  },
});

export {swiperInit};

