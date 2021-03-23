
$(document).ready(function () {
    /* sử dụng cho thư viện owl2 */
    $('.owl__meet').owlCarousel({
        loop:true,
        margin:70,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    // $('.owl__subsview').owlCarousel({
    //     loop:true,
    //     margin:56,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // })

    /* Sử dụng cho thư viện swiper */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 56,
        pagination: {
        //   el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            600: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1000: {
              slidesPerView: 5,
              spaceBetween: 40
            }
        }
    });

});