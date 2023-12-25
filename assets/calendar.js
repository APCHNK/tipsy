document.addEventListener('DOMContentLoaded', reinit_slider);
window.addEventListener('resize', reinit_slider);

let mql = window.matchMedia('(max-width: 991px)');
let swiper = null;

function reinit_slider() {
    if (mql.matches) {
        if (swiper === null) {
            swiper = new Swiper('.calendar-wrap.swiper', {
                grabCursor: true,
                spaceBetween: 10,
                slidesPerView: 1.8,
                centeredSlides: true,
                roundLengths: true,
                loop: true,
                loopAdditionalSlides: 30,
                breakpoints: {
                    768: {
                        slidesPerView: 5
                    },
                    992: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                        loop: false,
                        loopAdditionalSlides: 0,
                        centeredSlides: false
                    }
                },
                init: true
            });
        }
    }
    else {
        swiper.destroy();
        swiper = null;
    }
}