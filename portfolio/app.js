let hamburber = document.querySelector('.hamburger');
let sidebar = document.querySelector('.sidebar');

let menu = false;
hamburber.addEventListener('click', function () {
    if (!menu) {
        sidebar.style.animation = 'sidebar .5s ease forwards';
        menu = true;
    }
    else {
        sidebar.style.animation = 'sidebarback .5s ease forwards'

        menu = false;
    }
})

// TIMELINE MAX

const right = document.querySelector('.right');
const nameText = document.querySelector(".name");
const subText = document.querySelector(".sub-name");
const bigText = document.querySelector(".big-letter");
const graybox = document.querySelector(".gray-box");
const tl = new TimelineMax();
const tl2 = new TimelineMax();

tl.fromTo(right, 2, { width: "30%" }, { width: "50%", ease: Power2.easeInOut }).fromTo(nameText, 1, { y: "-50", opacity: 0 }, { y: "0", opacity: 1 });
tl2.fromTo(bigText, 2, { y: "-50", opacity: 0 }, { y: "0", opacity: 1 }).fromTo(graybox, 2, { width: "0px", opacity: 0 }, { width: "250px", opacity: 1 });

