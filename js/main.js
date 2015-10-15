$.getJSON("http://adorasult-52423.onmodulus.net/", {dataType: "jsonp"})
	.done(function(adorasult) {
		$(".adorasult").html(adorasult.insult);
	})
