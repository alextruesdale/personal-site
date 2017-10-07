$(window).scroll(function(){
  if ($(this).scrollTop() < 850) {

    var scrollVar = ($(window).scrollTop())/1050;
    var saturate = "saturate"+"("+scrollVar+")";
    $(".fullbkgd-photography").css({'filter':saturate});
	};

  if ($(this).scrollTop() < 3200) {
    $(".fullbkgd-photography").css({'visibility':'visible'});
  };

  if ($(this).scrollTop() > 3200) {
    $(".fullbkgd-photography").css({'visibility':'hidden'});
  };
});
