google.load("jquery", "1.3.2");
google.load("jqueryui", "1.7.2");

//get a reference to the canvas
$(document).ready(function() {
	init();
	initParticleSystem();
});


//casousel

(function($) {
    'use strict';

    $(function() {
        $('#myCarousel').carousel();
    });
})(window.jQuery);

//dropdown hover

$(function(){
    $('.dropdown').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
});

//parallax

$(document).ready(function(){
   // cache the window object
   $window = $(window);

   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);

      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards
        var yPos = -($window.scrollTop() / $scroll.data('speed'));

        // background position
        var coords = '50% '+ yPos + 'px';

        // move the background
        $scroll.css({ backgroundPosition: coords });
      }); // end window scroll
   });  // end section function
}); // close out script
