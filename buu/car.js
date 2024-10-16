// script.js

// Smooth scroll to sections
function scrollToSection(id) {
    const element = document.getElementById(id);
    window.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

// Scroll to top on load
window.onload = function() {
    window.scrollTo(0, 0);
};
