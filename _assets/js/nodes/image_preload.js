var images = [];
var imageFiles = [
	'/images/index_background/backgroundblue2.png',
	'/images/index_background/backgroundblue1.png',
	'/images/index_background/backgroundred2.png',
	'/images/index_background/backgroundred1.png',
	'/images/404small.png',
	'/images/404.png',
	'/images/about_images/about_bkgd_blur.jpg',
	'/images/resume_images/Résumé.pdf',
	'/images/resume_images/resumehead.png',
	'/images/resume_images/resumeleft.png',
	'/images/gallery_images/photo_bkgd_blur.jpg',
	'/images/photography/teaser/Belgium_blur.png',
	'/images/photography/teaser/Berlin_blur.png',
	'/images/photography/teaser/Copenhagen_blur.png',
	'/images/photography/teaser/Dresden_blur.png',
	'/images/photography/teaser/Hamburg_blur.png',
	'/images/photography/teaser/Leipzig_blur.png',
	'/images/photography/teaser/Norway_blur.png',
	'/images/photography/teaser/Paris_blur.png',
	'/images/photography/teaser/Prague_blur.png',
	'/images/photography/teaser/Stralsund_blur.png',
	'/images/photography/teaser/UK_blur.png',
	'/images/photography/teaser/Weimar_blur.png'
];

function preload() {
	for (var i = 0; i < imageFiles.length; i += 1) {
		images[i] = new Image()
		images[i].src = imageFiles[i];
	}
}

$(function() {
	preload(imageFiles);
});
