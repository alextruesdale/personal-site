(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./nodes/resume_button_exp');

require('./nodes/about_bkg_fade');

require('./nodes/menu_toggle');

require('./nodes/gallery_side_menu');

require('./nodes/smooth_scroll');

},{"./nodes/about_bkg_fade":2,"./nodes/gallery_side_menu":3,"./nodes/menu_toggle":4,"./nodes/resume_button_exp":5,"./nodes/smooth_scroll":6}],2:[function(require,module,exports){
"use strict";

$(window).scroll(function () {
  var scrollVar = $(window).scrollTop() / 10;
  $(".fullbkgd").css({ 'opacity': (100 - scrollVar) / 100 });
});

},{}],3:[function(require,module,exports){
"use strict";

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
