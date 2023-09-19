var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
/*   pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
    navigation: {
      nextEl: ".right-btn",
      prevEl: ".left-btn",
    },
});

/* Testimonials Slider */

    var swiper = new Swiper(".testimonials-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });