$(window).scroll(function(){
  var scrollVar = ($(window).scrollTop())/3;
  $(".fullbkgd-projects").css({'opacity':(100-scrollVar)/100})
});
