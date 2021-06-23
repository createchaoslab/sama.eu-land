const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    breakpoints: {
        506: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1320: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});