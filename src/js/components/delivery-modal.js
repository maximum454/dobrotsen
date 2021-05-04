

$(function (){
    $(document).on('click', function (e){
        let parent = $('.header-delivery');
        let child = $('.header-delivery__modal');

        const target = e.target;
        if (target.classList != 'header-delivery') {
            child.removeClass("active");

        } else {
            child.toggleClass("active");
        }
        console.log(target)
    })
})