$(document).ready(function () {
	$('.header-slider').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 700,
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

	Fancybox.bind('[data-fancybox]', {
		Toolbar: {
			display: {
				left: [],
				middle: [],
				right: ['close'],
			},
		},
	});

	var show = true;
	var countbox = '.animated-number';
	$(window).on('scroll load resize', function () {
		if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height(); // Высота окна браузера
		var d_height = $(document).height(); // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if (
			w_top + 500 >= e_top ||
			w_height + w_top == d_height ||
			e_height + e_top < w_height
		) {
			$('.num').css('opacity', '1');
			$('.num').spincrement({
				thousandSeparator: '',
				duration: 2000,
			});

			show = false;
		}
	});
});
