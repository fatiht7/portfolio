let projectLanguage = 'fr';
let projectLenis = null;

document.addEventListener('DOMContentLoaded', () => {
    setProjectLanguage('fr');
    initProjectScroll();
    initProjectProgress();

    document.querySelectorAll('[data-set-lang]').forEach((button) => {
        button.addEventListener('click', () => setProjectLanguage(button.dataset.setLang));
    });
});

function setProjectLanguage(language) {
    projectLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll('[data-language]').forEach((element) => {
        element.style.display = element.dataset.language === language ? '' : 'none';
    });

    document.querySelectorAll('[data-set-lang]').forEach((button) => {
        const active = button.dataset.setLang === language;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

function initProjectScroll() {
    if (typeof Lenis === 'undefined') return;

    projectLenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.85
    });

    const animate = (time) => {
        projectLenis.raf(time);
        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
}

function initProjectProgress() {
    const progress = document.querySelector('#scroll-progress');
    if (!progress) return;

    const update = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
        progress.style.width = `${Math.min(100, percentage)}%`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
}
