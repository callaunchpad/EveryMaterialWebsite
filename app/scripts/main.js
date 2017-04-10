$(function() {
	$('.parallax').parallax();

	$('.about-btn').click(function() {
		$('html, body').animate({
			scrollTop: $('#about').offset().top
		}, 1000, 'swing');
	});
	$('.intro-btn').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000, 'swing');
	});

	$('#intro h1').addClass('animated fadeInUp');
	setTimeout(function() {
		$('#intro h4').addClass('animated fadeInUp');
	}, 300);
	setTimeout(function() {
		$('#intro a').addClass('animated zoomIn');
		$('#intro a').css('opacity', 1);
	}, 800);
});
