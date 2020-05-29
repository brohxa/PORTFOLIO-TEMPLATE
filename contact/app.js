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


// PRELOAD

window.addEventListener("load", function () {
    let preload = document.querySelector(".preload");
    preload.classList.remove("preload");
});



// LOADER

const loader = document.querySelector('.loader');

window.addEventListener('load', function () {
    loader.classList.remove('loader');
})
