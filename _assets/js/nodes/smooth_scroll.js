$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			var target_div = $(this).attr('href');
			var target_loc = Math.abs($(target_div)[0].getBoundingClientRect().top);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				if (target_loc < 1550) {
					$('html, body').animate({scrollTop: target.offset().top}, 900);
				} else if (target_loc > 1550 && target_loc < 2350) {
					$('html, body').animate({scrollTop: target.offset().top}, 1600);
				} else {
					$('html, body').animate({scrollTop: target.offset().top}, 1900);
				}
				return false;
			}
		}
	});
});
