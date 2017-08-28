$(function() {
   var titleOverlay = $('.title-overlay-div')

   titleOverlay.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e) {
      titleOverlay.css('display', 'none');
	});
});
