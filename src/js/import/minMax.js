import $ from 'jquery';
//min - max
$('.intro__block__radio label').each(function() {
  if($(this).hasClass('active')) {
    minMax($(this));
  }
});

$('.min').on('click', function() {
  minMax($(this));
  if($(window).width() <= 1024) {
    let linkMob = $(this).attr('data-href-mini');
    $('.intro__block__content .btn');
    $('.intro__block__content .btn').attr('href', linkMob);
  } else {
    let linkDesc = $(this).attr('data-modal-mini');
    $('.intro__block__content .btn').attr('href', linkDesc);
  }
});
$('.max').on('click', function() {
  minMax($(this));
  if($(window).width() <= 1024) {
    let linkMob = $(this).attr('data-href-maxi');
    $('.intro__block__content .btn');
    $('.intro__block__content .btn').attr('href', linkMob);
  } else {
    let linkDesc = $(this).attr('data-modal-maxi');
    $('.intro__block__content .btn').attr('href', linkDesc);
  }
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
