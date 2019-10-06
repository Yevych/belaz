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
  var triggerList = $('.js-trigger-list')
  triggerList.on('click', function () {
    var self = $(this)
    triggerList.not(self).removeClass('open-list').siblings().fadeOut(500)
    if (self.hasClass('open-list')) {
      self.removeClass('open-list').siblings().fadeOut(500)
    } else {
      self.addClass('open-list').siblings().fadeIn()
    }
  })

  var closeToolbar = $('.js-close-list')
  var toolBar = $('.questions__list--wrap')
  closeToolbar.on('click', function () {
    toolBar.fadeOut()
  })

  //load first 4 elements, click "load more"
  var listItems = $('.questions__list > li'),
      listItemsCount = listItems.length,
      loadMore = $('.questions__load-more'),
      x = 4

  listItems.hide().slice(0, x).show()
  loadMore.on('click', function (e) {
    e.preventDefault()
    x++
    listItems.slice(0, x).show()

    if ($('.questions__list > li:visible').length === listItemsCount) {
      loadMore.hide();
    }
  })
})
