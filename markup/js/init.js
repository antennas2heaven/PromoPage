$(document).ready(function() {
	$(".slides").slick({
		responsive: [
			{
				breakpoint: 480,
				settings: { arrows: false }
			},
			{
				breakpoint: 769,
				settings: { arrows: false }
			}
		]
	});

	$('input[type="range"]').rangeslider({
		polyfill: false
	});

	$('.datepicker').pickadate({
		min: 1,
		max: 17,
		today: "",
		clear: "",
		close: ""
	});
});