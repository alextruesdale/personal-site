(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./nodes/bkg_fade/about_bkg_fade');

require('./nodes/bkg_fade/photography_bkg_fade');

require('./nodes/image_preload');

require('./nodes/index_bkg');

require('./nodes/photography/photo_menu');

require('./nodes/photography/jquery.visible.js');

require('./nodes/photography/in_viewport');

require('./nodes/photography/gallery_introduction');

require('./nodes/photography/lightbox');

require('./nodes/image_fade/gallery_fade');

require('./nodes/image_fade/photo_fade');

require('./nodes/resume_button_exp');

require('./nodes/menu_toggle');

require('./nodes/smooth_scroll');

},{"./nodes/bkg_fade/about_bkg_fade":2,"./nodes/bkg_fade/photography_bkg_fade":3,"./nodes/image_fade/gallery_fade":4,"./nodes/image_fade/photo_fade":5,"./nodes/image_preload":6,"./nodes/index_bkg":7,"./nodes/menu_toggle":8,"./nodes/photography/gallery_introduction":9,"./nodes/photography/in_viewport":10,"./nodes/photography/jquery.visible.js":11,"./nodes/photography/lightbox":12,"./nodes/photography/photo_menu":13,"./nodes/resume_button_exp":14,"./nodes/smooth_scroll":15}],2:[function(require,module,exports){
'use strict';

$(window).scroll(function () {
  var scrollVar = $(window).scrollTop() / 10;

  $('.fullbkgd-about').css({ 'opacity': (100 - scrollVar) / 100 });
});

},{}],3:[function(require,module,exports){
'use strict';

$(window).scroll(function () {

  if ($(this).scrollTop() < 850) {
    var scrollVar = $(window).scrollTop() / 1050;
    var saturate = 'saturate' + '(' + scrollVar + ')';

    $('.fullbkgd-photography').css({ 'filter': saturate });
  }

  if ($(this).scrollTop() < 3400) {
    $('.fullbkgd-photography').css({ 'visibility': 'visible' });
  }

  if ($(this).scrollTop() > 3400) {
    $('.fullbkgd-photography').css({ 'visibility': 'hidden' });
  }
});

},{}],4:[function(require,module,exports){
'use strict';

$(function () {
  $('.lb-trigger').each(function () {
    if (!this.complete) {
      $(this).on('load', function () {
        $(this).addClass('lb-in');
        $(this).siblings().addClass('lb-out');
      });
    } else {
      $(this).addClass('lb-in');
      $(this).siblings().addClass('lb-out');
    }
  });
});

},{}],5:[function(require,module,exports){
'use strict';

$(function () {
  $('.location-background, .fullbkgd-about, .fullbkgd-photography').each(function () {
    if (!this.complete) {
      $(this).on('load', function () {
        $(this).addClass('lb-in');
        $(this).prev().addClass('lb-out');
      });
    } else {
      $(this).addClass('lb-in');
      $(this).prev().addClass('lb-out');
    }
  });
});

},{}],6:[function(require,module,exports){
'use strict';

var images = [];
var imageFiles = ['/images/index_background/backgroundblue2.png', '/images/index_background/backgroundblue1.png', '/images/index_background/backgroundred2.png', '/images/index_background/backgroundred1.png', '/images/404small.png', '/images/404.png', '/images/about_images/about_bkgd_blur.jpg', '/images/resume_images/Résumé.pdf', '/images/resume_images/resumehead.png', '/images/resume_images/resumeleft.png', '/images/gallery_images/photo_bkgd_blur.jpg', '/images/photography/teaser/Belgium_blur.jpg', '/images/photography/teaser/Berlin_blur.jpg', '/images/photography/teaser/Copenhagen_blur.jpg', '/images/photography/teaser/Dresden_blur.jpg', '/images/photography/teaser/Hamburg_blur.jpg', '/images/photography/teaser/Leipzig_blur.jpg', '/images/photography/teaser/Norway_blur.jpg', '/images/photography/teaser/Paris_blur.jpg', '/images/photography/teaser/Prague_blur.jpg', '/images/photography/teaser/Stralsund_blur.jpg', '/images/photography/teaser/UK_blur.jpg', '/images/photography/teaser/Weimar_blur.jpg'];

function preload() {
	for (var i = 0; i < imageFiles.length; i += 1) {
		images[i] = new Image();
		images[i].src = imageFiles[i];
	}
}

$(function () {
	preload(imageFiles);
});

},{}],7:[function(require,module,exports){
'use strict';

$(attachClickHandlers);

// GET STYLE

function getStyle(id, name) {
	var element = document.getElementById(id);
	return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

// HANDLECLICK

var background = ['background', 'backgroundblue1', 'backgroundblue2', 'backgroundred1', 'backgroundred2'];

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

},{}],8:[function(require,module,exports){
'use strict';

$(function () {
  var toggles = document.querySelectorAll('.mobile-menu');

  for (var i = toggles.length - 1; i >= 0; i -= 1) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.classList.contains('active') === true) {
        this.classList.remove('active');
      } else {
        this.classList.add('active');
      }
    });
  }
});

