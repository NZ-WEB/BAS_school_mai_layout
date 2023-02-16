$(".burger-mobile-menu ").on("click",".bar",function(){
    $(".mobile-menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".mobile-menu li").slideRight();
});