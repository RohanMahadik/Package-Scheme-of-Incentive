(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    $('.btn-next').click(function() {
       
        alert("ksdfmk");
        e.preventDefault();
        $('.nav-pills .active').parent().next('li').find('a').trigger('click');
    });
    
    $('.btnPrevious').click(function() {
        $('.nav-pills .active').parent().prev('li').find('a').trigger('click');
    });
    // $(function() {
    //     $("#v-pills-tab a:first").tab("show");
      
    //     $(".btn-next").on("click", function() {
    //       const $active = $(".tab-pane.active ");
    //       const $link = $('.nav-link.active')
    //       const $next = $active.next();
      
    //       if ($next.length) {
    //         $active.removeClass("active show, nav-link active" );
    //         $next.addClass("active show ");
    //         $link.addClass("nav-link active");
    //       }
    //     });
      
    //     $(".prev").on("click", function() {
    //       const $active = $(".tab-pane.active");
    //       const $prev = $active.prev();
      
    //       if ($prev.length) {
    //         $active.removeClass("active show");
    //         $prev.addClass("active show");
    //       }
    //     });
    //   });
      
    
    
})(jQuery);

/**
* password show
*/
// let btn = document.querySelector('#btn');
// let input = document.querySelector('#password');

// btn.addEventListener('click', () => {

//   if (input.type === "password") {
//     input.type = "text"
//   } else {
//     input.type = "password"


//   }
// })


