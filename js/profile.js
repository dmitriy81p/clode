$(function(){

	$('.js-lists-open').on('click', function () {
		$('.lists-accordion__content').slideToggle(600);
		if($(window).width() > 767) {
			$('.profile-block__col-title_2').slideToggle(600);
		}
		$(this).find('i:first').toggleClass('rotated-icon');
	});

	$('.js-lists-accordion').on('click', 'li', function (e) {
		var th = $(this);
		e.stopPropagation();
		if (th.find('ul').length) {
			th.find('ul:first').slideToggle(600);
			th.find('i:first').toggleClass('rotated-icon');
		}
	});

	$('.js-lists-accordion ul ul, .lists-accordion__content, .profile-block__col-title_2').hide();

	if($('.js-styler').length) {
		$('.js-styler').styler({
			filePlaceholder: ''
		});
	};

	if($('#datepicker').length) {
		$("#datepicker").datepicker({
			 monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
			'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
			'Октябрь', 'Ноябрь', 'Декабрь'],
			 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			 firstDay: 1,
		});
	};

	if($('#timemask').length) {
		$('#timemask').mask("99:99:99");
	}

	$('.js-profile-info').click(function () {
		if ($('.js-text-change').text() == 'Развернуть') {
			$('.js-text-change').text('Свернуть') ;
		} else {
			$('.js-text-change').text('Развернуть') ;
		}
		$(this).closest('.profile-user-info__name-box').next().slideToggle(900);
		$(this).find('i').toggleClass('rotated-icon');
	});


	$('.js-fill-in-btn').click(function (e) {
		e.preventDefault();
		$(this).next().slideToggle(600);
		$(this).find('i').toggleClass('rotated-icon');
	});

	$('.profile-radio-btns label').click(function () {
		$('.profile-radio-btns label').removeClass('profile-radio-btns__item_checked');
		$(this).addClass('profile-radio-btns__item_checked');
	});

	$('.profile-apps-list__remove').click(function (e) {
		e.preventDefault();
		$(this).closest('li').remove();
	});

	$(".js-prof-tab-item").not(":first").hide();
	$(".js-prof-tabs .js-prof-tab").click(function() {
		$(this).parents('.profile-tabs_mob').toggleClass('tabs-visible');
		$(".js-prof-tabs .js-prof-tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
		$(".js-prof-tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active-tab");


	$('.js-balance').next().hide();

	$('.js-balance').click(function () {
		$(this).find('i').toggleClass('rotated-icon');
		$(this).next().slideToggle(300);
	});


	$('.profile-block_notice .update-apps__label input').change(function () {
		$(this).closest('label').toggleClass('enabled');
	});
});