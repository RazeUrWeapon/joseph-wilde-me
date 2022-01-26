# Personal Portfolio v1.0

### Table of contents
- [Project Description](#project-description)
- [Tech Used](#tech-used)
- [Features](#features)
- [Credits](#credits)
- [Connect with me](#connect-with-me)

## Project Description
- My portfolio website to showcase my skills, knowledge and journey.
- The main focus was to showcase that I'm able to build out a full page that is responsive, sleek and cohesive.

## Tech Used
- HTML 5
- Sass
- JavaScript
- Gulp

## Features
- #### Typewriter effect in hero section
``` javascript
const phrases = [
    'being a dog dad. ',
    'learning about blockchain technologies. ',
    'DJing for fun. ',
    'playing games with friends. '
];

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
```
- #### Mobile hamburger menu
``` javascript
const body = document.querySelector('body');
const hamburgerMenu = document.querySelector('#hamburgerButton');
const nav = document.querySelector('nav');
const fadeElements = document.querySelectorAll('.has-fade');

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
```
- #### Disappearing header on scroll down, appears on scroll up
``` javascript
(function(){
    const header = document.querySelector('header');

    let doc = document.documentElement;
    let w = window;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;
  
    let checkScroll = function() {
      curScroll = w.scrollY || doc.scrollTop;

      if (curScroll > prevScroll) { 
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
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
```

## Credits
- Typewriter effect from [Code with Ania Kubów](https://www.youtube.com/watch?v=mULM6KcF_mo) YouTube video
- Hide/show header functionality from [Codingreflections.com](https://codingreflections.com/hide-header-on-scroll-down/)

## Connect with me
- Website - [josephwilde.me](http://www.josephwilde.me)
- LinkedIn - [Joseph Wilde](https://www.linkedin.com/in/joseph-michael1/)
- Twitter - [@jwilde19](https://twitter.com/jwilde19)