$('.carousel__list').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
});