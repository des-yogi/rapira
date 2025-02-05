(function(){
  const customers = new Swiper('.customers-slider__container', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 8,
    // autoplay: {
    //  delay: 2000,
    // },
    breakpoints: {
      768: {
       //slidesPerView: 3,
       spaceBetween: 16
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 6,
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
