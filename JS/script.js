// slick slider.......................//

$('.slick_slider').slick(
    {
        arrows: false,
        dots: true
    }
);

// review slider...........................//
$('.review_slider').slick({
    arrows:true,
    dots:false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll:1,
    prevArrow:`<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow:`<i class="fa-solid fa-angle-right right"></i>`,

    responsive: [
        {
          breakpoint: 575.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});