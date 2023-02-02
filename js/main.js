// 25th code goes here, from the same download swiper-bundle-min.js and add to the js folder

// 28th code goes Headers, writing the script for swiper
var swiper = new Swiper(".popular-content", {
    // 31st code goes Headers, adding slidesPerView
    slidesPerView: 1,
    spaceBetween: 10, /*-31st continues.. changing the value to 10 from 30-*/
    // centeredSlides: true, /*31st contonues...changing removing this form code */
    autoplay: {
        delay: 55500, /*31st continues...changing the value to 55500 from 2500 */
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

    // 32nd code goes Headers, adding the breakpoints 
    breakpoints: {
        280: {
            slidesPerView: 1, 
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});