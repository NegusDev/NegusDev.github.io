if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").then(registration =>{
    console.log("SW registered!");
    console.log(registration);
  }).catch(error =>{
    console.log("SW failed");
    console.log(error);
  });
}
// let deferredPrompt;
// window.addEventListener('beforeinstallprompt', (e) =>{
//   e.preventDefault();

//   deferredPrompt = e;

//   btnAdd.style.display = 'block';

// }); 

// btnAdd.addEventListener('click', (e) =>{
//   deferredPrompt.prompt();
//   deferredPrompt.userChoice.then((choiceResult) =>{
//     if (choiceResult.outcome === 'accepted') {
//       console.log('user accepted');
//     }
//     deferredPrompt = null;
//   });
// });
$(document).ready(function(){

  AOS.init();
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
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
// }
//   });
