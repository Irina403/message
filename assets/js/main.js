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
})










