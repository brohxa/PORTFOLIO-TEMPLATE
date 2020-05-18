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

// CLIENT BTN

const clientBtn = document.querySelector(".client-btn");
const clientPage = document.querySelector(".client");

clientBtn.addEventListener("click", function () {
  const tl = new TimelineMax();

  tl.fromTo(
    clientPage,
    2,
    { width: "0px" },
    { width: "100%", ease: Power2.easeInOut }
  );
});

const homeBtn = document.querySelector(".home-btn");

homeBtn.addEventListener("click", function () {
  const tl = new TimelineMax();

  tl.fromTo(
    clientPage,
    1.5,
    { width: "100%" },
    { width: "0px", ease: Power2.easeInOut }
  );
});
