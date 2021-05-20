//MENU
$('[data-link]').click(function (e) {
    let scrollEl = $(this).data('link');
    let scrollElPos = $(scrollEl).offset().top;

    $('html, body').animate ({
        scrollTop: scrollElPos -75
    }, 500);

    if ($('.header').hasClass('_active')) {
        $('.header').removeClass('_active');

        $('.header__icon').removeClass('_active');
    }

    e.preventDefault();
});


$('.header__icon').click(function () {
    $('.header').toggleClass('_active');

    $('.header__icon').toggleClass('_active');

    let scrollNow = $(window).scrollTop();
    //let scrollNow = $('.header').offset().top;


    let $header = $(".header");
    let scroll = 0;

//Delete header if scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > scroll) {
            $('.header').removeClass('_active');
            $('.header__icon').removeClass('_active');
        }

        $(window).scrollTop() == scroll;
    });
});

$('.intro__link').click(function () {
    $('.intro__link').toggleClass('_active');
});


//Spollers
$('.about__header').click(function (e) {
    if ($('.about__block').hasClass('one')) {
        $('.about__header').not($(this)).removeClass('_show');
        $('.about__text').not($(this).next()).slideUp(400);
    }

    $(this).toggleClass('_show').next().slideToggle(400);
});

$('.link__header').click(function (e) {
    $(this).toggleClass('_show').next().slideToggle(400);
});

$('.footer__spoler_header').click(function (e) {
    $(this).toggleClass('_show').next().slideToggle(400);
});


//Delete scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > $('.intro').scrollTop()) {
        $('.intro__scroll').addClass('_active');
    } else {
        $('.intro__scroll').removeClass('_active');
    }
});