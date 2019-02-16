/* Mobile menu */

(function (){

    let menuButton = $('#menu__button'),
		menuMobile = $('.nav-list'),
		menuLink = $('.nav__link'),
		menuMobileOpen = 'nav-list--active',
		footerLink = $('.nav-list--footer');


	function screenWidthCheck() {
		if (menuButton.hasClass('active')) {
	        menuButton.removeClass('active');
	    } else {
	        menuButton.addClass('active');
	    }
	};

	menuButton.on('click', function(e) {
		e.preventDefault();
		menuMobile.toggleClass(menuMobileOpen);
		screenWidthCheck();
	});

	menuLink.on('click', function() {
		menuMobile.removeClass(menuMobileOpen);
		screenWidthCheck();
	});

	// footerLink.on('click', function() {
	// 	menuMobile.removeClass(menuMobileOpen);
	// 	menuButton.removeClass('active');
	// });


	$(window).resize(function() {
		let w = $(window).width();
			if (w > 1024 ) {
			    menuMobile.removeAttr('style');
			    menuMobile.removeClass(menuMobileOpen);

			    if (menuButton.hasClass('active')) {
	       			menuButton.removeClass('active');
	       		}
			}
	});

})();