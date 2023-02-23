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

// phone mask
//
$(".contact-form__input[type=tel]").intlTelInput({
// whether or not to allow the dropdown
    allowDropdown: true,

// if there is just a dial code in the input: remove it on blur, and re-add it on focus
    autoHideDialCode: true,

// add a placeholder in the input with an example number for the selected country
    autoPlaceholder: "polite",

// append menu to specified element
    dropdownContainer: null,

// don't display these countries
    excludeCountries: [],

// format the input value during initialisation and on setNumber
    formatOnDisplay: true,

// geoIp lookup function
    geoIpLookup: null,

// inject a hidden input with this name, and on submit, populate it with the result of getNumber
    hiddenInput: "",

// initial country
    initialCountry: "ru",

// localized country names e.g. { 'de': 'Deutschland' }
    localizedCountries: null,

// don't insert international dial codes
    nationalMode: true,

// display only these countries
    onlyCountries: [],

// number type to use for placeholders
    placeholderNumberType: "MOBILE",

// the countries at the top of the list. defaults to united states and united kingdom
    preferredCountries: [ "ru", "am", "az", 'by', 'ua' ],

// display the country dial code next to the selected flag so it's not part of the typed number
    separateDialCode: false,

// specify the path to the libphonenumber script to enable validation/formatting
    utilsScript: "",

    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
        return  selectedCountryPlaceholder + " *";
    },
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