import $ from 'jquery';

document.addEventListener( 'wpcf7mailsent', function( event ) {
  $('.call-order').height(heightPopUp);
  $('.call-order__content').fadeOut(400);
  setTimeout(function() {
    $('.call-order').addClass('active');
    $('.call-order__p p').fadeIn();
  }, 500);
}, false );
