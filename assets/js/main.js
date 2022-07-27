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
(() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
    document.querySelector('.fa-bars').classList.toggle('fa-times')
    document.querySelector('.navbar').classList.toggle('shadow-sm')
  })
})()
// show active menu when scrolling
 const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const home = document.querySelector('#home-page');
  const about = document.querySelector('#about-page');
  const skills = document.querySelector('#skills-page');
  const works = document.querySelector('#works-page');
  const contact = document.querySelector('#contact-page');
  let scrollPos = window.scrollY
  console.log(scrollPos);

  // adds highlight class to my menu items
  if (window.innerWidth > 768 && scrollPos < 550) {
    home.classList.add('highlight')
    about.classList.remove('highlight')
    return
  }else if (window.innerWidth > 768 && scrollPos < 1399) {
    about.classList.add('highlight')
    home.classList.remove('highlight')
    skills.classList.remove('highlight')
    return
  }else if (window.innerWidth > 768 && scrollPos < 1947) {
    skills.classList.add('highlight')
    about.classList.remove('highlight')
    works.classList.remove('highlight')
    return
  } else if (window.innerWidth > 768 && scrollPos < 3520) {
    works.classList.add('highlight')
    skills.classList.remove('highlight')
    contact.classList.remove('highlight')
    return
  } else if (window.innerWidth > 768 && scrollPos < 4200) {
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
  loop: false,
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

const swiper = new Swiper(".mySwiper", {
      // Optional parameters 
  loop: false,
  mousewheel:true,
  keyboard: true,

  // If we need pagination
  pagination: {
   el: ".swiper-pagination",
      clickable: true,
  },
  spaceBetween: 50

});

const auto = new AutoTyping({
      id: 'career-text',
      typeText: ['Web developer', 'Jr Software developer'],
      textColor: '#fff',
      typeSpeed: 50,
      typeRandom: true,
      typeDelay: 200,
      cursor: '|',
      cursorColor: '#28a745',
      cursorSpeed: 200,
      deleteSpeed: 50,
      deleteDelay: 2000,
      typeInfinity: true,
    }).init();


