// 25th code goes here, from the same download swiper-bundle-min.js and add to the js folder

// 28th code goes Headers, writing the script for swiper
var swiper = new Swiper(".popular-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnIntearction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});