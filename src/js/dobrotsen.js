@@include('./partials/jquery.min.js')
@@include('./partials/priority-nav.js')


$(function () {

    var nav = priorityNav.init({
        navDropdownLabel: "еще",
        navDropdownClassName: "header-nav__dropdown",
        navDropdownToggleClassName: "header-nav__dropdown-toggle",
    });

    $('.js-catalog-menu').on('click', function (){
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




