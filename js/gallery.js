
$(document).ready(function() {
   var titleOverlay = $('#title_overlay')

	titleOverlay.one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e) {
		titleOverlay.css('display', 'none'); 
		console.log("check");
	});
});

// SMOOTH SCROLL


$(document).ready(function() {
	$('a[href*="#"]').click(function(e) {
	  e.preventDefault();
      var speed = 1500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var nav_height = 0;
      var position = target.position().top - nav_height;
      $("body").animate({scrollTop:position}, speed);
      return false;
  });
});


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


// LOCATION MENU


$(function() {
  $(".locselect").click(function(){
    $("#locationmenu").toggleClass("locmenu2", [300]);
  });

  $(".locbtn").click(function(){
    $("#locationmenu").removeClass("locmenu2", [300]);
  });
});