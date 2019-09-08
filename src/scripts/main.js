$(document).ready(function() {
  //Warehouse slider
  $('.warehouse__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.warehouse__prev'),
    nextArrow: $('.warehouse__next'),
  })
});
