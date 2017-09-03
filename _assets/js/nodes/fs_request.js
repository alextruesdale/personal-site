$('body').on('click', '*', function() {
  var body = document.documentElement;

  if (body.requestFullscreen) {
    body.requestFullscreen();
  }
  else if (body.webkitrequestFullscreen) {
    body.webkitrequestFullscreen();
  }
  else if (body.mozrequestFullscreen) {
    body.mozrequestFullscreen();
  }
  else if (body.msrequestFullscreen) {
    body.msrequestFullscreen();
  }
});
