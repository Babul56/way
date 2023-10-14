let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
            360: {
        slidesPerView:1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        },
        767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 12,
        },
        1024: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 14,
        },
        1237: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 14,
        },
        1536: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 14,
        }
    },
});