const swiperCollection = new Swiper('.swiper-container-collection', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 4,
    spaceBetween: 20,
    slidesPerColumnFill: 'row',
    navigation: {
        nextEl: '.collection-next',
        prevEl: '.collection-prev',
    },
})