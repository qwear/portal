'use strict';
(function($, window, document) {
	if($('.zag_gamb').length) {
		var pull  = $('.zag_gamb');
	    var menu_mobile   = $('.hidden_menu');
	    var menu_mobileHeight = menu_mobile.height();
	   $(pull).on('click', function(e) {
	    e.preventDefault();
	    menu_mobile.slideToggle();
	   });
	}

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false
    });

	$('.language .sel-lang').click(function (e){
		e.preventDefault();
		$(this).parent().toggleClass('open');
		return false;
	});

	var w = $('.swiper-pagination').width();
	var pl = $(window).width() > 1200 ? 470 : 0;
	var mL = (w/2*-1) + pl;
	$('.swiper-pagination').css('marginLeft', mL);
}(window.jQuery, window, document));