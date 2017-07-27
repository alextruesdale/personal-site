

// $(document).ready(function() {
//     $("testbtn").click(function(event) {
//         console.log(event.target.id);
//     });
// });

console.log("here");

$(document).ready(function() {
	$("#testbtn").click(function() {
		console.log("here2");

		var target = "#" + event.target.id;
		console.log(target);
	});
});