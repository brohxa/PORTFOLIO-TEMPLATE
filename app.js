// TIMELINE MAX ANIMATION
const hero = document.querySelector(".main");
const nameText = document.querySelector(".name");
const left = document.querySelector(".left");
const surname = document.querySelector(".surname");
const tl = new TimelineMax();

tl.fromTo(left, 2, { width: "0px" }, { width: "25%", ease: Power2.easeInOut })
  .fromTo(hero, 1, { x: "-5%" }, { x: "0%", ease: Power1.easeInOut })
  .fromTo(nameText, 1.5, { opacity: 0, y: "-50" }, { opacity: 1, y: "0" })
  .fromTo(surname, 0.7, { opacity: 0, y: "-10" }, { opacity: 1, y: "0" });

// PRELOAD

window.addEventListener("load", function () {
  let preload = document.querySelector(".preload");
  preload.classList.remove("preload");
});

// SOCIAL ON SCROLL
const social1 = document.querySelector(".soc1");
const social2 = document.querySelector(".soc2");
const social3 = document.querySelector(".soc3");
const social4 = document.querySelector(".soc4");
const social5 = document.querySelector(".soc5");
const social6 = document.querySelector(".soc6");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    social1.classList.add("active");
  } else {
    social1.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    social2.classList.add("active");
  } else {
    social2.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    social3.classList.add("active");
  } else {
    social3.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    social4.classList.add("active");
  } else {
    social4.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    social5.classList.add("active");
  } else {
    social5.classList.remove("active");
  }
});

// SCROLL MAGIC

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: ".about",
})
  .setClassToggle(".about-image", "show")
  .addTo(controller);
