$(attachClickHandlers);

// GET STYLE

function getStyle(id, name) {
	var element = document.getElementById(id);
	return element.currentStyle ? element.currentStyle[name] : (window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null);
}

// HANDLECLICK

var background = [
'background',
'backgroundblue1',
'backgroundblue2',
'backgroundred1',
'backgroundred2'
];

var backgroundKey = {
'lightred': 'backgroundred1',
'lightblue': 'backgroundblue1',
'darkred': 'backgroundred2',
'darkblue': 'backgroundblue2'
};

var paletteKey = {
'red8': 'lightred',
'red7': 'lightred',
'red6': 'lightred',
'red5': 'lightred',
'red4': 'darkred',
'red3': 'darkred',
'red2': 'darkred',
'red1': 'darkred',
'blue6': 'lightblue',
'blue5': 'lightblue',
'blue4': 'lightblue',
'blue3': 'darkblue',
'blue2': 'darkblue',
'blue1': 'darkblue'
};

function handleClick() {
	for (var i = 0; i < background.length; i++) {
		var canSee = getStyle(background[i], 'visibility');
		var beg = "#" + background[i];

		if (canSee === "visible") {
			$(beg).fadeOut(1000);
		};
	};
	var target = event.target.id;
	var targetid = paletteKey[target];
	var itemHide = getStyle(backgroundKey[targetid], 'display')
	var fin = "#" + backgroundKey[targetid];

	if (itemHide === "none") {
		$(fin).hide().css('visibility', 'visible').fadeIn(100);
	};
};


// ATTACH CLICK HANDLERS


function attachClickHandlers() {
	$("#darkred").click(handleClick);
	$("#lightred").click(handleClick);
	$("#darkblue").click(handleClick);
	$("#lightblue").click(handleClick);
}
