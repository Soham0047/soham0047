// Scroll Animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerHeight = window.innerHeight / 1.2;

    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top < triggerHeight) {
            section.classList.add('visible');
        }
    });
});

// Parallax Effect on Scroll
document.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    const scrollPosition = window.scrollY;

    parallaxElements.forEach((el) => {
        el.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
});

// Initial Animations
window.addEventListener('load', () => {
    document.querySelector('.hero-title').classList.add('visible');
    document.querySelector('.btn').classList.add('visible');
});
document.querySelectorAll('.floating-tiles').forEach(tileContainer => {
    tileContainer.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY, target } = e;
        const { clientWidth, clientHeight } = target;

        const xPos = (offsetX / clientWidth) * 100;
        const yPos = (offsetY / clientHeight) * 100;

        tileContainer.style.setProperty('--x-pos', `${xPos}%`);
        tileContainer.style.setProperty('--y-pos', `${yPos}%`);
    });
});
