$(function() {
	$(".expbutton").click(function() {
    var live_btn = "#" + $(this).attr('id')
    var live_div = live_btn.slice(0,-3)

		if ($(live_btn).text() === "Hide") {
			$(live_btn).text("Expand");
		} else {
			$(live_btn).text("Hide");
		};

		$(live_div).slideToggle("medium");
	});
});
