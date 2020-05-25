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
