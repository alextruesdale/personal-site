$(function() {
    var images = $(".lb-trigger").map(function() {
      return $(this).attr("src");
    });

    $(".lb-trigger").click(function () {
        var index = $(this).index();

        $('#lb-image').attr('src', images[index]);

        $(".lb-overlay").addClass("lb-overlay2");
        $(".lb-overlay").addClass("lb-overlay3", 400);
    });

    $(".nav-arrow-next-lb, .nav-arrow-next-lb--mobile, .lb-image").click(function() {
      var current = $("#lb-image").attr('src')
      var currentloc = jQuery.inArray(current, images)

      if (currentloc == (images.length - 1)) {
        var replace = 0

      } else {

        var replace = currentloc + 1
      }

      $("#lb-image").fadeOut(500, function() {
        $('#lb-image').attr('src', images[replace]);
      })
      .fadeIn(500);
    });

    $(".nav-arrow-prev-lb, .nav-arrow-prev-lb--mobile").click(function() {
      var current = $("#lb-image").attr('src')
      var currentloc = jQuery.inArray(current, images)

      if (currentloc == "0") {
        var replace = images.length - 1

      } else {

        var replace = currentloc - 1
      }

      $("#lb-image").fadeOut(500, function() {
        $('#lb-image').attr('src', images[replace]);
      })
      .fadeIn(500);
    });

    $(".lb-close").click(function(){
      $.when($(".lb-overlay").removeClass("lb-overlay3", 400)).done(function() {
        $(".lb-overlay").removeClass("lb-overlay2");
      });
    });
});
