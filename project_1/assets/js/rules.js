
$(document).ready(function () {
    /**
        @ Sử dụng cho thư viện slide slick 
        Update by : duongbien
        Date : 21/03/2021
    */
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        // },
    });
});