$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});
/* viewport width */
function viewport(){
	var e = window, 
	a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$body = $('body');
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', '');});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder);  			
		});
	});
	/* placeholder*/

	$('.js-touch-menu').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.nav-list').toggleClass('active');
		$body.toggleClass('no-scroll');
		$('header').toggleClass('z-index-change');
		return false;
	});

	$('.js-touch-menu_footer').click(function(){
		$(this).toggleClass('active');
		$(this).parent().find('.nav-list').toggleClass('active');
		return false;
	});

	$('.js-header__apps').on('click', function () {
		$(this).find('.apps-list').slideToggle();
	});


	$(".js-prof-tab-item").not(":first").css('display','none');
	$(".js-prof-tabs .js-prof-tab").click(function() {
		$(".js-prof-tabs .js-prof-tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
		$(".js-prof-tab-item").css('display', 'block').eq($(this).index()).css('display','block')
	}).eq(0).addClass("active-tab");


	$header__tel = $('.header__tel');
	$header = $('.header');

	$('.js-header__mob-tel').on('click', function () {
		$header.toggleClass('sub-tel-open');
		$(this).toggleClass('active');
		$header__tel.toggleClass('active');
		$('.nav-list').toggleClass('sub-active');
		$body.toggleClass('no-scroll');
		return false;
	});
	/* components */
	
	
	if($('.slick-main').length) {
		$('.slick-main').slick({
			dots: true,
			infinite: false,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	};
	if($('.review-slider').length) {
		$('.review-slider').slick({
			dots: false,
			infinite: false,
			arrows: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-button slick-button_prev"><i class="icon-arrow-slider"></div>',
			nextArrow: '<div class="slick-button slick-button_next"><i class="icon-arrow-slider-next"></div>',
			responsive: [
			{
				breakpoint: 1320,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings:{
					arrows: false,
					slidesToShow: 2.32,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 550,
				settings:{
					arrows: false,
					slidesToShow: 1.32,
					slidesToScroll: 1,
				}
			}
			]
		});
	};

		// review all
		$review__overlay = $('.review__overlay');
		$review_slider__overlay = $('.review-slider__overlay');
		$slick_button = $('.review .slick-button');
		$review_slider_mob = $('.review-slider-mob');
		$window_wid = $(window).width();

		$('.js-review-slider__read').on('click', function (event) {
			event.preventDefault();
			
			$('.partners').addClass('hide');
			$('.footer-nav .nav-list').addClass('hide');
			$slick_button.addClass('hide');
			$review__overlay.removeClass('hide');
			$review_slider__overlay.removeClass('hide');
			$('.review-slider__lihk').addClass('hide');
			$review_slider__cont = $(this).parents('.review-slider__cont').clone();
			$review_slider__all = $(this).parents('.review-slider__item').find('.review-slider__all');
			$review_slider__cont.appendTo($review_slider__all);
			$('.js-review-slider__close').on('click', function (event) {
				event.preventDefault();
				$('.partners').removeClass('hide');
				$('.footer-nav .nav-list').removeClass('hide');
				$review_slider__all.find('.review-slider__cont').remove();
				$review__overlay.addClass('hide');
				$review_slider__overlay.addClass('hide');
				$('.review-slider__lihk').removeClass('hide');
				$slick_button.removeClass('hide');

			});
			jQuery(function($){
				$(document).mouseup(function (e){ // событие клика по веб-документу
					var div = $(".review-slider__all"); // тут указываем ID элемента
					if (!div.is(e.target) // если клик был не по нашему блоку
						&& div.has(e.target).length === 0) { // и не по его дочерним элементам
						$('.partners').removeClass('hide');
					$('.footer-nav .nav-list').removeClass('hide');
					$review_slider__all.find('.review-slider__cont').remove();
					$review__overlay.addClass('hide');
					$review_slider__overlay.addClass('hide');
					$('.review-slider__lihk').removeClass('hide');
					$slick_button.removeClass('hide');
				}
			});
			});
		});

		$('.js-review-slider__read_mob').on('click', function (event) {
			event.preventDefault();
			$body.addClass('no-scroll');
			$('.partners').addClass('hide');
			$('.footer-nav .nav-list').addClass('hide');
			$review_slider__cont = $(this).parents('.review-slider__cont').clone();
			$review_slider__cont.appendTo($review_slider_mob);
			$review_slider_mob.addClass('active');
			$review_slider_mob.find('.review-slider__lihk').addClass('hide');
			$('.js-mobile-menu_review').on('click', function (event) {
				event.preventDefault();
				$review_slider_mob.find('.review-slider__cont').remove();
				$review_slider_mob.removeClass('active');
				$('.partners').removeClass('hide');
				$('.footer-nav .nav-list').removeClass('hide');
				$body.removeClass('no-scroll');
			});
		});

// review all

// counter

function tarif(){
	var tarif_total = 0;
	$('.counter-summ').each(function(){
		tarif_total += parseInt($(this).html());
	});
	return tarif_total;
}

$('.counter__input input').each(function() {
	var count_val = $(this).val();
	if (count_val < 1){
		$(this).parents('.counter__button').find('.counter__link-prev').addClass('diseble');
	} else {
		$(this).parents('.counter__button').find('.counter__link-prev').removeClass('diseble');
	}
});

$('.counter__link-prev').click(function() {
	var $price = $(this).closest('.counter').find('.counter-price').html();
	var $summ = $(this).closest('.counter').find('.counter-summ');
	var $input = $(this).closest('.counter').find('input');
	var count = parseInt($input.val()) - 1;
	var count_val = $input.val();
	if (count_val < 2){
		$(this).addClass('diseble');
	} else {
		$(this).removeClass('diseble');
	}
	count = count < 1 ? 0 : count;
	$input.val(count);
	$input.change();
	$summ.text(parseInt($price) * count);
	// tarif_1 = tarif();
	$('.tarif-total__val').text(tarif);
	return false;
	
});
$('.counter__link-next').click(function() {
	var $price = $(this).closest('.counter').find('.counter-price').html();
	var $summ = $(this).closest('.counter').find('.counter-summ');
	var $input = $(this).closest('.counter').find('input');
	var count = parseInt($input.val()) + 1;
	count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
	$input.val(count);
	var count_val = $input.val();
	if (count_val > 1){
		$(this).closest('.counter').find('.counter__link-prev').removeClass('diseble');
	} else {
		$(this).closest('.counter').find('.counter__link-prev').removeClass('diseble');
	}
	$input.change();
	$summ.text(parseInt($price) * count);
	// tarif_1 = tarif();
	$('.tarif-total__val').text(tarif);
	return false;
});


// counter





/* components */
// mCustomScrollbar
if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{
				updateOnContentResize:true,
				updateOnImageLoad:"auto",
				autoUpdateTimeout:30
			},
		});
	};

	     // mask phone
	     if ($('.js-mask').length) {
	     	$('.js-mask').each(function() {
	     		$(this).mask("+7 (999) 999 99 99");
	     	});
	     }
	     
	     $('.js-nav-list__link').on('click', function () {
	     	$header.addClass('sub-nav-oppen');
	     	$(this).parents('.nav-list__item').find('.nav-list__sub').addClass('active');
	     	$('.nav-list').addClass('sub-active');
			// $body.addClass('no-scroll');
		});
	     $('.js-tarif-list__title-mob').on('click', function () {
	     	$header.removeClass('sub-nav-oppen');
		// $('.nav-list__sub').slideToggle();
		$('.nav-list').removeClass('sub-active');
		$('.nav-list__sub').removeClass('active');
		// $body.removeClass('no-scroll');
	});

	   });

