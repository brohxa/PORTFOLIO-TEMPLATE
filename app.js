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

// PAGE VARIABLES

const clientPage = document.querySelector(".client");
const blogPage = document.querySelector(".blog");

// ALL BUTTONS IN CLIENT
const homeBtnClient = document.querySelector(".home-btn-client");
const blogBtnClient = document.querySelector(".blog-btn-client");

homeBtnClient.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    clientPage,
    1.5,
    { width: "100%" },
    { width: "0px", ease: Power2.easeInOut }
  );
});

blogBtnClient.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    blogPage,
    1.5,
    { width: "0px" },
    { width: "100%", ease: Power2.easeInOut }
  );
  const tl2 = new TimelineMax();
  tl2.fromTo(
    clientPage,
    1.5,
    { width: "100%" },
    { width: "0px", ease: Power2.easeInOut }
  );
});

// ALL BUTTONS IN HOME
const clientBtnHome = document.querySelector(".client-btn-home");
const blogBtnHome = document.querySelector(".blog-btn-home");

clientBtnHome.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    clientPage,
    1.5,
    { width: "0px" },
    { width: "100%", ease: Power2.easeInOut }
  );
});
blogBtnHome.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    blogPage,
    1.5,
    { width: "0px" },
    { width: "100%", ease: Power2.easeInOut }
  );
});

// ALL BUTTONS IN BLOG
const homeBtnBlog = document.querySelector(".home-btn-blog");
const clientBtnBlog = document.querySelector(".blog-btn-blog");

homeBtnBlog.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    blogPage,
    1.5,
    { width: "100%" },
    { width: "0px", ease: Power2.easeInOut }
  );
});

clientBtnBlog.addEventListener("click", function () {
  const tl = new TimelineMax();
  tl.fromTo(
    clientPage,
    1.5,
    { width: "0px" },
    { width: "100%", ease: Power2.easeInOut }
  );
  const tl2 = new TimelineMax();
  tl2.fromTo(
    blogPage,
    1.5,
    { width: "100%" },
    { width: "0px", ease: Power2.easeInOut }
  );
});
