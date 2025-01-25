// Toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') 
        ? 'Toggle Light Mode' 
        : 'Toggle Dark Mode';
});

// Fade-in on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const handleScroll = () => {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
    animateSkills();
};

// Animate skill bars
const skillBars = document.querySelectorAll('.bar .progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            bar.style.width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
        }
    });
};

// Trigger scroll animations on load and scroll
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
