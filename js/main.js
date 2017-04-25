$(document).ready(function(){

  $('.quote-slider__slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6500,
    fade: true,
    arrows: false,
    asNavFor: '.quote-slider__nav'
  });

  $('.quote-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.quote-slider__slider',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    infinite: true
  });

});
