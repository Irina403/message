$(".advantages__button").click(function() {
  $(this).toggleClass("clicked");
});

$(".advantages__button").click(function() {
	$(".advantages__item").toggleClass("active");
});

$(document).ready(()=> {
	$('.slick-slider').slick({
		arrows:true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $('.your-class-arrow'),
		prevArrow: '<img class="slick-arrow prev" src="../i/icons/icon-prev.svg" alt="" " aria-hidden="true"></img>',
		nextArrow: '<img class="slick-arrow next" src="../i/icons/icon-next.svg" alt="" " aria-hidden="true"></img>'
		
	});

	$('.slider-gallery').slick({
		arrows:true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		appendArrows: $('.slider-gallery__arrow'),
		prevArrow: '<img class="slick-arrow prev-slider2" src="../i/icons/icon-prev.svg" alt="" " aria-hidden="true"></img>',
		nextArrow: '<img class="slick-arrow next-slider2" src="../i/icons/icon-next.svg" alt="" " aria-hidden="true"></img>'
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



		document.addEventListener("click", function(e){
			let $elem = e.elem;
			$elem = $elem.closest('[data-id="advant"]');
			document.querySelector($elemt.dataset.elem).classList.add('active');
		})





});

