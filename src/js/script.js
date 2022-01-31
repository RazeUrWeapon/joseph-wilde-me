const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('#hamburgerButton');
const nav = document.querySelector('nav');
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

// Contact form sumbit button functionality
formButton.addEventListener('submit', () => {
    contactForm.innerHTML = `<h2>I'll get back to you as soon as possible :)</h2>`;
});

// Hide header on scroll down and show on scroll up
// ** https://codingreflections.com/hide-header-on-scroll-down/ **
(function(){
    const header = document.querySelector('header');

    let doc = document.documentElement;
    let w = window;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;
  
    let checkScroll = function() {
      // Find the direction of scroll
      // 0 - initial, 1 - up, 2 - down
      curScroll = w.scrollY || doc.scrollTop;

      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
  
      prevScroll = curScroll;
    };
  
    let toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 58.5) {   
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
  
    window.addEventListener('scroll', checkScroll);  
})();