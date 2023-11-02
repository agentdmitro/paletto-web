// const swiper = new Swiper('.swiper', {
//   slidesPerView: 'auto',
//   watchOverflow: true,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   spaceBetween: 20,
//   autoHeight: true,
//   breakpoints: {
//     // when window width is >= 992px
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//   },
// });


var bannerSlider = new Swiper(".banner-slider", {
  effect: 'creative',
  loop: true,
  creativeEffect: {
    prev: {
      opacity: 0
    },
    next: {
      opacity: 0
    },
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
},
  pagination: {
    el: ".banner-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if(index < 10){
        return '<span class="' + className + '">' + ('0' + (index + 1) ) + '</span>';
      }
      return '<span class="' + className + '">' + ((index + 1) ) + '</span>';
    },
  },
});

var productSlider = new Swiper(".product-slider", {
  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
  },
  pagination: {
    el: ".product-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if(index < 10){
        return '<span class="' + className + '">' + ('0' + (index + 1) ) + '</span>';
      }
      return '<span class="' + className + '">' + ((index + 1) ) + '</span>';
    },
  },
});



var productSlider = new Swiper(".related__slider", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.related-button-next',
    prevEl: '.related-button-prev',
  },
  pagination: {
    el: ".related-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if(index < 10){
        return '<span class="' + className + '">' + ('0' + (index + 1) ) + '</span>';
      }
      return '<span class="' + className + '">' + ((index + 1) ) + '</span>';
    },
  },
});


var productSlider = new Swiper(".search__products-slider", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.search-products-next',
    prevEl: '.search-products-prev',
  },
});

var productSlider = new Swiper(".search__posts-slider", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  navigation: {
    nextEl: '.search-posts-next',
    prevEl: '.search-posts-prev',
  },
});


// $('.swiper-button-prev').remove();
// $('.swiper-button-next').remove();

// const swiper = new Swiper('.swiper', {
// 	slidesPerView: 1,
// 	watchOverflow: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	spaceBetween: 20,
// 	autoHeight: true
// });
