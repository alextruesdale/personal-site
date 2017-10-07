$(function() {
  $('.lb-trigger').each(function(){
    if (!this.complete) {
        $(this).on('load', function() {
          $(this).addClass('lb-in');
          $(this).siblings().addClass('lb-out');
        });
    } else {
      $(this).addClass('lb-in');
      $(this).siblings().addClass('lb-out');
    }
  });
});
