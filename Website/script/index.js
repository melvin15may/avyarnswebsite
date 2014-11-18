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

$(document).ready(function($) {

    // hide messages
    $(".error").hide();
    $(".success").hide();

    $('#contactForm input').click(function(e) {
        $(".error").fadeOut();
    });

    // on submit...
    $("#contactForm #submit").click(function() {
        $(".error").hide();

        //required:

        //name
        var name = $("input#name").val();
        if(name == ""){
            //$("#error").fadeIn().text("Name required.");
            $('#fname').fadeIn('slow');
            $("input#name").focus();
            return false;
        }

        //email (check if entered anything)
        var email = $("input#email").val();
        //email (check if entered anything)
        if(email == ""){
            //$("#error").fadeIn().text("Email required");
            $('#fmail').fadeIn('slow');
            $("input#email").focus();
            return false;
        }

        //email (check if email entered is valid)

        if (email !== "") {  // If something was entered
            if (!isValidEmailAddress(email)) {
                $('#fmail').fadeIn('slow'); //error message
                $("input#email").focus();   //focus on email field
                return false;
            }
        }

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};




        // comments
        var comments = $("#msg").val();

        if(comments == ""){
            //$("#error").fadeIn().text("Email required");
            $('#fmsg').fadeIn('slow');
            $("input#msg").focus();
            return false;
        }
    });


    // on success...
     function success(){
        $("#success").fadeIn();
        $("#contactForm").fadeOut();
     }

    return false;
});

