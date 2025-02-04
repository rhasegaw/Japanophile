document.addEventListener('DOMContentLoaded', () => {
    // Navigation
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

    // Form submission
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            nickname: document.getElementById('nickname').value,
            age: document.getElementById('age').value,
            discord: document.getElementById('discord').value,
            email: document.getElementById('email').value || 'Not provided'
        };

        // Validate Discord username
        if (formData.discord.length < 2 || formData.discord.length > 32) {
            alert('Discord username must be between 2 and 32 characters');
            return;
        }

        // Here you would typically send this data to a server
        console.log('Form submitted with data:', formData);
        
        // Show success message
        alert('Thank you for joining! We\'ll contact you via Discord.');
        
        // Clear form and close modal
        joinForm.reset();
        modal.style.display = 'none';
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
