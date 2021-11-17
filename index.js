window.onload = () => {
  $('.sleek').not('.slick-initialized').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span class="privarrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="nextarrow"><i class="fas fa-chevron-right"></i></span>',
  });

  try {
    $('.counter').counterUp({
      // duration: 9000,
      time: 1000,
      delay: 10
    });
  } catch (error) {
    console.log(error.stack)
  }
}