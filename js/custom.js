(function ($) {
	var images = [
		"http://images.dealersync.com/cloud/userdocumentprod/2239/ServiceDeals/854f1203-8641-4c42-843f-5fc68153c5e5.jpg",
		"https://i.ytimg.com/vi/mSPXqLdzyx4/maxresdefault.jpg",
		"https://i.ytimg.com/vi/QKzuhxwjkvI/maxresdefault.jpg",
		"https://carfromjapan.com/wp-content/uploads/2016/11/brake-replacement.jpg"
	];

	var index = 0;
	document.getElementById("intro").getElementsByClassName( 'background' )[0].style.backgroundImage = "url('"+images[index]+"')";
	setInterval(function(){
		index = index + 1;
		if(index == images.length)
			index = 0;
		document.getElementById("intro").getElementsByClassName( 'background' )[0].style.backgroundImage = "url('"+images[index]+"')";
	}, 3000);
	new WOW().init();
	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
