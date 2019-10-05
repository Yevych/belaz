$(document).ready(function () {
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
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })

  //List
  let triggerList = $('.js-trigger-list')
  triggerList.on('click', function () {
    let self = $(this)
    triggerList.not(self).removeClass('open-list').siblings().fadeOut(500)
    if (self.hasClass('open-list')) {
      self.removeClass('open-list').siblings().fadeOut(500)
    } else {
      self.addClass('open-list').siblings().fadeIn()
    }
  })

  let closeToolbar = $('.js-close-list')
  let toolBar = $('.questions__list--wrap')
  closeToolbar.on('click', function () {
    toolBar.fadeOut()
  })
})
