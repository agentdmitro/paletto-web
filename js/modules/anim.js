var controller = new ScrollMagic.Controller();

function translateElem(elem, elemX, elemY, elemIndex) {
    $(elem).css({
        '-webkit-transform':
            'translate(' + elemX * (elemIndex + 1) + 'px, ' + elemY * (elemIndex + 1) + 'px)',
        '-ms-transform':
            'translate(' + elemX * (elemIndex + 1) + 'px, ' + elemY * (elemIndex + 1) + 'px)',
        transform:
            'translate(' + elemX * (elemIndex + 1) + 'px, ' + elemY * (elemIndex + 1) + 'px)',
    });
}

gsap.fromTo(".notif", { opacity: 0 }, { opacity: 1, duration: 1 });

// PRODUCTS
var productsTranslate = [];
$('.products__wrap  .product__item').each(function (index, item) {
    translateElem(item, 0, 50, index);
    productsTranslate[index] = 50 * (index + 1);
});

translateElem('.best__header', 0, 50, 0);
translateElem('.best h1', 0, 70, 0);
translateElem('.best .products__more', 0, 100, 0);
var products = new ScrollMagic.Scene({
    triggerElement: '.products__wrap',
    triggerHook: 0.8,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        $('.products__wrap  .product__item').each(function (index, item) {
            gsap.to($(item), {
                y: productsTranslate[index] - productsTranslate[index] * event.progress,
            });
        });
        gsap.to($('.best__header'), {
            y: 50 - 50 * event.progress,
        });
        gsap.to($('.best h1'), {
            y: 70 - 70 * event.progress,
            duration: 0.3,
        });
        gsap.to($('.best .products__more'), {
            y: 100 - 100 * event.progress,
        });
    })
    .addTo(controller);

// FIND ITEMS
var findItemsTranslate = [];
translateElem($('.find__bttn'), 0, 100, 0);

$('.find__list > .find__list-item').each(function (index, item) {
    translateElem(item, 0, 150, index);
    findItemsTranslate[index] = 100 * (index + 1);
});

var findScene = new ScrollMagic.Scene({
    triggerElement: '.find',
    triggerHook: 1,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.find__bttn'), {
            y: 100 - 100 * event.progress,
        });
        $('.find__list > .find__list-item').each(function (index, item) {
            gsap.to($(item), {
                y: findItemsTranslate[index] - findItemsTranslate[index] * event.progress,
            });
        });
    })
    .addTo(controller);

// OFFER 1

var offerOneItemsTranslate = [];
translateElem($('.offer-1 h2'), 0, 50, 0);
translateElem($('.offer-1 .text'), 0, 100, 0);
translateElem($('.offer-1 .offer__more'), 0, 100, 0);

$('.offer-1 .product__item').each(function (index, item) {
    translateElem(item, 0, 150, index);
    offerOneItemsTranslate[index] = 100 * (index + 1);
});

var offerOneScene = new ScrollMagic.Scene({
    triggerElement: '.offer-1',
    triggerHook: 0.8,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.offer-1 h2'), {
            y: 50 - 50 * event.progress,
        });
        gsap.to($('.offer-1 .text'), {
            y: 100 - 100 * event.progress,
        });
        $('.offer-1 .product__item').each(function (index, item) {
            gsap.to($(item), {
                y: offerOneItemsTranslate[index] - offerOneItemsTranslate[index] * event.progress,
            });
        });
    })
    .addTo(controller);

const anim1 = gsap.fromTo(
    $('.offer-1 .offer__more'),
    { autoAlpha: 0, y: 50 },
    { duration: 0.4, autoAlpha: 1, y: 0, ease: 'ease', delay: 0.4 },
);
ScrollTrigger.create({
    trigger: $('.offer-1 .offer__more'),
    animation: anim1,
    toggleActions: 'play none none none',
    once: true,
});

// DIAGNOSTICS

translateElem($('.diagnosis__suptitle'), 0, 50, 0);
translateElem($('.diagnosis__title'), 0, 100, 0);
translateElem($('.diagnosis__bttn'), 0, 150, 0);

