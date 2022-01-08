const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('#hamburgerButton');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const mobileMenu = document.querySelector('.mobile-menu');

function openMobileMenu() {
    body.classList.add('noscroll');
    nav.classList.add('open');
    fadeElements.forEach( (e) => {
        e.classList.remove('fade-out');
        e.classList.add('fade-in');
    });
}

function closeHamburgerMenu() {
    body.classList.remove('noscroll');
    nav.classList.remove('open');
    fadeElements.forEach( (e) => {
        e.classList.remove('fade-in');
        e.classList.add('fade-out');
    });
}

hamburgerMenu.addEventListener('click', () => {
    if(nav.classList.contains('open')) {
        closeHamburgerMenu();
    } else {
        openMobileMenu();
    }
});

// Removes mobile menu when link is pressed
mobileMenu.addEventListener('click', () => {
    if(nav.classList.contains('open')) {closeHamburgerMenu()}
});