$(function () {
  $('.mobile-menu').click(function () {
    $('.container').toggleClass('hide', [1000]);
    $('nav').toggleClass('show', [1000]);
    hasShow();
  });
});

function hasShow() {
  if ($('nav').hasClass('show')) {
    $('nav').css('pointer-events', 'none');
  } else {
    $('nav').css('pointer-events', 'auto');
  }
}

},{}],9:[function(require,module,exports){
'use strict';

$(function () {
   var titleOverlay = $('.title-overlay-div');

   titleOverlay.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
      titleOverlay.css('display', 'none');
   });
});

},{}],10:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  if ($(window).width() <= 1100) {
    $(window).scroll(function () {
      $('.gallery-wrapper').each(function () {
        var image = $(this).children(':nth-child(3)');
        var timeDelay = 1600;

        if ($(this).visible(true)) {
          $(image).addClass('hover', timeDelay);
        } else {
          $(image).removeClass('hover', timeDelay);
        };
      });
    });
  };
});

},{}],11:[function(require,module,exports){
'use strict';

(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       can accounts for vertical position, horizontal, or both
     */
    var $w = $(window);
    $.fn.visible = function (partial, hidden, direction, container) {

        if (this.length < 1) return;

        // Set direction default to 'both'.
        direction = direction || 'both';

        var $t = this.length > 1 ? this.eq(0) : this,
            isContained = typeof container !== 'undefined' && container !== null,
            $c = isContained ? $(container) : $w,
            wPosition = isContained ? $c.position() : 0,
            t = $t.get(0),
            vpWidth = $c.outerWidth(),
            vpHeight = $c.outerHeight(),
            clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function') {

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ? rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top : rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ? rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top : rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ? rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left : rec.left >= 0 && rec.left < vpWidth,
                rViz = isContained ? rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left : rec.right > 0 && rec.right <= vpWidth,
                vVisible = partial ? tViz || bViz : tViz && bViz,
                hVisible = partial ? lViz || rViz : lViz && rViz,
                vVisible = rec.top < 0 && rec.bottom > vpHeight ? true : vVisible,
                hVisible = rec.left < 0 && rec.right > vpWidth ? true : hVisible;

            if (direction === 'both') return clientSize && vVisible && hVisible;else if (direction === 'vertical') return clientSize && vVisible;else if (direction === 'horizontal') return clientSize && hVisible;
        } else {

            var viewTop = isContained ? 0 : wPosition,
                viewBottom = viewTop + vpHeight,
                viewLeft = $c.scrollLeft(),
                viewRight = viewLeft + vpWidth,
                position = $t.position(),
                _top = position.top,
                _bottom = _top + $t.height(),
                _left = position.left,
                _right = _left + $t.width(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom,
                compareLeft = partial === true ? _right : _left,
                compareRight = partial === true ? _left : _right;

            if (direction === 'both') return !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop && compareRight <= viewRight && compareLeft >= viewLeft;else if (direction === 'vertical') return !!clientSize && compareBottom <= viewBottom && compareTop >= viewTop;else if (direction === 'horizontal') return !!clientSize && compareRight <= viewRight && compareLeft >= viewLeft;
        }
    };
})(jQuery);

},{}],12:[function(require,module,exports){
'use strict';

$(function () {
  var images = $('.lb-trigger').map(function () {
    return $(this).attr('src');
  });

  $('.lb-trigger').click(function () {
    var index = $(this).parent().index();
    var lbTimeDelay = 400;

    $('#lb-image').attr('src', images[index]);

    $('.lb-overlay').addClass('lb-overlay2');
    $('.lb-overlay').addClass('lb-overlay3', lbTimeDelay);
  });

  $('.nav-arrow-next-lb, .nav-arrow-next-lb--mobile, #lb-image').click(function () {
    imgRight();
  });

  $('.nav-arrow-prev-lb, .nav-arrow-prev-lb--mobile').click(function () {
    imgLeft();
  });

  $(document).keydown(function (e) {
    switch (e.which) {
      case 37:
        imgLeft();
        break;

      case 39:
        imgRight();
        break;

      default:
        return;
    }

    e.preventDefault();
  });

  function imgRight() {
    var current = $('#lb-image').attr('src');
    var currentloc = jQuery.inArray(current, images);

    if (currentloc === images.length - 1) {
      var replace = 0;
    } else {

      var replace = currentloc + 1;
    }

    $('#lb-image').fadeOut(500, function () {
      $('#lb-image').attr('src', images[replace]);
    }).fadeIn(500);
  }

  function imgLeft() {
    var current = $('#lb-image').attr('src');
    var currentloc = jQuery.inArray(current, images);

    if (currentloc === 0) {
      var replace = images.length - 1;
    } else {

      var replace = currentloc - 1;
      console.log(replace);
    }

    $('#lb-image').fadeOut(500, function () {
      $('#lb-image').attr('src', images[replace]);
    }).fadeIn(500);
  }

  $('.lb-close').click(function () {
    $.when($('.lb-overlay').removeClass('lb-overlay3', 400)).done(function () {
      $('.lb-overlay').removeClass('lb-overlay2');
    });
  });
});

},{}],13:[function(require,module,exports){
'use strict';

$(function () {
  $('.location-select').click(function () {
    $('.location-menu').toggleClass('location-menu-show', [300]);
  });

  $('.location-btn').click(function () {
    $('.location-menu').removeClass('location-menu-show', [300]);
  });

  $('body').click(function () {
    if ($('.location-menu').hasClass('location-menu-show')) {
      $('.location-menu').removeClass('location-menu-show', [300]);
    }
  });
});

},{}],14:[function(require,module,exports){
'use strict';

$(function () {
	$('.expbutton').click(function () {
		var liveBtn = '#' + $(this).attr('id');
		var liveDiv = liveBtn.slice(0, -3);

		if ($(liveBtn).text() === 'Hide') {
			$(liveBtn).text('Expand');
		} else {
			$(liveBtn).text('Hide');
		}

		$(liveDiv).slideToggle('medium');
	});
});

},{}],15:[function(require,module,exports){
'use strict';

$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			var target_div = $(this).attr('href');
			var target_loc = Math.abs($(target_div)[0].getBoundingClientRect().top);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				if (target_loc < 1550) {
					$('html, body').animate({ scrollTop: target.offset().top }, 900);
				} else if (target_loc > 1550 && target_loc < 2350) {
					$('html, body').animate({ scrollTop: target.offset().top }, 1600);
				} else {
					$('html, body').animate({ scrollTop: target.offset().top }, 1900);
				}
				return false;
			}
		}
	});
});

},{}]},{},[1]);
