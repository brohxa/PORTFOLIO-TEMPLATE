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

// SCROLL COVER

const cover = document.querySelector('.cover');

window.addEventListener('scroll', function () {
    if (window.scrollY > 600 & window.scrollY < 1500) {
        cover.classList.add('active');
    }
})

// COLOR CHANGE FOR BURGER AND SIDEBAR

const lines = document.querySelectorAll('.line')
const links = document.querySelectorAll('.link')

for (let i = 0; i < lines.length; i++) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 900 & window.scrollY < 1820) {
            lines[i].classList.add('active')
        }
        else {
            lines[i].classList.remove('active')
        }
    })
}

window.addEventListener('scroll', function () {
    for (let i = 0; i < links.length; i++) {
        if (window.scrollY > 750 & window.scrollY < 1750) {
            links[i].classList.add('active')
        }
        else {
            links[i].classList.remove('active')
        }
    }
})


