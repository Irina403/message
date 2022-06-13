
$(function () {
	$(document).scroll(function () {
		var $nav = $(".fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// jQuery(document).on("click",".navItem a", function(){
// 	$(".navItem").closest(".menu-items").removeClass("menu-toggle-open").hide();
// });

