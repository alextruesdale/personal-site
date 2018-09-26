$(document).ready(function() {
  if ($(window).width() <= 800) {
    $(window).scroll(function() {
      $('.gallery-wrapper').each(function() {
        var image = $(this).children(':nth-child(3)')
        var timeDelay = 1600;

        if ($(this).visible(true)) {
          $(image).addClass('hover', timeDelay);
        } else {
          $(image).removeClass('hover', timeDelay);
        };
      });
    });
  };
});
