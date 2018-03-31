export const HELPERS = {
	fixHeaderOnScroll: (element) => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 310) {
				element.classList.add('fixed-header');
			} else {
				element.classList.remove('fixed-header');
			}
		});
	}
};
