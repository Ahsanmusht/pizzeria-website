let searchBtn = document.querySelector('#search-btn');

let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () =>{
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

}


let menuBtn = document.querySelector('#menu-btn');

let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');

}

window.onscroll = () =>{
    
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    
}










// swiper work


var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });