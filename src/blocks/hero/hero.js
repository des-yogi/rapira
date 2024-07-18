(function(){

  const hero = new Swiper('.hero__slider', {
    speed: 400,
    spaceBetween: 0,
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
