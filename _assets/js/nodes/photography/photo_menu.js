$(function() {
  $(".locselect").click(function(){
    $("#locationmenu").toggleClass("locmenu2", [300]);
  });

  $(".locbtn").click(function(){
    $("#locationmenu").removeClass("locmenu2", [300]);
  });

	$('body').click(function() {
		if ($("#locationmenu").hasClass("locmenu2")) {
			$("#locationmenu").removeClass("locmenu2", [300]);
		};
	});
});
