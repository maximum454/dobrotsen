@@include('./partials/jquery.min.js')


$(function () {

    $('.js-catalog-open').on('click', function (){
        $('.mob-nav').addClass('active');
    })
    $('.js-mob-nav-close').on('click', function (){
        $('.mob-nav').removeClass('active');
    })

    $('.js-mob-nav-catalog').on('click', function (){
        $('.mob-catalog').addClass('active');
    })

    $('.js-mob-nav-prev').on('click', function (){
        $('.mob-catalog').removeClass('active');
    })

})




