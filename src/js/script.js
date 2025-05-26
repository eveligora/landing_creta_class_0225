const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 40,

	// Navigation arrows
	navigation: {
		nextEl: '.learningSliderNext',
		prevEl: '.learningSliderPrev',
	},

	pagination: {
		el: '.learningSliderPrevPag',
		clickable: true,
	},
});

const header = document.querySelector('.header');
const toggleClass = 'on_scroll';

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll > 50) {
		header.classList.add(toggleClass);
	} else {
		header.classList.remove(toggleClass);
	}
});
