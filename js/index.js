// PRELOAD

var images = new Array();
var imageFiles = [
	"images/backgroundblue2.png",
	"images/backgroundblue1.png",
	"images/backgroundred2.png",
	"images/backgroundred1.png",
	"images/404small.png",
	"images/404.png",
	"images/about_bkgd.png",
	"images/photo_bkgd.png"
];

function preload(imageFiles) {
	for (i = 0; i < imageFiles.length; i++) {
		images[i] = new Image()
		images[i].src = imageFiles[i];
	};
};

preload(imageFiles);
$(attachClickHandlers);

// GET STYLE

function getStyle(id, name) {
	var element = document.getElementById(id);
	return element.currentStyle ? element.currentStyle[name] : (window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null);
};

// HANDLECLICK

var background = [
	'background', 
	'backgroundblue1', 
	'backgroundblue2', 
	'backgroundred1', 
	'backgroundred2'
];

var backgroundKey = {
	'lightblue':'backgroundblue1',
	'darkblue':'backgroundblue2',
	'lightred':'backgroundred1',
	'darkred':'backgroundred2'
};

var paletteKey = {
	'red1' : 'darkred',
	'red2' : 'darkred',
	'red3' : 'darkred',
	'red4' : 'darkred',
	'red5' : 'lightred',
	'red6' : 'lightred',
	'red7' : 'lightred',
	'red8' : 'lightred',
	'blue1' : 'darkblue',
	'blue2' : 'darkblue',
	'blue3' : 'darkblue',
	'blue4' : 'lightblue',
	'blue5' : 'lightblue',
	'blue6' : 'lightblue'
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

	console.log(itemHide);

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




