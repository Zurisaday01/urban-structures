'use strict'

const hamburger = document.querySelector(".navigation__button");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");
const loaderOverlay = document.querySelector('.loader-overlay');
const locationBtn = document.getElementById('location-btn')


// ------------------------
// Hamburger --------------
// ------------------------
const handleHamburger = () => {
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
}


// ------------------------
// Loader -----------------
// ------------------------
const handleLoader = () => {
    // Show the loader when the page starts loading
    if (document.readyState !== "complete") {
        // Show loading indicator and hide body
        loaderOverlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
       
    } else {
        // Show body and hide loading indicator after 2 seconds
        setTimeout(() => {
            loaderOverlay.classList.remove('show');
            document.body.style.overflow = ''; // Revert to default scrolling
        }, 1500);
        document.body.style.overflow = ''; // Revert to default scrolling
    }
};

document.onreadystatechange = handleLoader;

// ------------------------
// Geolocation ------------
// ------------------------

// geolocation - to convert coordinates to human-readable addresses I need an geolocation API 
const getAddress = async (latitude, longitude) => {

    try {
        const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
        );

        if (!res.ok) {
            throw new Error(`Failed to get address. HTTP status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error('Error fetching address:', error.message);
        throw new Error('Failed to get address. Please try again.');
    }
    
}


const showPosition = async (position) => {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationInput = document.getElementById('location');

    try {
        const address = await getAddress(latitude, longitude)

        locationInput.value = `${address.city}, ${address.principalSubdivision}, ${address.countryName}`;

    } catch(error){
        console.error('Failed to get location:', error.message);
        alert('Failed to get location information. Please try again.');
    }
    
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}


// Event Listeners
document.addEventListener('DOMContentLoaded', handleLoader);
hamburger.addEventListener('click', handleHamburger);

if(locationBtn) locationBtn.addEventListener('click', getLocation);

