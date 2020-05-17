// TIMELINE MAX ANIMATION
const hero = document.querySelector(".main");
const nameText = document.querySelector(".name");
const tl = new TimelineMax();

tl.fromTo(hero, 3, { x: "-50%" }, { x: "0%", ease: Power2.easeInOut }).fromTo(
  nameText,
  2,
  { opacity: 0, y: "-50" },
  { opacity: 1, y: "0" }
);

// PRELOAD

window.addEventListener("load", function () {
  let preload = document.querySelector(".preload");
  preload.classList.remove("preload");
});
