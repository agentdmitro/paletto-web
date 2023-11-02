// JS fragment import example
import * as functions from './modules/functions.js';
functions.isWebp();
functions.spollers();

// БАЗОВІ СКРИПТИ
import './modules/base.js';

// АНЧОР ШАПКА
import './modules/anchor.js';

// ТАБИ
import './modules/tabs.js';

// 2 ВАРІАНТ ТАБУ НА ЧИСТОМУ JS
import './modules/tabs2.js';

//  СЛАЙДЕР
import './libs/swiper-bundle.min.js';
import './modules/slider.js';

// ПОПАП
import './modules/popup.js';


// ВІДЕО
import './modules/video.js';

// ANIMATIONS	
import './modules/anim.js';

var anyHover = window.matchMedia('(any-hover: hover)');

$(document).ready(function() {
	if($('.find__select')){
		$('.find__select').each(()=>{
			$(this).find('select').niceSelect()
		})
	}
	if($('.cart__product-count')){
		$('.cart__product-count').each(()=>{
			$(this).find('select').niceSelect()
		})
	}
	if ($('.faq__content-header')) {
		$('.faq__content-header').click(function (e) {
		  $(this).toggleClass('active');
		  $(this).next('.faq__content-info').slideToggle();
		});
	}
	if ($('.faq__header')) {
		$('.faq__header').click(function (e) {
		  $(this).toggleClass('active');
		  $(this).next('.faq__content').slideToggle();
		  $(this).next('.faq__content').css('display','flex');
		});
	  }
	if($('.menu__list')){
		if(anyHover.matches){
			$('.menu__list li').mouseover(function(e, index){
				$('.menu__list li a').removeClass('active')
				$(this).find('a').addClass('active')
				$('.menu__items').hide()
				$('.menu__items').eq($(this).index()).show()
			})
		}else{
			$('.menu__list > ul > li').click(function (e) {
				$(this).toggleClass('active');
				$('.menu__item-list').eq($(this).index()).slideToggle()
			  });
		}
	}
	if($('.search__remove')){
		$('.search__remove').click(()=>{
			$('#search__input').val("");
		})
	}
	const phoneInputField = document.querySelectorAll('#phone');
	if (phoneInputField) {
		phoneInputField.forEach((phone) => {
		const phoneInput = window.intlTelInput(phone, {
			preferredCountries: ['ua', 'us', 'gb'],
			separateDialCode: true,
			hiddenInput: 'full',
			utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
		});
		});
	}

	$('.show__pass-password').on('click',function(e){
		if('password' == $('#password').attr('type')){
			$('#password').prop('type', 'text');
			$(this).children('.hide').show()
			$(this).children('.show').hide()
	   }else{
			$('#password').prop('type', 'password');
			$(this).children('.hide').hide()
			$(this).children('.show').show()
	   }
	})

	
	$('.show__pass-password-confirm').on('click',function(e){
		if('password' == $('#password-confirm').attr('type')){
			$('#password-confirm').prop('type', 'text');
			$(this).children('.hide').show()
			$(this).children('.show').hide()
	   }else{
			$('#password-confirm').prop('type', 'password');
			$(this).children('.hide').hide()
			$(this).children('.show').show()
	   }
	})

});

// Динамический адаптив
// Документация: https://github.com/FreelancerLifeStyle/dynamic_adapt#readme
import './libs/dynamicAdapt.js';

// NPM Swiper installation example
/*
import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	...
});
*/

//  IMAGES LAZY LOAD
// import Bound from './libs/bounds.js'

// const boundary = Bound({
// 	margins: {bottom: 100}
// })

// const image = document.querySelectorAll('img[data-src]')

// const whenImageEnters = (image) => {
// 	return () => {
// 		image.src = image.dataset.src
// 	}
// }

// image.forEach(img => {
// 	boundary.watch(img, whenImageEnters(img))
// })





