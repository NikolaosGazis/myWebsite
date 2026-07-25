// Burger menu toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Light/Dark theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('ion-icon');
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.setAttribute('name', theme === 'dark' ? 'sunny' : 'moon');
    localStorage.setItem('theme', theme);
}
applyTheme(localStorage.getItem('theme') || 'dark');
themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Nav shrink on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Page transitions
document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('#') && link.getAttribute('target') !== '_blank') {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => window.location.href = href, 150);
        });
    }
});
