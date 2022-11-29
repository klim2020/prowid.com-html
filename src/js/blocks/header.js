$( document ).ready(function() {
    $(".category__block").click( ()=>{
        $("#menu-toggle").prop( "checked", !($("#menu-toggle").prop( "checked")) );
    })
    $(".header_slider").slick({
        dots: true,
        dotsClass:"slider__dot",
        prevArrow: `<a href="#" class="slider__arrow animate_shadow slider__arrow_left d-flex flex-row align-items-center justify-content-center"><img src="images/arrow-left.png" alt=""></a>`,
        nextArrow: `<a href="#" class="slider__arrow animate_shadow slider__arrow_right d-flex flex-row align-items-center justify-content-center ml-4"><img src="images/arrow-right.png" alt=""></a>`,
    });
});
