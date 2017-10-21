$(function() {
	$('.expbutton').click(function() {
    var liveBtn = '#' + $(this).attr('id')
    var liveDiv = liveBtn.slice(0, -3)

		if ($(liveBtn).text() === 'Hide') {
			$(liveBtn).text('Expand');
		} else {
			$(liveBtn).text('Hide');
		}

		$(liveDiv).slideToggle('medium');
	});
});
