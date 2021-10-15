$('.sleek').not('.slick-initialized').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<span class="privarrow"><i class="fas fa-chevron-left"></i></span>',
  nextArrow: '<span class="nextarrow"><i class="fas fa-chevron-right"></i></span>',
});

$(".counter").counterUp({
      delay: 10,
      time: 1000
  });
