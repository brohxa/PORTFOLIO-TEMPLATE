let hamburger = document.querySelector('.hamburger')
let sidebar = document.querySelector('.sidebar')
let links = document.querySelectorAll('.link');
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')

let menuOpen = false;
hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        sidebar.style.animation = 'sidebar .5s forwards '
        line1.style.animation = 'line1cross .5s forwards '
        line2.style.animation = 'line2cross .5s forwards '
        line3.style.animation = 'line3cross .5s forwards '
        menuOpen = true;
        for (let i = 0; i < links.length; i++) {
            links[i].style.animation = 'links 1s forwards '
        }
    }
    else {
        sidebar.style.animation = 'sidebarback .5s forwards'
        line1.style.animation = 'line1crossback .3s forwards '
        line2.style.animation = 'line2crossback .1s forwards '
        line3.style.animation = 'line3crossback .3s forwards '
        menuOpen = false;
        for (let i = 0; i < links.length; i++) {
            links[i].style.animation = 'linksback 1s forwards '
        }
    }

})

// SCROLL SOCIAL

const linkss = document.querySelectorAll('.link');

for (let i = 0; i < linkss.length; i++) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 700 & window.scrollY < 1600) {
            linkss[i].classList.add('activee')
        }
        else {
            linkss[i].classList.remove('activee')
        }
    })
}
const line = document.querySelectorAll('.line');
for (let i = 0; i < line.length; i++) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 900 & window.scrollY < 1800) {
            line[i].classList.add('active')
        }
        else {
            line[i].classList.remove('active')
        }
    })
}

