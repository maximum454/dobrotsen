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


    $('.basket-header-btn').on('click', function (){
        $('.our-order-basket').toggleClass('active');
    })
    $('.our-order-basket__close').on('click', function (){
        $('.our-order-basket').removeClass('active');
    })



    $('.our-order-basket').on('click', function (e){
        let popup = $('.our-order-basket__tooltip');
            const target = e.target;
            if ( target.classList != 'icon icon-info' ) {
                popup.removeClass("active");
            }else{
                popup.toggleClass("active");
            }
        console.log(target)
        }
    )

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

})




