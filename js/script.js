// mobile nav bar

const mobButton = document.querySelector(".mob-button");
const menuList = document.querySelector(".menu-list");
const burger = document.querySelector(".burger");

mobButton.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuList.classList.toggle("active");
})

// swiper slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'coverflow',
    
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
  });
