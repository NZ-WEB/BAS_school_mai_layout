// burger
$(".burger-mobile-menu ").on("click",".bar",function(){
    $(".mobile-menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".mobile-menu li").slideRight();
});

// hero slider
$('.hero-slider').slick({
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    accessibility: false,
    draggable: false,
    dots: true,
    autoplay: true
});

//phone mask
$('.contact-form__input').usPhoneFormat({
    format:'+7 (xxx) xxx-xxxx',
});

// anchor link


// custom checkbox
$(".option").wrap("<div class='new'></div>");
$('input[type="checkbox"]').after('<span class="check-box"></span>');