// burger
$(".burger-mobile-menu ").on("click",".bar",function(){
    $(".mobile-menu").slideToggle();
    $(".bar").toggleClass('change');
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

// form
// $.validator.addClassRules({
//     name: {
//         required: true,
//         minlength: 2
//     },
//     phone: {
//         digits: true,
//         phoneRu: true,
//         required: true,
//         minlength: 5,
//         maxlength: 5
//     }
// });
//
// $('form').validate();

//phone mask
$('.contact-form__input').usPhoneFormat({
    format:'+7 (xxx) xxx-xxxx',
});

// anchor link
$(".scroll").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

// custom checkbox
$(".option").wrap("<div class='new'></div>");
$('input[type="checkbox"]').after('<span class="check-box"></span>');