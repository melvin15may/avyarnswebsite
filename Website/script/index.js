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

/*

$(function(){
    $(".polyster, .acrylic, .cotton").click(function() {
        var width = $(this).parent().width();
        var bigheight = 0.246 * width;
        $(".img-circle").stop().animate({
            top: 15
        }, 1000)
        $(this).stop().animate({
            height: bigheight + 'px'
        }, 1000 );
    });
    $(".polyster .acrylic .cotton").mouseleave(function(){
        var t=$(this).attr('class');
        var p=t.substring(9,t.length)+"-div";
        console.log(p);
        $(".img-circle").stop().animate({
            top: "-100px"
        }, 1000)
        $(this).parent().children().each(function() {
            $(this).stop().animate({
                height: '90px'
            }, 1000 );
        });
});
});
*/
$(function(){
    var PlastScroll=$(".polyster").offset().top - 440;
    var PdivHeight=$(".polyster").height();
    var Pscroll;
    var AlastScroll=$(".acrylic").offset().top - 430;
    var AdivHeight=$(".acrylic").height();
    var Ascroll;
    var ClastScroll=$(".cotton").offset().top - 420;
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
