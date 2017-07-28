

// SMOOTH SCROLL


$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
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


// URL CLEAR

function removeHash () {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}


// MENU TOGGLE


$(function() {
  var toggles = document.querySelectorAll(".mobilemenu");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
  	toggle.addEventListener("click", function(e) {
    	e.preventDefault();
    	if (this.classList.contains("active") === true) {
    		this.classList.remove("active");
    	} else {
    		this.classList.add("active");
    	}
    });
  }
});

$(function() {
  $(".mobilemenu").click(function() {
    $("#container").toggleClass("hide", [1000]);
    $("nav").toggleClass("show", [1000]);
    $("#icons").removeClass("mobilesoc");
    $("#icons").css({
      "position" : "",
      "top" : "",
      "left" : ""
    });
    $(".socicon").css({
      "width" : "",
      "margin-top" : ""
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

$(function() {
  if ($(window).width() < 1000) {
    $("#soc").click(function() {
      $("#icons").toggleClass("mobilesoc", [1000]);
      $("#icons").css({
        "position" : "absolute",
        "top" : "0",
        "left" : "0"
      });
      $(".socicon").css({
        "width" : "65px",
        "margin-top" : "15px"
      });
    });
  };
});


// BACKGROUND FADE


$(window).scroll(function(){
  var scrollVar = ($(window).scrollTop())/2050;
  var saturate = "saturate"+"("+scrollVar+")";
  $(".fullbkgd").css({'filter':saturate});
});

// LOCATION MENU


$(function() {
  $(".locselect").click(function(){
    $("#locationmenu").toggleClass("locmenu2", [300]);
  });

  $(".locbtn").click(function(){
    $("#locationmenu").removeClass("locmenu2", [300]);
  });
});
