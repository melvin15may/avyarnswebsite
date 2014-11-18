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

//business section navigation


$(function(){
    var PlastScroll=$(".polyster").offset().top - 400;
    var PdivHeight=$(".polyster").height();
    var Pscroll;
    var AlastScroll=$(".acrylic").offset().top - 390;
    var AdivHeight=$(".acrylic").height();
    var Ascroll;
    var ClastScroll=$(".cotton").offset().top - 400;
    var CdivHeight=$(".cotton").height();
    var Cscroll;
    $(window).scroll(function(){
        var Pscroll = $(this).scrollTop() - PlastScroll;
        $(".polyster").height(PdivHeight+Pscroll);
        if($(".polyster").height() == 200)$(".polyster-div").show();
        var Ascroll = $(this).scrollTop() - AlastScroll;
        $(".acrylic").height(AdivHeight+Ascroll);
        var Cscroll = $(this).scrollTop() - ClastScroll;
        $(".cotton").height(CdivHeight+Cscroll);
      });
})

$(function() {
    $("#ri-grid").gridrotator( {
        animSpeed : 500,
        animType : "rotateBottom",
        w320 : {
            rows : 3,
            columns : 4
        },
        w240 : {
            rows : 3,
            columns : 3
        },
        slideshow : false,
        onhover : true
    } );
})
