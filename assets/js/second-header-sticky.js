/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header-one').outerHeight() - 40;

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            //$('header').addClass('nav-up');
            $('.nav-tab-mountx').css({'top': -$('.header-one').outerHeight()});
            //$('.header-two').css({'height': 60, 'background-color': 'rgba(244, 244, 244, 0.6)'});
            $('.header-two').css({'height': 60, 'padding-top':0});
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.nav-tab-mountx').css({'top': 0});
                //$('.header-two').css({'height': 120, 'background-color': 'rgba(244, 244, 244, 1)'});
                $('.header-two').css({'height': 80, 'padding-top':30});
            }
        }
        lastScrollTop = st;
    }
});