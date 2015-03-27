// Author:	Jason Kastrup
// Class:	WIA 03-14
// main.js
(function ($) {
	$(document).ready(function() {
		// Hide Video Elements if not supported
		if(!Modernizr.video){
			$("#panel-videos .panel-col:first").html("<iframe width='420' height='315' src='http://www.youtube.com/embed/XGSy3_Czz8k'></iframe>");
		};
		// Defines the snappable scrolling found on index.html
		$(document).scrollsnap({
			snaps: '.snap',
			proximity: 200,	// About half of the height of a panel
			offset: -195	// offset equal to fixed header height
		});
		
		if(!Modernizr.canvas){
			$("#logo_canvas").sketch();
			$("#logo_canvas").css('background-image','url(images/csoutcrowd_banner_small.jpg)');
			
		}else{
			// Pollyfill with img tag
			$("#logo_link").html('<img src="images/csoutcrowd_banner.jpg" title="CS Out Crowd" alt="CS Out Crowd" />');
		};
		

		
		// Tips & Tricks
		// Button Icon functionality
		// Hide all tips, but first
		$(".tip").hide();
		$('.tip').addClass('hidden');
		$(".tip:first").show().removeClass('hidden')
			.siblings('h2').css('text-decoration', 'underline');
		
		// Click functionality for Button Icon
		$(".tip-btn").click(function(e){
			var btn = e.currentTarget;
			var tip = $(btn).siblings('.tip');
			
			// Decided against using .toggle() in order to change the Button Icon
			if( $(tip).hasClass('hidden') ){
				// Show Tip
				$(tip).show(500);
				$(tip).removeClass('hidden');
				// Change Icon & underline Title
				$(btn).children('span').removeClass('fa-arrow-circle-o-right').addClass('fa-arrow-circle-o-down');
				$(btn).siblings('h2').css('text-decoration', 'underline');
			}else{
				// Remove Tip
				$(tip).hide(500);
				$(tip).addClass('hidden');
				//Change Icon & remove underline
				$(btn).siblings('h2').css('text-decoration', 'none');
				$(btn).children('span')
					.removeClass('fa-arrow-circle-o-down')
					.addClass('fa-arrow-circle-o-right');
			}
		});
		
		
		
	});	// End Document.ready
	
})(jQuery);