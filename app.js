'use strict'

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");
const containter = document.querySelector(".container");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});