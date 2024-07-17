import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

// make a swiper
let swiper = new Swiper(".swiperOne", {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
        },
        next: {
            shadow: true,
            translate: ["100%", 0, 0],
        },
    },
});

// select pagination spans and there backgrounds
let paginationSpans = document.querySelectorAll('.swiper-pagination-span');
let paginationSpansBackgound = document.querySelectorAll('.swiper-pagination-span-backgroud');

/*
    When a span pagination background is clicked go to the silde with the same index
*/
paginationSpansBackgound.forEach((span, index) => {
    span.addEventListener('click', event => {
        event.preventDefault();
        console.log(index)
        swiper.slideTo(index);
    })
})

/* 
    When window is loaded, make sure the first span is not filld
*/
window.onload = () => {
    paginationSpans[0].style.transformOrigin = `right`
    paginationSpans[0].style.transform = `scaleX(0)`
}


/* 
    On slide change, make the span with the same index being filled
*/
swiper.on('slideChange', function () {
    paginationSpans.forEach((span, index) => {
        if(swiper.realIndex === index){
            span.style.backgroundColor = `white`;
            span.style.transition = `transform 3.2s`;
            span.style.transformOrigin = `left`
            span.style.transitionTimingFunction = `ease-in-out`;
            span.style.transform = `scaleX(1)`;
        }else{
            span.style.transition = `transform 10ms`;
            
            span.style.transform = `scaleX(0)`
        }
    })
});
