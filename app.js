// TIMELINE MAX ANIMATION
const hero = document.querySelector(".main");
const nameText = document.querySelector(".name");
const left = document.querySelector(".left");
const surname = document.querySelector(".surname");



document.addEventListener("DOMContentLoaded", function (event) {

  // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
  // you could also use addEventListener() instead
  window.onload = function () {

    // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
    window.requestAnimationFrame(function () {

      // GSAP custom code goes here     
      const tl = new TimelineMax();

      tl.fromTo(left, 2, { width: "0px" }, { width: "25%", ease: Power2.easeInOut })
        .fromTo(hero, 1, { x: "-5%" }, { x: "0%", ease: Power1.easeInOut })
        .fromTo(nameText, 1.5, { opacity: 0, y: "-50" }, { opacity: 1, y: "0" })
        .fromTo(surname, 0.7, { opacity: 0, y: "-10" }, { opacity: 1, y: "0" });


    });

  };

});














// PRELOAD
const preload = document.querySelector(".preload");
window.addEventListener("load", function () {
  preload.classList.remove("preload");
});



// PAGE VARIABLES

const clientPage = document.querySelector(".client");

// ALL BUTTONS IN CLIENT
const homeBtnClient = document.querySelector(".home-btn-client");


homeBtnClient.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    clientPage,
    1.5,
    { width: "100%" },
    { width: "0px", ease: Power2.easeInOut }
  );
});

// ALL BUTTONS IN HOME
const clientBtnHome = document.querySelector(".client-btn-home");



clientBtnHome.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    clientPage,
    1.5,
    { width: "0px" },
    { width: "100%", ease: Power2.easeInOut }
  );
});

// ANIMATION WHITEMID

const whiteMid = document.querySelector('.white-mid')

window.addEventListener('scroll', function () {
  if (window.scrollY > 1400) {
    whiteMid.style.animation = 'white-mid 1s ease forwards'
  }

})
// ANIMATION CARD

const card = document.querySelector('.card')

window.addEventListener('scroll', function () {
  if (window.scrollY > 1400) {
    card.style.animation = 'card 1.5s ease forwards '
  }
})


// LOADER

const loader = document.querySelector('.loader');

window.addEventListener('load', function () {
  loader.classList.remove('loader');

})


