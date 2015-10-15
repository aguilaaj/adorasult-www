var setAdorasult = function () {
	$.getJSON("http://adorasult-52423.onmodulus.net/")
		.done(function (adorasult) {
			$(".adoratext").html(adorasult.insult);
		})
};
 
$(document).ready(function () {
	$(".adorabutton").click(setAdorasult);
	setAdorasult();
});
