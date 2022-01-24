if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration =>{
    console.log("SW registered!");
    console.log(registration);
  }).catch(error =>{
    console.log("SW failed");
    console.log(error);
  });
}
$(document).ready(function(){

  AOS.init();
});

// show active menu when scrolling
 const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const home = document.querySelector('#home-page');
  const about = document.querySelector('#about-page');
  const skills = document.querySelector('#skills-page');
  const works = document.querySelector('#works-page');
  const contact = document.querySelector('#contact-page');
  let scrollPos = window.scrollY
  // console.log(scrollPos);

  // adds highlight class to my menu items
  if (window.innerWidth > 768 && scrollPos < 550) {
    home.classList.add('highlight')
    about.classList.remove('highlight')
    return
  }else if (window.innerWidth > 768 && scrollPos < 1260) {
    about.classList.add('highlight')
    home.classList.remove('highlight')
    skills.classList.remove('highlight')
    return
  }else if (window.innerWidth > 768 && scrollPos < 1789) {
    skills.classList.add('highlight')
    about.classList.remove('highlight')
    works.classList.remove('highlight')
    return
  } else if (window.innerWidth > 768 && scrollPos < 2050) {
    works.classList.add('highlight')
    skills.classList.remove('highlight')
    contact.classList.remove('highlight')
    return
  } else if (window.innerWidth > 768 && scrollPos < 2573) {
    contact.classList.add('highlight')
    works.classList.remove('highlight')
    return
  }

  if ((elem && window.innerWidth < 768 && scrollPos < 550 || elem)) {
    elem.classList.remove('highlight')
  }

 }

 window.addEventListener('scroll', highlightMenu);
 window.addEventListener('click', highlightMenu);


const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 50,
  loop: true,
  mousewheel:true,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }

});

// const swiper = new Swiper(".mySwiper", {
//       // Optional parameters
//   direction: 'vertical',
//   slidesPerView: 'auto',

//   loop: false,

//   // If we need pagination
//   pagination: {
//    el: ".swiper-pagination",
//       clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }

//   });
