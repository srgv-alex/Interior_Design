accordion('#accordion-1', true);
accordion('#accordion-2');

function accordion(selector, onlyOne = false) {
	const accordionWrapper = document.querySelector(selector);
	const accordionBtns = accordionWrapper.querySelectorAll('.accordion__btn');

	accordionBtns.forEach(function (btn) {
		if (onlyOne) {
			btn.addEventListener('click', showOnlyCurrentContent);
		} else {
			btn.addEventListener('click', showContent);
		}

		function showContent(event) {
			event.preventDefault();

			const currentItem = btn.closest('.accordion__item');
			const currentContent = currentItem.querySelector(
				'.accordion__content'
			);

			currentItem.classList.toggle('active');

			if (currentItem.classList.contains('active')) {
				currentContent.style.maxHeight =
					currentContent.scrollHeight + 'px';
			} else {
				currentContent.style.maxHeight = 0;
			}
		}

		function showOnlyCurrentContent(event) {
			event.preventDefault();

			const currentItem = btn.closest('.accordion__item');
			const currentContent = currentItem.querySelector(
				'.accordion__content'
			);

			// Если кликаем по уже активному элементу, то скрываем его
			if (currentItem.classList.contains('active')) {
				currentItem.classList.remove('active');
				currentContent.style.maxHeight = 0;
			} else {
				// Если клик по неактивному элементу
				// тогда скрываем все остальные
				// и открываем текущий

				// Убираем все активные блоки
				const accordionItems =
					accordionWrapper.querySelectorAll('.accordion__item');
				accordionItems.forEach(function (item) {
					item.classList.remove('active');
				});

				// Скрываем все открытые панели
				const contentBlocks = accordionWrapper.querySelectorAll(
					'.accordion__content'
				);
				contentBlocks.forEach(function (block) {
					block.style.maxHeight = 0;
				});

				// Делаем активным текущий блок
				currentItem.classList.add('active');

				// Отображаем текущий контент
				currentContent.style.maxHeight =
					currentContent.scrollHeight + 'px';
			}
		}
	});
}
