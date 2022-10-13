/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */

let navList = document.getElementById('navbar__list');
let sections = document.getElementsByClassName('landing__container');
let numberOfSections = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let navBar = function(){

    for(let i = 1; i <= numberOfSections ; i++){
        let navLink = document.createElement('a');
        navLink.setAttribute('href', '#section'+i);
        navLink.text = "Section " + i; 
        navList.appendChild(navLink);
    }
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        );
}
    
    
    
// Add class 'active' to section when near top of viewport
    
document.addEventListener('scroll', () => {
    for(let i = 0; i<numberOfSections;i++){
        if(isInViewport(sections[i]))
        {
            navList['childNodes'][i].classList.add('active');
            sections[i].classList.add('active');
        }
        else{
            navList['childNodes'][i].classList.remove('active');
            sections[i].classList.remove('active');
        }
    }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */


// Build menu 

// Scroll to section on link click
let scrollSmooth = function(){

    navList['childNodes'].forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
    
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};



// Set sections as active
navBar();
scrollSmooth();
