$(function() {

    window.addEventListener('scroll', function() {
        let e = document.querySelector('.header__top');
        if (pageYOffset > 100) {
            e.classList.add("header__top--blackout");
        } else {
            e.classList.remove("header__top--blackout");
        }
    });

    $(".menu a, .header__logo, .header__icon").on("click", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('.slider').slick({
        arrows: false,
        dots: true
    });

    $('.header__burger, .menu a').on('click', function() {
        $('.header__burger').toggleClass('header__burger--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    let mixer = mixitup('.gallery__content');
});