var diagnosisScenes = new ScrollMagic.Scene({
    triggerElement: '.diagnosis',
    triggerHook: 0.5,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.diagnosis__suptitle'), {
            y: 50 - 50 * event.progress,
        });
        gsap.to($('.diagnosis__title'), {
            y: 100 - 100 * event.progress,
        });
        gsap.to($('.diagnosis__bttn'), {
            y: 150 - 150 * event.progress,
        });
    })
    .addTo(controller);



// NEW

const newItemsTranslate = []
translateElem($('.new h2'), 0, 50, 0);
$('.new__wrap .product__item').each(function (index, item) {
    translateElem(item, 0, 100, index);
    newItemsTranslate[index] = 100 * (index + 1);
});

var diagnosisScenes = new ScrollMagic.Scene({
    triggerElement: '.new',
    triggerHook: .8,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.new h2'), {
            y: 50 - 50 * event.progress,
        });
        $('.new__wrap .product__item').each(function (index, item) {
          gsap.to($(item), {
              y: newItemsTranslate[index] - newItemsTranslate[index] * event.progress,
          });
          
      });
    })
    .addTo(controller);



    
// OFFER 2

var offerTwoItemsTranslate = [];
translateElem($('.offer-2 h2'), 0, 50, 0);
translateElem($('.offer-2 .text'), 0, 100, 0);
translateElem($('.offer-2 .offer__more'), 0, 100, 0);

$('.offer-2 .product__item').each(function (index, item) {
    translateElem(item, 0, 150, index);
    offerTwoItemsTranslate[index] = 100 * (index + 1);
});

var offerTwoScene = new ScrollMagic.Scene({
    triggerElement: '.offer-2',
    triggerHook: 0.8,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.offer-2 h2'), {
            y: 50 - 50 * event.progress,
        });
        gsap.to($('.offer-2 .text'), {
            y: 100 - 100 * event.progress,
        });
        $('.offer-2 .product__item').each(function (index, item) {
            gsap.to($(item), {
                y: offerTwoItemsTranslate[index] - offerTwoItemsTranslate[index] * event.progress,
            });
        });
    })
    .addTo(controller);

const anim3 = gsap.fromTo(
    $('.offer-2 .offer__more'),
    { autoAlpha: 0, y: 50 },
    { duration: 0.4, autoAlpha: 1, y: 0, ease: 'ease', delay: 0.4 },
);
ScrollTrigger.create({
    trigger: $('.offer-2 .offer__more'),
    animation: anim3,
    toggleActions: 'play none none none',
    once: true,
});



// PRODUCT FAQ  

// const anim4 = gsap.fromTo(
//     $('.product__faq'),
//     { autoAlpha: 0, y: 50 },
//     { duration: 0.4, autoAlpha: 1, y: 0, ease: 'ease', delay: 0.4 },
// );
// ScrollTrigger.create({
//     trigger: $('.product__faq-item'),
//     animation: anim4,
//     toggleActions: 'play none none none',
//     once: true,
// });


var faqItemsTranslate = [];

translateElem($('.product__info-header'), 0, 50, 0);
$('.product__faq-item').each(function (index, item) {
    translateElem(item, 0, 150, index);
    faqItemsTranslate[index] = 100 * (index + 1);
});

var offerOneScene = new ScrollMagic.Scene({
    triggerElement: '.product__info',
    triggerHook: .7,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.product__info-header'), {
            y: 50 - 50 * event.progress,
        });
        $('.product__faq-item').each(function (index, item) {
            gsap.to($(item), {
                y: faqItemsTranslate[index] - faqItemsTranslate[index] * event.progress,
            });
        });
    })
    .addTo(controller);



// Product Related

translateElem($('.related h2'), 0, 50, 0);
translateElem($('.related__wrap'), 0, 100, 0);

var offerOneScene = new ScrollMagic.Scene({
    triggerElement: '.related',
    triggerHook: 0.8,
    duration: window.innerHeight / 2,
})
    .on('progress', function (event) {
        gsap.to($('.related h2'), {
            y: 50 - 50 * event.progress,
        });
        gsap.to($('.related__wrap'), {
            y: 100 - 100 * event.progress,
        });
    })
    .addTo(controller);
