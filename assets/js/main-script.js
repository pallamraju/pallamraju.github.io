'use strict';

// Window load function
$(window).bind('load', function (e) {
    //$('.broacher-wrap').height($(window).height());
    if ($(this).width() >= 768){
        $('.broacher-wrap').css({'margin-top': -$('.header-nav-wrap').outerHeight()});
    }    
    // Pre loader script
    if ($('div').hasClass('pre-loader-wrap')) {
        $('.pre-loader-wrap').fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

// Window resize function
$(window).bind('resize', function (e) {
    if ($(this).width() >= 768) {
//        $('.broacher-wrap').height($(window).height());
//        var homeSliderWrapH = $(window).height()
//        $('.broacher-wrap').height($(window).height());
          $('.broacher-wrap').css({'margin-top': -$('.header-nav-wrap').outerHeight()});
    }
});

// Window scroll function
$(window).bind('scroll', function (e) {
    if ($(this).width() >= 768) {
        if ($(this).scrollTop() > $('.header-nav-wrap').outerHeight()) {
            $('.header-nav-wrap').addClass('sticky animated fadeInDown');
            $('.broacher-wrap > .container').css({'padding-top': $('.header-nav-wrap').outerHeight()});
            $('.sticky-layer').css({'height': $('.header-nav-wrap').outerHeight(), 'display': 'block'});
        } else {
            $('.header-nav-wrap').removeClass('sticky animated fadeInDown');
            $('.broacher-wrap > .container').css({'padding-top': -$('.header-nav-wrap').outerHeight()});
            $('.sticky-layer').css({'height': 'auto', 'display': 'none'});
        }
    }
});

// Document ready function    
$(document).ready(function (e) {
//    if ($(this).width() >= 768) {
//        $('.broacher-wrap').height($(window).height());
//    }
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});