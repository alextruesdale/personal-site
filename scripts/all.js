(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./nodes/menu_toggle');

require('./nodes/gallery_side_menu');

require('./nodes/smooth_scroll');

},{"./nodes/gallery_side_menu":2,"./nodes/menu_toggle":3,"./nodes/smooth_scroll":4}],2:[function(require,module,exports){
"use strict";

},{}],3:[function(require,module,exports){
"use strict";

$(function () {
  var toggles = document.querySelectorAll(".mobilemenu");

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
  $(".mobilemenu").click(function () {
    $("#container").toggleClass("hide", [1000]);
    $("nav").toggleClass("show", [1000]);
    $("#icons").removeClass("mobilesoc");
    $("#icons").css({
      "position": "",
      "top": "",
      "left": ""
    });
    $(".socicon").css({
      "width": "",
      "margin-top": ""
    });
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

$(function () {
  if ($(window).width() < 1000) {
    $("#soc").click(function () {
      $("#icons").toggleClass("mobilesoc", [1000]);
      $("#icons").css({
        "position": "absolute",
        "top": "0",
        "left": "0"
      });
      $(".socicon").css({
        "width": "65px",
        "margin-top": "15px"
      });
    });
  };
});

},{}],4:[function(require,module,exports){
"use strict";

},{}]},{},[1]);
