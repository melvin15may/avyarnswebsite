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

$('.container-fluid > #business > .container-fluid > row > .polyster').hover(function() {
        $(this).find('.container-fluid > #business > .container-fluid > row > .polyster > .polyster-head').hide();
        $(this).find('.container-fluid > #business > .container-fluid > row > .polyster > .polyster-div').show();
    }, function() {
        $(this).find('.container-fluid > #business > .container-fluid > row > .polyster > .polyster-div').hide();
        $(this).find('.container-fluid > #business > .container-fluid > row > .polyster > .polyster-head').show();
});

if (window.console) console.log('foo');

$('.switch').hover(function() {
    if (window.console) console.log('HOvering');
        $(this).find('.avg_words').hide();
        $(this).find('.avg_num').show();
    }, function() {
        if (window.console) console.log('HOvering');
        $(this).find('.avg_num').hide();
        $(this).find('.avg_words').show();
});

function polyster_mousein(){
    var x = document.getElementsByClassName("polyster-div");
    x[0].style.display = "block";
    x = document.getElementsByClassName("polyster-head");
    x[0].style.display = "none";
}

function cotton_mousein(){
    var x = document.getElementsByClassName("cotton-div");
    x[0].style.display = "block";
    x = document.getElementsByClassName("cotton-head");
    x[0].style.display = "none";
}

function acrylic_mousein(){
    var x = document.getElementsByClassName("acrylic-div");
    x[0].style.display = "block";
    x = document.getElementsByClassName("acrylic-head");
    x[0].style.display = "none";
}

function polyster_mouseout(){
    var x = document.getElementsByClassName("polyster-div");
    x[0].style.display = "none";
    x = document.getElementsByClassName("polyster-head");
    x[0].style.display = "block";
}

function cotton_mouseout(){
    var x = document.getElementsByClassName("cotton-div");
    x[0].style.display = "none";
    x = document.getElementsByClassName("cotton-head");
    x[0].style.display = "block";
}

function acrylic_mouseout(){
    var x = document.getElementsByClassName("acrylic-div");
    x[0].style.display = "none";
    x = document.getElementsByClassName("acrylic-head");
    x[0].style.display = "block";
}
