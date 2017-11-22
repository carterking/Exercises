$(document).ready(function () {
    console.log('We are ready!');

    $('.enter-left').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });

    $('.enter-right').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });
    
    $('.slick-carousel').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
    });


});