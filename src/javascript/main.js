$(document).ready(function(){

  $('.slider-author').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-quote',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    infinite: true,
    swipeToSlide: true
  });

  $('.slider-quote').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    arrows: false,
    asNavFor: '.slider-author',
    adaptiveHeight: true
  });

});
