// Mobile Navigation Menu

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });

});


// Dark Mode

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️";
        themeButton.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeButton.textContent = "🌙";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
    }

});


// Contact Form

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();

});


// Current Year

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();