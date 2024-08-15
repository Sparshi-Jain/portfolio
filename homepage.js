// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Greeting
    const greetingElement = document.querySelector('.hero h1');
    const hours = new Date().getHours();
    let greetingMessage;

    if (hours < 12) {
        greetingMessage = 'Good Morning! Welcome to the Sales Management Portal';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon! Welcome to the Sales Management Portal';
    } else {
        greetingMessage = 'Good Evening! Welcome to the Sales Management Portal';
    }

    greetingElement.textContent = greetingMessage;

    // Highlight Active Navigation Link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Toggle Navigation Menu on Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});