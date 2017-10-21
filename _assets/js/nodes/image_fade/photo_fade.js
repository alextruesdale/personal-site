$(function() {
  $('.location-background, .fullbkgd-about, .fullbkgd-photography').each(function() {
    if (!this.complete) {
        $(this).on('load', function() {
          $(this).addClass('lb-in');
          $(this).prev().addClass('lb-out');
        });
    } else {
      $(this).addClass('lb-in');
      $(this).prev().addClass('lb-out');
    }
  });
});
