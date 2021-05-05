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


    $('.js-header-basket').on('click', function (){
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

    function basketPrice(){
            const price = $('.our-order-basket__btn').data('price');
            const priceTotal = $('.our-order-basket__btn').data('price-total');
            let text = $('.our-order-basket__text');
            let raznica = price - priceTotal;
            if(priceTotal >= price ){
                return true;
            }else{
                text.addClass('text-danger').html('До минимального заказа ' + Math.round(raznica) + ' ₷')
            }
    }
    function basketWeight(){
        const weight = $('.our-order-basket__weight-order').data('weight');
        const weightTotal = $('.our-order-basket__weight-order').data('weight-total');
        let order = $('.our-order-basket__weight-order');
        let text = $('.our-order-basket__text');
        let raznica = weight - weightTotal;
        if(weightTotal <= weight ){
            return true;
        }else{
            text.addClass('text-danger').html('Превышение максимального веса. Сократите заказ')
            order.addClass('text-danger')
        }
    }
    function basketCountItem(){
        let weight = basketWeight();
        let price = basketPrice();
        let footer = $('.our-order-basket__footer');
        let item = $('.our-order-basket__item');
        let text = $('.our-order-basket__text');
        let order = $('.our-order-basket__weight-order');
        let btn = $('.our-order-basket__btn');
        let itemCount = 0;
        for(let i = 0; i <= item.length; i++){
            itemCount = i;
        }
        if(weight && price){
            text.removeClass('text-danger').html(itemCount + ' товаров');
            order.removeClass('text-danger');
            footer.removeClass('warning');
            btn.removeClass('disabled')
        }
    }
    basketCountItem();

})




