// ANCHOR VARIABLES
// ==============================================
let isDesk = $('body').hasClass('desktop'),
  isIE = $('body').hasClass('isIe'),
  menuOpen = false;

let st = $(window).scrollTop(),
  prevSt = st;

window.st = st;

// ANCHOR .header SCROLL LISTENER
// ==============================================
var mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
var tablet = window.matchMedia('(min-width: 769px) and (max-width: 1023px)');
var desktop = window.matchMedia('(min-width: 1023px) and (max-width: 1279px)'); // Enable (for mobile)
var desktop_pc = window.matchMedia('(min-width: 1280px)');

// hide .header if page was alredy scrolled after loading

$(document).scroll(() => {
  st = $(window).scrollTop();
  window.st = st;


  if (mobile.matches) {
    
    if (window.scrollY > $('.banner').outerHeight(true)) {
      $('.header').addClass('header--scrolled');
    }else if($('.banner').length == 0){
      if(window.scrollY > 150){
        if(window.location.pathname !== '/menu.html'){
          $('.header').addClass('header--scrolled');
        }
      }else{
      $('.header').removeClass('header--scrolled');
      }
    }else {
      $('.header').removeClass('header--scrolled');
    }
  } else {
   
    if (window.scrollY > $('.banner').outerHeight(true)) {
      $('.header').addClass('header--scrolled');
    }else if($('.banner').length == 0){
      if(window.scrollY > 150 ){
        if(window.location.pathname !== '/menu.html'){
          $('.header').addClass('header--scrolled');
        }
      }else{
      $('.header').removeClass('header--scrolled');
      }
    }else {
      $('.header').removeClass('header--scrolled');
    }
  }

  prevSt = st;
});

$(document).ready(function () {
  $('.header__burger').on('click', function () {
    if (!$('body').hasClass('menu-open')) {
      $('body').addClass('menu-open');
      //$('.header__menu').slideDown();
    } else {
      $('body').removeClass('menu-open');
      //$('.header__menu').slideUp();
    }
  });

  $('.header__menu-list a').on('click', function () {
    $('.header__burger').removeClass('active');
    $('body').removeClass('menu-open');
    //$('.header__menu').slideUp();
  });

  // CART ==========
  $('.header__cart').on('click', function (e) {
    e.preventDefault()
    if (!$('body').hasClass('scroll-disable')) {
      $('body').addClass('scroll-disable');
      $('.cart').slideDown();
    } else {
      $('body').removeClass('scroll-disable');
      $('.cart').slideUp();
    }
  });

  $('.cart__bg, .cart__close').on('click', function () {
    $('.cart').slideUp();
    $('body').removeClass('scroll-disable');
  });
  
if($('.cart')){
  const cartPadding = $('.header').outerHeight();
  $('.cart').css(`padding-top`, `${cartPadding}px`)
}
});

