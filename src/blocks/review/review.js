(function(){

  const reviews = new Swiper('.review__slider', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 1,
    // autoplay: {
    //  delay: 2000,
    // },
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32
      }
    },
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
