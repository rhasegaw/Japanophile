// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
});

// Modal functionality
const modal = document.getElementById('joinModal');
const joinBtn = document.querySelector('.cta-button');
const closeBtn = document.querySelector('.close');
const joinForm = document.getElementById('join-form');

// Open modal
joinBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Discord ID validation
function validateDiscordID(discordId) {
    // Basic Discord ID format validation (username#0000)
    const discordRegex = /^.{3,32}#[0-9]{4}$/;
    return discordRegex.test(discordId);
}

// Form submission
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        nickname: document.getElementById('nickname').value,
        age: document.getElementById('age').value,
        discord: document.getElementById('discord').value,
        email: document.getElementById('email').value || 'Not provided'
    };

    // Validate Discord ID
    if (!validateDiscordID(formData.discord)) {
        alert('Please enter a valid Discord ID (username#0000)');
        return;
    }

    // Here you would typically send this data to a server
    console.log('Form submitted with data:', formData);
    
    // For demonstration, show success message
    alert('Thank you for joining! We\'ll contact you via Discord.');
    
    // Clear form and close modal
    joinForm.reset();
    modal.style.display = 'none';
});
