'use strict'

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

document.addEventListener('DOMContentLoaded', function () {
    const loaderOverlay = document.querySelector('.loader-overlay');

    window.addEventListener('beforeunload', function () {
        // You may choose to show the loader when the user tries to leave the page
        loaderOverlay.style.display = 'block';
    });

    window.addEventListener('unload', function () {
        // This will hide the loader when the user is leaving the page
        loaderOverlay.style.display = 'none';
    });

    setTimeout(function () {
        // This will hide the loader after a delay
        loaderOverlay.style.display = 'none';
    }, 1800); 
});

