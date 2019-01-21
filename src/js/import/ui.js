import $ from 'jquery';
import '../lib/selectize.min.js';
import '../lib/maskedinput.js';
import modal from 'jquery-modal';
import Swiper from 'swiper';


//select
$('select').selectize();

//maskedinput
$('.phone').mask('+7 (999) 999-9999');

//Подтяжка адресса с гугла
var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
  language: 'ru',
  // componentRestrictions: {country: 'ru'}
  componentRestrictions: {}
});

//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});




//Первый шаг, выбор значения при селекте
$(window).on('load', function() {
  $('.step-1__block__select select').each(function() {
    let val = $(this).children('option').val();
    let optionText = $(this).first('option').text();
    $(this).closest('.step-1__block').find('.form__certificate .month').val(optionText);
    $(this).closest('.step-1__block').find('.form__certificate .price').val(val);
    $(this).closest('.step-1__block').find('span').text(val + '₽');
  });
});
$('.step-1__block__select select').on('change', function() {
  let val = $(this).children('option').val();
  let optionText = $(this).children('option').text();
  $(this).closest('.step-1__block').find('.form__certificate .month').val(optionText);
  $(this).closest('.step-1__block').find('.form__certificate .price').val(val);
  $(this).closest('.step-1__block').find('span').text(val + '₽');
});



//menu open
let menu = $('.menu-open');
menu.on('click', function() {
  menu.toggleClass('active');
  $('.header').toggleClass('active');
  window.scrollTo(0, 0);
  setTimeout(function() {
    if(menu.attr('rel') === 'modal:open') {
      menu.attr('rel', 'modal:close');
      menu.attr('href', '#close-modal');
      $('body').css({'position' : 'fixed'});
    } else {
      menu.attr('rel', 'modal:open');
      menu.attr('href', '#call-order');
      $('body').css({'overflow' : 'visible'});
      $('body').css({'position' : 'static'});
    }
  }, 500);

});




let heightPopUp = $('.call-order').height();

$('.dispatch').on('click', function() {
  $('.call-order').height(heightPopUp);
  $('.call-order__content').fadeOut();
  $('.call-order').addClass('active');
  $('.call-order__p p').fadeIn();
});



//Всплывающий блок информации по нажатию на значек "i"
if($(window).width() <= 767) {
  $(document).on({ 'touchstart' : function() { 
    $('.details').removeClass('active'); // скрываем его
  } });
  $(document).on('click', function(e) {
    var div = $('.i'); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.details').removeClass('active'); // скрываем его
    }
  });
  $('.i').on('click', function() {
    $(this).siblings('.details').toggleClass('active');
  });
}

//Стилизованый checkbox
$('.form .form__checkbox input').on('change', function() {
  let label = $(this).closest('.form__checkbox').find('label');
  if($(this).is(':checked')) {
    label.addClass('active');
  } else {
    label.removeClass('active');
  }
});

//Ошибка если не выбран checkbox на втором шаге
$('.step-2__content .form__checkbox input').on('change', function() {
  if ($(this).is(':checked')) {
    $('.step-2__content .error').fadeOut();
    $('.step-2__content input[type="submit"]').prop('disabled', false);
  } else{
    $('.step-2__content .error').fadeIn();
    $('.step-2__content input[type="submit"]').prop('disabled', true);
  }
});
