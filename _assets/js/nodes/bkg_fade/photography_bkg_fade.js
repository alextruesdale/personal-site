$(window).scroll(function(){
  if ($(this).scrollTop() < 800) {

	  var scrollVar = ($(window).scrollTop())/1050;
	  var saturate = "saturate"+"("+scrollVar+")";
	  $(".fullbkgd-photography").css({'filter':saturate});
	};
});
