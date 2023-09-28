const icon = document.querySelector('.nav__search-icon');
const search = document.querySelector ('.nav__search');

icon.onclick = function(){
  search.classList.toggle('nav__search__active');
};


var swiper = new Swiper(".mySwiper",{
  spacebetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      keyboard: true,
});
