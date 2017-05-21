

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


// BACKGROUND FADE


$(window).scroll(function(){
  var scrollVar = ($(window).scrollTop())/1150;
  var saturate = "saturate"+"("+scrollVar+")";
  $(".fullbkgd").css({'filter':saturate});
  console.log(scrollVar);
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


// // IMAGE KEY
//
// function handleClick() {
//   var clickSrc = $(this).attr('src');
//   console.log("yes");
//   console.log(clickSrc);
//
//   for (var i = 0; i < onPage.length; i++) {
//     var listSrc = onPage.attr('src')
//
//     if (listSrc === clickSrc) {
//       var target = event.target.src
//       var targetSrc = imageKey[target];
//
//       $('lb_image').attr('src', targetSrc)
//       console.log('success');
//     }
//     else {
//       console.log('failure');
//     };
//   }
// }
//

// var onPage = {
//
// };
//
//
// var imageKey = {
//   'images/photography/thumbnail/120/CPH007.jpg' : 'images/photography/full/120/jpeg/CPH007.jpg',
//   'images/photography/thumbnail/35mm_l/CPH002.jpg' : 'images/photography/full/35mm/jpeg/35mm_l/CPH002.jpg',
//   'images/photography/thumbnail/120/CPH004.jpg' : 'images/photography/full/120/jpeg/CPH004.jpg',
//   'images/photography/thumbnail/35mm_p/CPH012.jpg' : 'images/photography/full/35mm/jpeg/35mm_p/CPH012.jpg',
//   'images/photography/thumbnail/120/CPH010.jpg' : 'images/photography/full/120/jpeg/CPH010.jpg',
//   'images/photography/thumbnail/120/CPH017.jpg' : 'images/photography/full/120/jpeg/CPH017.jpg',
//   'images/photography/thumbnail/35mm_l/CPH004.jpg' : 'images/photography/full/35mm/jpeg/35mm_l/CPH004.jpg',
//   'images/photography/thumbnail/35mm_l/CPH007.jpg' : 'images/photography/full/35mm/jpeg/35mm_l/CPH007.jpg'
// };
//
// // $(function() {
// //   $('.lb_trigger').click {
// //
// //   }
// // }
