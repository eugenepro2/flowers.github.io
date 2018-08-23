import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import datapicker from 'air-datepicker';
import Swiper from 'swiper';


//maskedinput
$('.phone').mask('+7 (999) 999-9999');




$('.intro__block__radio label').each(function() {
  if($(this).hasClass('active')) {
    minMax($(this));
  }
});

//min - max
//min - max
$('.min').on('click', function() {
  minMax($(this));
});
$('.max').on('click', function() {
  minMax($(this));
});
 
function minMax(curr) {
  let sum = curr.attr('data-sum');
  let total = curr.attr('data-total');
  let slider = curr.attr('data-slider');
  $('.sum').text(sum + '₽');
  $('.sum-month').text(total + '₽/месяц');
  $('.swiper-container').fadeOut();
  setTimeout(function() {
    $(slider).fadeIn();
  }, 400);
}



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



$('.form .form__checkbox input').on('change', function() {
  let label = $(this).closest('.form__checkbox').find('label');
  if($(this).is(':checked')) {
    label.addClass('active');
  } else {
    label.removeClass('active');
  }
});
