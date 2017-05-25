import './vendor/lightbox.js';
import './plugins/jquery.menu';
import './plugins/jquery.greenhouse';
import './plugins/jquery.iframe.modal';
import './plugins/jquery.iframe.pass';
import './plugins/jquery.translate';
import './plugins/jquery.quotes';


$(() => {
  $('.site-header').menu();
  $('#job-list').job_board();
  $('.form-modal').iframe_modal();
  $('.form-popup-link').iframe_modal();
  $('[data-marketo]').iframe_pass();
  $('head').translate();
  $('.quote-module').quotes();


  $('.video-popup-link').magnificPopup({type:'iframe'});
  $('.image-popup-link').magnificPopup({type:'image'});
  $('.content-popup-link').magnificPopup({type:'ajax'});

  if($(window).width() < 480) {
    $('.data-modal--overlay').magnificPopup({
      type: 'inline',
      closeOnBgClick: true,
      closeBtnInside:true,
      midClick: true
    });

    $('.data-modal__bttn').on('click', function(){
      $.magnificPopup.close();
    });
  }

  $('#quote-fade').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear'
  });

  $('#career-testimonials').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    speed: 500,
    fade: true,
    prevArrow: false,
    nextArrow: false,
    cssEase: 'linear'
  });

  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: 'carousel__dots',
    mobileFirst: true,
    nextArrow: '<a href="" class="carousel__next"></a>',
    prevArrow: '<a href="" class="carousel__prev"></a>',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '120px'
        }
      }
    ]
  });

  $('.careers-masthead__button').click(function() {
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetDiv).offset().top - 75
    }, 1650);
  });

  $(window).on('message', function (e) {
    if(e.originalEvent.data) {
      var message = JSON.parse(decodeURIComponent(e.originalEvent.data));
      if (message.hasOwnProperty('action') && message.action === 'resize') {
        $('iframe[localfields], iframe[data-marketo]').css({ height: message.height });
      }
    }
  })


});
