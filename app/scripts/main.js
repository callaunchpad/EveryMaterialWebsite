$(function() {
	$('.parallax').parallax();

	$('.about-btn').click(function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 1000, "swing");
	});
	$('.intro-btn').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000, "swing");
	});
});