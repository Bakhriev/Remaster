const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const navigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const elements = [burger, navigation, overlay]

	const toggleActiveClass = () =>
		elements.forEach(element => element.classList.toggle('active'))

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
		}
	})
}
burgerMenu()

const dropdownInit = () => {
	const allDropdowns = document.querySelectorAll('[data-dropdown]')

	if (window.innerWidth > 992.98) {
		document.addEventListener('click', e => {
			let currentDropdown
			if (e.target.closest('[data-dropdown]')) {
				currentDropdown = e.target.closest('[data-dropdown]')
				currentDropdown.classList.toggle('active')
			}

			document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
				if (dropdown === currentDropdown) return
				dropdown.classList.remove('active')
			})
		})
	} else {
		allDropdowns.forEach(drp => {
			drp.addEventListener('click', () => {
				const subMenu = drp.querySelector('.dropdown__menu')
				if (!subMenu.style.maxHeight) {
					const allSubMenus = document.querySelectorAll('.dropdown__menu')
					allSubMenus.forEach(sub => {
						sub.style.maxHeight = ''
					})
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
				} else {
					subMenu.style.maxHeight = ''
				}
			})
		})
	}
}

dropdownInit()

const swiper = new Swiper('.feedback-swiper', {
	// If we need pagination
	slidesPerView: 1,

	pagination: {
		el: '.feedback-swiper__pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.feedback-swiper__next',
		prevEl: '.feedback-swiper__prev',
	},

	breakpoints: {
		320: {
			spaceBetween: 30,
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		800: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1200: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
})

const swiper1 = new Swiper('.team-swiper', {
	slidesPerView: 5,

	// Navigation arrows
	navigation: {
		nextEl: '.team-swiper__next',
		prevEl: '.team-swiper__prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 5,
		},
	},
})
