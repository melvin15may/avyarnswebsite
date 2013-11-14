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