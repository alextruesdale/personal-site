$(function() {
  $(".location-select").click(function(){
    $(".location-menu").toggleClass("location-menu-show", [300]);
  });

  $(".location-btn").click(function(){
    $(".location-menu").removeClass("location-menu-show", [300]);
  });

	$('body').click(function() {
		if ($(".location-menu").hasClass("location-menu-show")) {
			$(".location-menu").removeClass("location-menu-show", [300]);
		};
	});
});
