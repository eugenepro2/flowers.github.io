import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import datapicker from 'air-datepicker';



//min - max
$('.min').on('click', function() {
  let min = $(this).attr('data-sum');
  $('.sum').text(min + '₽');
  $('.sum-month').text((min * 4) + '₽/месяц');
});
$('.max').on('click', function() {
  let max = $(this).attr('data-sum');
  $('.sum').text(max + '₽');
  $('.sum-month').text((max * 4) + '₽/месяц');
});



//menu open
$('.menu-open').on('click', function() {
  console.log('jjl');
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  setTimeout(function() {
    if($('.menu-open').attr('rel') === 'modal:open') {
      $('.menu-open').attr('rel', 'modal:close');
      $('.menu-open').attr('href', '#close-modal');
    } else {
      $('.menu-open').attr('rel', 'modal:open');
      $('.menu-open').attr('href', '#call-order');
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