function moveElement(target, destination) {
	$(target).detach().appendTo(destination);
	// $(targetElement);
}

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	$products_list__button = $('.products-list__button');
	$products_list = $('.products-list');
	$button_tab_wrap = $('.button-tab-wrap');
	$products_list_sub_button_in = $('.products-list-sub_button-in');
	if (viewport_wid <= 1200) {
		$products_list__button.appendTo($button_tab_wrap);
		
	} else {
		$products_list__button.appendTo($products_list_sub_button_in);
	}	



	if (viewport_wid < 661) {
		if($('.profile-radio-btns #js-select-date').length) {
			moveElement('#js-select-date', '.label-select-date');
		}
	} else {
		if($('.label-select-date #js-select-date').length) {
			moveElement('#js-select-date', '.profile-radio-btns');
		}
	}

	if (viewport_wid <= 767) {
		$('.js-nav-list__link').on('click', function () {
			$body.addClass('no-scroll');
		});
		$('.js-tarif-list__title-mob').on('click', function () {
			$body.removeClass('no-scroll');
		});
		
	}

	if (viewport_wid >= 1024) {
		$('.profile-box').show();
	}
	$(function() {
		$('.slick-main__slid').each(function(){
			var srcImg = $(this).find('.slick-main__img').attr('src');
			$(this).css({'background-image':'url('+srcImg+')'});
            // return false;
          });
	});

	$(function() {
		$('.news-list__img').each(function(){
			var srcImg = $(this).find('img').attr('src');
			$(this).css({'background-image':'url('+srcImg+')'});
            // return false;
          });
		$('.features__img').each(function(){
			var srcImg = $(this).find('img').attr('src');
			$(this).css({'background-image':'url('+srcImg+')'});
            // return false;
          });
	});
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



