const PageInit = {
  swiperSlide: function() {
    var self = this;
    $('[data-swiper="init"]').each(function(index) {
      let $el = $(this);

      let _id = "box-swiper-" + index;
      $el.attr("id", _id);

      let swiperDefault = {
        init: false,
        loop: false,
        autoplay: false,
        effect: "slide",
        navigation: {
          nextEl: "#" + _id + " .swiper-button-next",
          prevEl: "#" + _id + " .swiper-button-prev"
        },
        pagination: {
          el: "#" + _id + " .swiper-pagination",
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        stopOnHover: false,
        breakpointsInverse: true, 
        breakpoints: {}
      };

      let settings = $.extend(swiperDefault, $el.data());
      delete settings.swiper;

      let swiper = new Swiper($el, settings);
      swiper.init();
    });
  },

  modalFix: function() {
    let self = this;
    $(document).on("show.bs.modal", function(event) {
      setTimeout(function() {
        self.swiperSlide();
      }, 300);
    });
  },

  init: function() {
    let self = this;
    self.swiperSlide();
    self.modalFix();
  }
};

(function($) {
  "use strict";

  $(document).ready(function() {
    PageInit.init();
  });
})(jQuery);
