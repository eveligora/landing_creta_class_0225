const swiper = new Swiper('.swiper', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.learningSliderNext',
		prevEl: '.learningSliderPrev',
	},

	pagination: {
		el: '.learningSliderPrevPag',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
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
