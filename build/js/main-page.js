const swiperNavMobile = new Swiper('.swiper-nav', {
    slidesPerView: "auto",
    spaceBetween: 10,
})

const swiperMainMobile = new Swiper('.swiper-main', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})

const swiperBrandMobile = new Swiper('.swiper-brand', {
    slidesPerView: 1.5,
    spaceBetween: 16,
})

const swiperRecipesMobile = new Swiper('.swiper-recipes', {
    slidesPerView: 1.5,
    spaceBetween: 16,
})

const swiperCatalogMobile = new Swiper('.swiper-catalog', {
    slidesPerView: 2.2,
    spaceBetween: 16,
})