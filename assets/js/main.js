$('.advantages__button').click(function() {
	var id = $(this).attr('data-trigger'),
		content = $('.advantages__item[data-trigger="'+ id +'"]');
	// $('.advantages__button').removeClass('clicked'); // 1
	$(this).toggleClass('clicked'); // 2
	// $('.advantages__item').removeClass('active'); // 3
	content.toggleClass('active'); // 4
 });

//  $('.advantages__button').click(function() {
// 	var id = $(this).attr('data-trigger'),
// 		content = $('.advantages__item[data-trigger="'+ id +'"]');
// 	$('.advantages__button').removeClass('clicked'); // 1
// 	$(this).addClass('clicked'); // 2
// 	$('.advantages__item').removeClass('active'); // 3
// 	content.addClass('active'); // 4
//  });


$(document).ready(()=> {
	$('.slick-slider').slick({
		arrows:true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.your-class-arrow'),
		prevArrow: '<img class="slick-arrow prev" src="../i/icons/icon-prev.svg" alt="" " aria-hidden="true"></img>',
		nextArrow: '<img class="slick-arrow next" src="../i/icons/icon-next.svg" alt="" " aria-hidden="true"></img>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
		]
		
	});

	$('.slider-gallery').slick({
		arrows:true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,

		appendArrows: $('.slider-gallery__arrow'),
		prevArrow: '<img class="slick-arrow prev-slider2" src="../i/icons/icon-prev.svg" alt="" " aria-hidden="true"></img>',
		nextArrow: '<img class="slick-arrow next-slider2" src="../i/icons/icon-next.svg" alt="" " aria-hidden="true"></img>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
		]
	});
})

$('.video').parent().click(function () {
	if($(this).children(".video").get(0).paused){        
			$(this).children(".video").get(0).play();  
			$(this).children(".video-is-playing").fadeOut();
		}else{       
				$(this).children(".video").get(0).pause();
	$(this).children(".video-is-playing").fadeIn();
		}
});


document.addEventListener("DOMContentLoaded", function(){

	document.addEventListener('click', function (e) {
		// var scrollbar = document.body.clientWidth - window.innerWidth + 'rem';
		let $target = e.target;
		if ($target.closest('[data-toggle="modal"]')) {
			e.preventDefault();
			$target = $target.closest('[data-toggle="modal"]');
			document.querySelector($target.dataset.target).classList.add('open');
			//выключить скролл под модальным окном
			// document.body.style.overflow = 'hidden';

		} else if ($target.dataset.close === 'modal') {
			// e.preventDefault();
			$target.closest('.modal').classList.remove('open');
			//включить скролл после закрытия модального окна
			// document.body.style.overflow = 'visible'; 
		}
	});



		// document.addEventListener("click", function(e){
		// 	let $elem = e.elem;
		// 	$elem = $elem.closest('[data-id="advant"]');
		// 	document.querySelector($elemt.dataset.elem).classList.add('active');
		// });


	// var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    // jsContents = document.querySelectorAll('.js-tab-content');

	// 	jsTriggers.forEach(function(trigger) {
	// 	trigger.addEventListener('click', function() {
	// 		var id = this.getAttribute('data-tab'),
	// 			content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
	// 			activeTrigger = document.querySelector('.js-tab-trigger.active'),
	// 			activeContent = document.querySelector('.js-tab-content.active');
			
	// 		activeTrigger.classList.remove('active');
	// 		trigger.classList.add('active');
			
	// 		activeContent.classList.remove('active');
	// 		content.classList.add('active');
	// 	});
	// 	});


});

