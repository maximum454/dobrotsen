const swiperBrands = new Swiper('.swiper-container-brands', {
    slidesPerView: 3.5,
    slidesPerGroup: 8,
    spaceBetween: 0,
    mousewheel: false,
    initialSlide:0,
    speed: 300,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 2.5,
        },
        450: {
            slidesPerView: 3.5,
        },
        640: {
            slidesPerView: 5.5,
            spaceBetween: 20,
        },
        1023: {
            slidesPerView: 8,
            spaceBetween: 68,
        },

    }
})