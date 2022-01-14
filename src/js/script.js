const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('#hamburgerButton');
const nav = document.querySelector('nav');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const mobileMenu = document.querySelector('.mobile-menu');
const typewriterText = document.querySelector('.typewriter-text');
const phrases = [
    'being a dog dad. ',
    'learning about blockchain technologies. ',
    'DJing for fun. ',
    'playing games with friends. '
];
const workEmail = document.querySelector('#workEmail');
const formButton = document.querySelector('#contactFormButton');
const contactForm = document.querySelector('.contact__form');

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
let typewriterTime = 90;

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

// Functions to change Email text on hover/touch
function copyClipboardText() {
    workEmail.textContent = 'copy to clipboard';
    workEmail.style.color = 'hsl(159,92%,56%)';
}

function returnEmailText() {
    workEmail.textContent = 'jwilde.work@gmail.com';
    workEmail.style.color = 'rgb(255, 255, 255)';
}

// Copy email to clipboard on click
workEmail.addEventListener('click', () => {
    navigator.clipboard.writeText('jwilde.work@gmail.com');
});

// Change email text on hover / touch
workEmail.addEventListener('mouseover', copyClipboardText);
workEmail.addEventListener('mouseleave', returnEmailText);
workEmail.addEventListener('touchstart', copyClipboardText);
workEmail.addEventListener('touchend', returnEmailText);

// Contact form sumbit button functionality
formButton.addEventListener('submit', () => {
    contactForm.innerHTML = `<h2> I'll get back to you as soon as possible :)</h2>`;
});