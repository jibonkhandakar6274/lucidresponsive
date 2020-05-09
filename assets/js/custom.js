// $(document).ready(function () {
//     $('.go-top-btn a').click(function () {
//         $('html , body').animate({
//             "scrollTop": "0"
//         }, 2000);
//     });

//     $('.go-top-btn a').hide(); //eita na dile default vabe button eshe thkbe website load dewar pore

//     $(window).scroll(function () {
//         var ourwindow = $(window).scrollTop();
//         if (ourwindow < 200) {
//             $('.go-top-btn a').fadeOut();
//         } else {
//             $('.go-top-btn a').fadeIn();

//         }
//     });

//     $(window).scroll(function () {
//         var ourwindow = $(window).scrollTop();
//         if (ourwindow > 200) {
//             $('.topbar').hide();
//             $('.main-menu').addClass('position');
//         } else {
//             $('.topbar').show();
//             $('.main-menu').removeClass('position');
//         }
//     });

//     $('.navbar-nav a[href^="#"]').click(function (e) {
//         e.preventDefault();
//         var targetscroll = this.hash;

//         $('html , body').animate({
//             scrollTop: $(targetscroll).offset().top - 60
//         }, 500);
//     });

// });

$(document).ready(function () {

    // sticky header
    $(window).scroll(function () {
        var ourwindow = $(window).scrollTop();
        
        if (ourwindow > 500) {
            $('header').addClass('top-fixed');
        }
        else {
            $('header').removeClass('top-fixed');
        }
    });

    // go to menu by clicking menu title
    $('.navbar-nav a[href^="#"]').click(function (e) {
        e.preventDefault();
        var targetscroll = this.hash;
        $('html,body').animate({
            scrollTop: $(targetscroll).offset().top - 60
        },1000);
    });

    // active menu
    $('.navbar-nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active'); 
    });

    // lucid-btn click & goto specific section
    $('.lucid-btn a[href^="#"]').click(function (e) {
        e.preventDefault();
        var target_btn = this.hash;
        $('html,body').animate({
            scrollTop: $(target_btn).offset().top - 60
        }, 1000);
    });

    // go-top-btn 
    $(window).scroll(function () {
        var scrollresult = $(window).scrollTop();
        if (scrollresult<200) {
            $('a.go-top-btn').fadeOut();
        }
        else {
            $('a.go-top-btn').fadeIn();
        }

        $('a.go-top-btn').click(function () {
            $('html,body').animate({
                scrollTop : 0
            },1000);
       });
    });
  
});