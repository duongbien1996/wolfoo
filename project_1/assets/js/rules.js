
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


    $('.owl__subsview').owlCarousel({
        loop:true,
        margin:56,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

});