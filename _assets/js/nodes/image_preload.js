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
	'/images/photography/teaser/Belgium_blur.jpg',
	'/images/photography/teaser/Berlin_blur.jpg',
	'/images/photography/teaser/Copenhagen_blur.jpg',
	'/images/photography/teaser/Dresden_blur.jpg',
	'/images/photography/teaser/Hamburg_blur.jpg',
	'/images/photography/teaser/Leipzig_blur.jpg',
	'/images/photography/teaser/Norway_blur.jpg',
	'/images/photography/teaser/Paris_blur.jpg',
	'/images/photography/teaser/Prague_blur.jpg',
	'/images/photography/teaser/Stralsund_blur.jpg',
	'/images/photography/teaser/UK_blur.jpg',
	'/images/photography/teaser/Weimar_blur.jpg'
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
