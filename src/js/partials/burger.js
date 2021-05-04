$(document).ready(function () {
    $('.nav__burger').on('click', function (event) {
        $('.header, .nav__burger, .nav__menu, .header__logo').toggleClass('active');
        $('body').toggleClass('lock');
    })
});