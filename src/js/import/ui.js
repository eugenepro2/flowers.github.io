import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});


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
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  setTimeout(function() {
    if($('.menu-open').attr('rel') === 'modal:open') {
      $('.menu-open').attr('rel', 'modal:close');
    } else {
      $('.menu-open').attr('rel', 'modal:open');
    }
  }, 500);

});

//select
$('select').selectize();



let heightPopUp = $('.call-order').height();

$('.btn').on('click', function() {
  if($(this).attr('href') === '#call-order-2') {
    $('.call-order-2').height(heightPopUp);
  }
});
