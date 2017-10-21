$(window).scroll(function() {
  var scrollVar = $(window).scrollTop() / 10;

  $('.fullbkgd-about').css({'opacity': (100 - scrollVar) / 100});
});
