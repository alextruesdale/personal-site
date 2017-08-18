
$(function() {
  var toggles = document.querySelectorAll(".mobile-menu");

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
  $(".mobile-menu").click(function() {
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
