$(function() {
   var titleOverlay = $('.title-overlay-div')

   titleOverlay.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
      titleOverlay.css('display', 'none');
   });
});
