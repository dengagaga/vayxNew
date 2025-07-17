

var swiper = new Swiper(".mySwiper", {

  keyboard: {

    enabled: true,

  },

    pagination: {

        el: ".swiper-pagination",

        type: "fraction",

      },

    navigation: {

      nextEl: ".swiper-butt-next",

      prevEl: ".swiper-butt-prev",

    },

    });

    

var swiper_progressbar = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-scrollbar",
        type: "progressbar",
      },
    });
swiper.controller.control = swiper_progressbar;



















