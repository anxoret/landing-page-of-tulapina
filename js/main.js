let menuElem = document.getElementById('little-main-menu');
let titleElem = menuElem.querySelector('.menu-btn');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};