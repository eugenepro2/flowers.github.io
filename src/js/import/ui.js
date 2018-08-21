import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import datapicker from 'air-datepicker';
import Swiper from 'swiper';


//maskedinput
$('.phone').mask('+7 (999) 999-9999');




//home-shares
var swiper = new Swiper('.swiper-intro', {
  slidesPerView: 1,
  spaceBetween: 0,
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






//min - max
$('.min').on('click', function(event) {
  let min = $(this).attr('data-sum');
  $('.sum').text(min + '₽');
  $('.sum-month').text((min * 4) + '₽/месяц');
  $('.swiper-intro-max').fadeOut();
  setTimeout(function() {
    $('.swiper-intro').fadeIn();
  }, 400);
  swiper.update();
});
$('.max').on('click', function(event) {
  let max = $(this).attr('data-sum');
  $('.sum').text(max + '₽');
  $('.sum-month').text((max * 4) + '₽/месяц');
  $('.swiper-intro').fadeOut();
  setTimeout(function() {
    $('.swiper-intro-max').fadeIn();
  }, 400);
  swiper1.update();
});



//menu open
$('.menu-open').on('click', function() {
  $('.menu-open').toggleClass('active');
  $('.header').toggleClass('active');
  window.scrollTo(0, 0);
  setTimeout(function() {
    if($('.menu-open').attr('rel') === 'modal:open') {
      $('.menu-open').attr('rel', 'modal:close');
      $('.menu-open').attr('href', '#close-modal');
    } else {
      $('.menu-open').attr('rel', 'modal:open');
      $('.menu-open').attr('href', '#call-order');
      $('body').css({'overflow' : 'visible'});
    }
  }, 500);

});

//select
$('select').selectize();



let heightPopUp = $('.call-order').height();

$('.dispatch').on('click', function() {
  $('.call-order').height(heightPopUp);
  $('.call-order__content').fadeOut();
  $('.call-order').addClass('active');
  $('.call-order__p p').fadeIn();
});

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
  language: 'ru',
  // componentRestrictions: {country: 'ru'}
  componentRestrictions: {}
});



//i

if($(window).width() <= 767) {
  $('.i').on('click', function() {
    $(this).siblings('.details').toggleClass('active');
  });
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
var date = new Date();


$('#datepicker').datepicker({
  minDate: date.addDays(1)
});
