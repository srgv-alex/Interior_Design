$(document).ready(function () {
	$('.header-slider').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 600,
		margin: 5,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});

	$('.slider-next').click(function () {
		$('.header-slider').trigger('next.owl.carousel');
	});
	$('.slider-prev').click(function () {
		$('.header-slider').trigger('prev.owl.carousel');
	});
});
