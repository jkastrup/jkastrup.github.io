// gallery.js
// Functions for image gallery

$(document).ready(function(){
	var default_preview = "images/gallery/01_med.jpg";
	$(".gallery_preview").html('<a class="overlayLink" title="De_tuscan has a very rustic and gritty vibe" href="images/gallery/01.jpg" style="background-image:url('+ default_preview +');"></a>');
	setFancyBoxLinks();
	
	$(".gallery_thumbnails a").click(function(e){
		// Disable links
		e.preventDefault();
		
		// Create var to hold the links from thumbnails
		var photo_fullsize = $(this).attr('href');
		var photo_caption = $(this).attr('title');
		
		// Create preview link
		var photo_preview = "images/gallery/" + photo_fullsize.slice(15,17) + "_med.jpg";
		console.log(photo_preview);
		console.log(photo_fullsize);
		
		// Slide caption
		$(".gallery_caption").slideUp(300);
		
		// Fade out preview area
		$(".gallery_preview").fadeOut(500, function(){
			// Preload 'Clicked' image
			$('.gallery_preload_area').html('<img src="' + photo_preview + '" />');
			
			// Test for preload image
			$(".gallery_preload_area img").imgpreload(function(){
				//Change picture and link for preview area
				$(".gallery_preview").html('<a class="overlayLink" title="' + photo_caption + '" href="' + photo_fullsize + '" style="background-image:url(' + photo_preview + ');"></a>');		
				
				// Fade in preview area
				$(".gallery_preview").fadeIn(500);
				$(".gallery_caption").html('<p>' + photo_caption + '</p><p><a class="overlayLink fa fa-search" title="' + photo_caption + '" href="' + photo_fullsize + '">View Larger</a></p>');
				
				// Slide down caption
				$(".gallery_caption").slideDown(700);
				
				// Set fancybox links
				setFancyBoxLinks();
			});			
			
		});
		
		
	});	// end .click()
	
});	// End document.ready


function setFancyBoxLinks(){
	$("a.overlayLink").fancybox({
		'titlePosition': 'over',
		'overlayColor': '#000',
		'overlayOpacity': 0.8,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'autoScale': true
	});
		
}	// end setFancyBoxLinks()





