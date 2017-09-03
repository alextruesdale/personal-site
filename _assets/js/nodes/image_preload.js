var images = new Array();
var imageFiles = [
	"/images/index_background/backgroundblue2.png",
	"/images/index_background/backgroundblue1.png",
	"/images/index_background/backgroundred2.png",
	"/images/index_background/backgroundred1.png",
	"/images/404small.png",
	"/images/404.png",
	"/images/about_images/about_bkgd.png",
	"/images/resume_images/Résumé.pdf",
	"/images/gallery_images/photo_bkgd.png",
	"/images/photography/teaser/Belgium.png",
	"/images/photography/teaser/Berlin.png",
	"/images/photography/teaser/Copenhagen.png",
	"/images/photography/teaser/Dresden.png",
	"/images/photography/teaser/Hamburg.png",
	"/images/photography/teaser/Leipzig.png",
	"/images/photography/teaser/Norway.png",
	"/images/photography/teaser/Paris.png",
	"/images/photography/teaser/Prague.png",
	"/images/photography/teaser/Stralsund.png"
];

function preload(imageFiles) {
	for (var i = 0; i < imageFiles.length; i++) {
		images[i] = new Image()
		images[i].src = imageFiles[i];
	};
};

preload(imageFiles);
