(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./nodes/image_preload');

require('./nodes/index_bkg');

require('./nodes/photography/photo_menu');

require('./nodes/bkg_fade/projects_bkg_fade');

require('./nodes/bkg_fade/about_bkg_fade');

require('./nodes/bkg_fade/photography_bkg_fade');

require('./nodes/resume_button_exp');

require('./nodes/menu_toggle');

require('./nodes/smooth_scroll');

},{"./nodes/bkg_fade/about_bkg_fade":2,"./nodes/bkg_fade/photography_bkg_fade":3,"./nodes/bkg_fade/projects_bkg_fade":4,"./nodes/image_preload":5,"./nodes/index_bkg":6,"./nodes/menu_toggle":7,"./nodes/photography/photo_menu":8,"./nodes/resume_button_exp":9,"./nodes/smooth_scroll":10}],2:[function(require,module,exports){
"use strict";

$(window).scroll(function () {
  var scrollVar = $(window).scrollTop() / 10;
  $(".fullbkgd-about").css({ 'opacity': (100 - scrollVar) / 100 });
});

},{}],3:[function(require,module,exports){
"use strict";

$(window).scroll(function () {
		if ($(this).scrollTop() < 800) {

				var scrollVar = $(window).scrollTop() / 1050;
				var saturate = "saturate" + "(" + scrollVar + ")";
				$(".fullbkgd-photography").css({ 'filter': saturate });
		};
});

},{}],4:[function(require,module,exports){
"use strict";

$(window).scroll(function () {
  var scrollVar = $(window).scrollTop() / 3;
  $(".fullbkgd-projects").css({ 'opacity': (100 - scrollVar) / 100 });
});

},{}],5:[function(require,module,exports){
"use strict";

var images = new Array();
var imageFiles = ["/images/index_background/backgroundblue2.png", "/images/index_background/backgroundblue1.png", "/images/index_background/backgroundred2.png", "/images/index_background/backgroundred1.png", "/images/404small.png", "/images/404.png", "/images/about_images/about_bkgd.png"];

function preload(imageFiles) {
	for (var i = 0; i < imageFiles.length; i++) {
		images[i] = new Image();
		images[i].src = imageFiles[i];
	};
};

preload(imageFiles);

},{}],6:[function(require,module,exports){
'use strict';

$(attachClickHandlers);

// GET STYLE

function getStyle(id, name) {
	var element = document.getElementById(id);
	return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
};

// HANDLECLICK

var background = ['background', 'backgroundblue1', 'backgroundblue2', 'backgroundred1', 'backgroundred2'];

var backgroundKey = {
	'lightblue': 'backgroundblue1',
	'darkblue': 'backgroundblue2',
	'lightred': 'backgroundred1',
	'darkred': 'backgroundred2'
};

var paletteKey = {
	'red1': 'darkred',
	'red2': 'darkred',
	'red3': 'darkred',
	'red4': 'darkred',
	'red5': 'lightred',
	'red6': 'lightred',
	'red7': 'lightred',
	'red8': 'lightred',
	'blue1': 'darkblue',
	'blue2': 'darkblue',
	'blue3': 'darkblue',
	'blue4': 'lightblue',
	'blue5': 'lightblue',
	'blue6': 'lightblue'
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
	var itemHide = getStyle(backgroundKey[targetid], 'display');
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

},{}],7:[function(require,module,exports){
"use strict";

$(function () {
  var toggles = document.querySelectorAll(".mobile-menu");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      if (this.classList.contains("active") === true) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    });
  }
});

$(function () {
  $(".mobile-menu").click(function () {
    $(".container").toggleClass("hide", [1000]);
    $("nav").toggleClass("show", [1000]);
    hasShow();
  });
});

function hasShow() {
  if ($("nav").hasClass("show")) {
    $("nav").css("pointer-events", "none");
  } else {
    $("nav").css("pointer-events", "auto");
  };
};

},{}],8:[function(require,module,exports){
"use strict";

$(function () {
  $(".locselect").click(function () {
    $("#locationmenu").toggleClass("locmenu2", [300]);
  });

  $(".locbtn").click(function () {
    $("#locationmenu").removeClass("locmenu2", [300]);
  });

  $('body').click(function () {
    if ($("#locationmenu").hasClass("locmenu2")) {
      $("#locationmenu").removeClass("locmenu2", [300]);
    };
  });
});

},{}],9:[function(require,module,exports){
"use strict";

$(function () {
	$(".expbutton").click(function () {
		var live_btn = "#" + $(this).attr('id');
		var live_div = live_btn.slice(0, -3);

		if ($(live_btn).text() === "Hide") {
			$(live_btn).text("Expand");
		} else {
			$(live_btn).text("Hide");
		};

		$(live_div).slideToggle("medium");
	});
});

},{}],10:[function(require,module,exports){
'use strict';

$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			};
		};
	});
});

},{}]},{},[1]);
