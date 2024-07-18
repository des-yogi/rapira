(function(){

  const products = new Swiper('.product-slider__slider', {
    speed: 400,
    spaceBetween: 32,
    // autoplay: {
    //  delay: 2000,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
}());
