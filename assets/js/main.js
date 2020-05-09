$(document).ready(function ($) {
    
    // wow js here
    new WOW().init();

    // owl carousel here
    $('.owl-carousel').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
}(jQuery));