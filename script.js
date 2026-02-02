// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // Animation duration
    once: true,     // Whether animation should happen only once - while scrolling down
});

// Initialize Splide for Testimonials Carousel
document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 5000,
        breakpoints: {
            768: {
                perPage: 1,
                gap: '1rem',
            }
        }
    }).mount();
});

// Initialize Vanilla-Tilt for Glass Cards
VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

// Navbar Scroll Effect (Updated for better visuals)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle (Basic example, needs full implementation for functional menu)
document.querySelector('.menu-toggle').addEventListener('click', () => {
    // Add logic to toggle mobile navigation menu visibility
    alert('Mobile menu toggle clicked! Implement your mobile navigation here.');

});

function openVideo(videoSrc) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");

    video.src = videoSrc;
    modal.style.display = "flex";
    video.play();
}
