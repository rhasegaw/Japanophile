// Logo animation
gsap.from(".logo", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce"
});

// Sakura animation
function createSakuraPetal() {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    
    // Randomize starting position
    sakura.style.left = `${Math.random() * 100}vw`;
    
    // Randomize animation properties
    const animationDuration = 3 + Math.random() * 4;
    const animationDelay = Math.random() * 3;
    
    sakura.style.animationDuration = `${animationDuration}s`;
    sakura.style.animationDelay = `${animationDelay}s`;
    
    // Add random rotation
    sakura.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    return sakura;
}

function createSakura() {
    const sakuraContainer = document.querySelector('.sakura-container');
    if (!sakuraContainer) return;

    // Clear existing petals
    sakuraContainer.innerHTML = '';

    // Create new batch of petals
    const petalCount = 30;
    for (let i = 0; i < petalCount; i++) {
        const petal = createSakuraPetal();
        sakuraContainer.appendChild(petal);
    }

    // Remove petals after animation
    setTimeout(() => {
        const petals = sakuraContainer.getElementsByClassName('sakura');
        while (petals.length > 0) {
            petals[0].remove();
        }
    }, 7000);
}

// Initialize sakura animation
document.addEventListener('DOMContentLoaded', () => {
    createSakura();
    // Recreate petals periodically
    setInterval(createSakura, 7000);
});
