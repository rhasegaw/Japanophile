// Logo animation
gsap.from(".logo", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce"
});

// Sakura animation
function createSakura() {
    const sakuraContainer = document.querySelector('.sakura-container');
    for (let i = 0; i < 20; i++) {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.animationDuration = Math.random() * 3 + 2 + 's';
        sakura.style.animationDelay = Math.random() * 3 + 's';
        sakuraContainer?.appendChild(sakura);
    }
}

document.addEventListener('DOMContentLoaded', createSakura);
