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




// LOADER

const loader = document.querySelector('.loader');

window.addEventListener('load', function () {
    loader.classList.remove('loader');
})
