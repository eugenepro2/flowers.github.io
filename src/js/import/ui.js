import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';



//menu open
$('.menu-open').on('click', function() {
  $(this).toggleClass('active');
  $('.header').toggleClass('active');
  $('.body').fadeToggle();
  $('.menu').fadeToggle();
});

//select
$('select').selectize();


//i
$('a .icon.icon-i').on('click', function(event) {
  event.preventDefault();
  if($(this).parent().parent().siblings('.details').hasClass('active')) {
    $('.details').removeClass('active');
  } else if($('.details').hasClass('active')) {
    $('.details').removeClass('active');
    $(this).parent().parent().siblings('.details').addClass('active');
  } else {
    $(this).parent().parent().siblings('.details').addClass('active');
  }
});
