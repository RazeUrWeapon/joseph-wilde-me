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

// Typewriter effect in hero section
const typewriterText = document.querySelector('.typewriter-text');
const phrases = [
    'being a dog dad. ',
    'learning about Web3 technologies. ',
    'DJing for fun. ',
    'playing games with friends. '
]

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
let typewriterTime = 90;

function loopTypewriterText() {
    isEnd = false;

    typewriterText.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
             j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            typewriterTime = 90;
            currentPhrase.pop(phrases[i][j]);
            j--;
        }

        if (j == phrases[i].length) {
            typewriterTime = 1250;
            setTimeout(isDeleting = true, 1250);
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;

            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    setTimeout(loopTypewriterText, typewriterTime);
}

loopTypewriterText();