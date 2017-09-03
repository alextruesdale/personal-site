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
];

function preload(imageFiles) {
	for (var i = 0; i < imageFiles.length; i++) {
		images[i] = new Image()
		images[i].src = imageFiles[i];
	};
};

preload(imageFiles);
