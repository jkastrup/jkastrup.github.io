// Author:	Jason Kastrup
// Class:	WIA 03-14
// main.js
(function ($) {
	$(document).ready(function() {
		if(Modernizr.canvas){
			// Canvas is Supported
			
			// Strat Map Editor
			// Initialize color buttons
			var counter = 1;
			$.each(['#000', '#F00', '#F0F', "#0F0", "#FF0", "#0FF", "#FFF"], function() {
						$(".tools").append("<a href='#map_canvas' id='color" + counter + "' class='color' data-color='" + this + "'></a> ");
						counter++;
					});
			// Initialize Sketch.js
			$("#map_canvas").sketch();
			
			// Initialize select menu with jQuery UI
			
			
			var c = document.getElementById("map_canvas");
			var ctx = c.getContext('2d');
			var img = new Image();
			img.src = "images/maps/de_dust2.png";
			
			img.onload = function() {
				ctx.drawImage(this, 0,0);
			};
			
			// Clear Button in conjunction with 'data-clear' attribute
			$('#clear-canvas').click(function(){
				ctx.clearRect(0,0,c.width,c.height);
				var src = $("#changeMap").find(":selected").attr('name');
				img.src = src;
				ctx.drawImage(img,0,0);
			});
			
			// When Select changes, change the map
			$('#changeMap').on('change', function(){
				var src = $(this).find(":selected").attr('name');
				img.src = src;
				img.onload = function(){
					c.width = c.width;
					ctx.clearRect(0,0,c.width,c.height);
					ctx.drawImage(this, 0,0);	
				};	
			});			
		}else {
			// Pollyfill FlashCanvas.js
			var canvas = document.getElementById("map_canvas");
			if(typeof FlashCanvas != 'undefined'){
				FlashCanvas.initElement(canvas);
			};
		};
	});	// End Document.ready
	
})(jQuery);