const swiperTabs = new Swiper('.swiper-container-tabs', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    freeMode: true,
    navigation: {
        nextEl: '.tabs-next',
        prevEl: '.tabs-prev',
    },
    observer: true,
    observeParents: true
})

$(function () {
    $('.slider-tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.slider-tabs').find('.slider-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
})