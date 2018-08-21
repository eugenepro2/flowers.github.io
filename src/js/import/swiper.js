import Swiper from 'swiper';

//home-shares
var swiper = new Swiper('.swiper-intro', {
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-intro-next',
    prevEl: '.swiper-intro-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true
    }
  }
});

//home-shares
var swiper1 = new Swiper('.swiper-intro-max', {
  slidesPerView: 1,
  spaceBetween: 0,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-intro-max-next',
    prevEl: '.swiper-intro-max-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true
    }
  }
});
