// Thème "manga / encre", chargé par js/theme-loader.js quand ce thème est actif

const MANGA_INK = [13, 11, 10];
const MANGA_PAPER = [241, 236, 225];
const mangaReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const engraveCache = new Map();

const mangaIsProjectPage = document.body.classList.contains('project-page');

function initMangaTheme() {
    if (mangaIsProjectPage) {
        initMangaWoodgrain('.case-hero');
        initMangaGallery();
        initMangaDrips('main > header, main > section, main > nav', block => {
            if (block.matches('.case-hero')) return '#c4211a';
            if (block.matches('.case-gallery, .case-showcase, .architecture-section')) return 'rgb(241,236,225)';
            if (block.matches('.case-result')) return 'rgb(215,38,30)';
            return 'rgb(13,11,10)';
        });
        initMangaSfx([
            { section: '.case-section:not(.architecture-section):not(.case-result):not(.case-features)', text: 'ゴゴゴ', style: 'top: 2rem; right: 0; transform: rotate(8deg);' },
            { section: '.architecture-section', text: 'ドドド', style: 'top: 3rem; right: -1rem; transform: rotate(-8deg);' }
        ]);
        initMangaMotion('.case-hero', '.case-hero h1', '.case-facts', '.case-lead, .case-actions');
        return;
    }

    initMangaWoodgrain('.hero');
    initMangaPortrait();
    initMangaRails();
    initMangaProjects();
    initMangaDrips('main > section', block => {
        if (block.matches('#hero')) return '#c4211a';
        if (block.matches('#experience')) return 'rgb(241,236,225)';
        if (block.matches('#contact')) return 'rgb(215,38,30)';
        return 'rgb(13,11,10)';
    });
    initMangaSfx([
        { section: '#skills', text: 'ゴゴゴ', style: 'top: 2rem; right: -1rem; transform: rotate(8deg);' },
        { section: '#projects', text: 'ドドド', style: 'top: 9rem; left: -2rem; transform: rotate(-10deg);' },
        { section: '#languages', text: 'バン!', style: 'top: 3rem; right: 0; transform: rotate(-6deg);' }
    ]);
    initMangaMotion('.hero', '.hero-name', '.portrait-frame', '.hero .subtitle, .hero .gradient-text, .hero-actions');
}

function mulberry32(seed) {
    return () => {
        seed |= 0;
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const clamp01 = value => (value < 0 ? 0 : value > 1 ? 1 : value);

/* ---------- Filtre gravure : trame de lignes ondulées + hachures + contours ---------- */

function engraveImage(img, options = {}) {
    const {
        maxWidth = 900,
        period = 5,
        paper = MANGA_PAPER,
        ink = MANGA_INK,
        contrast = 1.3,
        brightness = 0.05,
        edgeStrength = 1
    } = options;

    const scale = Math.min(1, maxWidth / img.naturalWidth);
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, w, h);

    const src = ctx.getImageData(0, 0, w, h).data;
    const lum = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) {
        const p = i * 4;
        const alpha = src[p + 3] / 255;
        const l = (0.299 * src[p] + 0.587 * src[p + 1] + 0.114 * src[p + 2]) / 255;
        lum[i] = clamp01(((l * alpha + (1 - alpha)) - 0.5) * contrast + 0.5 + brightness);
    }

    const out = ctx.createImageData(w, h);
    const o = out.data;
    const half = period / 2;

    // sin(a + b) = sin a·cos b + cos a·sin b : on précalcule par ligne et par colonne
    // pour éviter deux Math.sin par pixel dans la boucle principale
    const rowSin1 = new Float32Array(h), rowCos1 = new Float32Array(h);
    const rowSin2 = new Float32Array(h), rowCos2 = new Float32Array(h);
    for (let y = 0; y < h; y++) {
        rowSin1[y] = Math.sin(y * 0.05);
        rowCos1[y] = Math.cos(y * 0.05);
        rowSin2[y] = Math.sin(y * 0.013);
        rowCos2[y] = Math.cos(y * 0.013);
    }
    const colSin1 = new Float32Array(w), colCos1 = new Float32Array(w);
    const colSin2 = new Float32Array(w), colCos2 = new Float32Array(w);
    for (let x = 0; x < w; x++) {
        colSin1[x] = Math.sin(x * 0.017);
        colCos1[x] = Math.cos(x * 0.017);
        colSin2[x] = Math.sin(-x * 0.041);
        colCos2[x] = Math.cos(-x * 0.041);
    }

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const i = y * w + x;
            const dark = 1 - lum[i];

            // Lignes verticales ondulées dont l'épaisseur suit l'ombre
            const wobble = (rowSin1[y] * colCos1[x] + rowCos1[y] * colSin1[x]) * 1.1
                + (rowSin2[y] * colCos2[x] + rowCos2[y] * colSin2[x]) * 1.7;
            const u = (((x + wobble) % period) + period) % period;
            const dist = Math.abs(u - half) / half;
            // L'anticrénelage seul laisserait un trait pâle même à épaisseur nulle : on l'atténue près de zéro
            const lineWidth = (dark - 0.14) * 1.25;
            let coverage = clamp01((lineWidth - dist) * half + 0.5) * clamp01(lineWidth * 4);

            // Hachures croisées dans les zones les plus sombres
            if (dark > 0.6) {
                const v = ((((x - y) * 0.7071 + wobble * 0.5) % period) + period) % period;
                const dist2 = Math.abs(v - half) / half;
                const hatchWidth = (dark - 0.6) * 2.4;
                coverage = Math.max(coverage, clamp01((hatchWidth - dist2) * half + 0.5) * clamp01(hatchWidth * 4));
            }

            // Contours (Sobel) pour garder le dessin lisible
            if (x > 0 && y > 0 && x < w - 1 && y < h - 1) {
                const a = lum[i - w - 1], b = lum[i - w], c = lum[i - w + 1];
                const d = lum[i - 1], f = lum[i + 1];
                const g = lum[i + w - 1], hh = lum[i + w], k = lum[i + w + 1];
                const gx = (c + 2 * f + k) - (a + 2 * d + g);
                const gy = (g + 2 * hh + k) - (a + 2 * b + c);
                const edge = Math.sqrt(gx * gx + gy * gy) / 4;
                coverage = Math.max(coverage, clamp01((edge - 0.12) * 5 * edgeStrength));
            }

            const p = i * 4;
            o[p] = paper[0] + (ink[0] - paper[0]) * coverage;
            o[p + 1] = paper[1] + (ink[1] - paper[1]) * coverage;
            o[p + 2] = paper[2] + (ink[2] - paper[2]) * coverage;
            o[p + 3] = 255;
        }
    }

    ctx.putImageData(out, 0, 0);
    return new Promise((resolve, reject) => canvas.toBlob(blob => {
        if (blob) resolve(URL.createObjectURL(blob));
        else reject(new Error('Gravure impossible : canvas vide'));
    }, 'image/png'));
}

const loadImage = url => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
});

// Une seule gravure à la fois, chacune dans sa propre tâche, pour laisser passer les animations entre deux
let engraveQueue = Promise.resolve();

function engraveUrl(url, options = {}) {
    const key = url + JSON.stringify(options);
    if (!engraveCache.has(key)) {
        const job = engraveQueue.then(() => loadImage(url)).then(img => new Promise((resolve, reject) => {
            setTimeout(() => {
                // getImageData lève une erreur si l'image vient d'une autre origine sans CORS
                try {
                    engraveImage(img, options).then(resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0);
        }));
        engraveQueue = job.catch(() => {});
        engraveCache.set(key, job);
    }
    return engraveCache.get(key);
}

// Lance la gravure seulement quand l'élément approche de l'écran
const nearViewportCallbacks = new WeakMap();
const nearViewportObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        nearViewportObserver.unobserve(entry.target);
        nearViewportCallbacks.get(entry.target)?.();
        nearViewportCallbacks.delete(entry.target);
    });
}, { rootMargin: '600px 0px' });

function whenNearViewport(el, callback) {
    nearViewportCallbacks.set(el, callback);
    nearViewportObserver.observe(el);
}

function addInkImage(photo, url) {
    const layer = document.createElement('img');
    layer.className = 'ink-layer';
    layer.alt = '';
    layer.setAttribute('aria-hidden', 'true');
    layer.src = url;
    photo.after(layer);
}

function backgroundUrl(el) {
    const match = /url\(["']?(.*?)["']?\)/.exec(el.style.backgroundImage || getComputedStyle(el).backgroundImage);
    return match ? match[1] : null;
}

/* ---------- Hero : fond rouge façon bois gravé ---------- */

function initMangaWoodgrain(selector) {
    const hero = document.querySelector(selector);
    if (!hero) return;

    const wrap = document.createElement('div');
    wrap.className = 'manga-woodgrain';
    wrap.setAttribute('aria-hidden', 'true');
    const canvas = document.createElement('canvas');
    wrap.appendChild(canvas);
    hero.prepend(wrap);

    const draw = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = wrap.clientWidth;
        const h = wrap.clientHeight;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const bg = ctx.createLinearGradient(0, 0, w, h);
        bg.addColorStop(0, '#d9281f');
        bg.addColorStop(1, '#b81d16');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, w, h);

        const rand = mulberry32(7);
        ctx.strokeStyle = 'rgb(13,11,10)';
        ctx.lineCap = 'round';

        // Fibres fines
        const count = Math.round(w / 8);
        for (let n = 0; n < count; n++) {
            const x0 = rand() * w;
            const drift = (rand() - 0.5) * 0.18;
            const amp = 3 + rand() * 14;
            const freq = 0.002 + rand() * 0.006;
            const phase = rand() * Math.PI * 2;
            const baseWidth = 0.35 + Math.pow(rand(), 3) * 3;
            let y = -20 + rand() * h * 0.25;

            while (y < h + 20) {
                const length = 50 + rand() * h * 0.5;
                ctx.beginPath();
                for (let yy = y; yy < y + length; yy += 8) {
                    const xx = x0 + Math.sin(yy * freq + phase) * amp + yy * drift;
                    if (yy === y) ctx.moveTo(xx, yy);
                    else ctx.lineTo(xx, yy);
                }
                ctx.lineWidth = baseWidth * (0.6 + rand() * 0.8);
                ctx.globalAlpha = 0.55 + rand() * 0.4;
                ctx.stroke();
                y += length + (rand() < 0.5 ? 0 : 12 + rand() * 90);
            }
        }

        // Grandes fissures irrégulières
        ctx.globalAlpha = 1;
        const cracks = Math.max(3, Math.round(w / 240));
        for (let n = 0; n < cracks; n++) {
            let x = rand() * w;
            ctx.beginPath();
            ctx.moveTo(x, -10);
            for (let y = 0; y < h + 20; y += 14) {
                x += (rand() - 0.5) * 9 + 0.6;
                ctx.lineTo(x, y);
            }
            ctx.lineWidth = 2 + rand() * 4;
            ctx.stroke();
        }
    };

    let resizeTimer;
    new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(draw, 120);
    }).observe(wrap);
    draw();
}

/* ---------- Images gravées ---------- */

function initMangaPortrait() {
    const frame = document.querySelector('.portrait-frame');
    const photo = frame?.querySelector('img');
    if (!photo) return;

    engraveUrl(photo.currentSrc || photo.src, { maxWidth: 820, period: 5, contrast: 1.45, brightness: 0.08 })
        .then(url => addInkImage(photo, url))
        .catch(() => {});
}

function initMangaRails() {
    document.querySelectorAll('.visual-track img').forEach(img => {
        engraveUrl(img.getAttribute('src'), { maxWidth: 320, period: 4, contrast: 1.2, edgeStrength: 0.8 })
            .then(url => { img.src = url; })
            .catch(() => {});
    });
}

// Case révélée par un balayage d'encre quand elle arrive à l'écran
let inkRevealObserver = null;

function observeInkReveal(el) {
    if (mangaReduceMotion) return;
    if (!inkRevealObserver) {
        inkRevealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.remove('ink-pending');
                entry.target.classList.add('ink-in');
                inkRevealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.2 });
    }
    el.classList.add('ink-pending');
    inkRevealObserver.observe(el);
}

function initMangaGallery() {
    document.querySelectorAll('.case-gallery-item, .case-main-visual').forEach(figure => {
        const photo = figure.querySelector('img');
        if (!photo) return;
        observeInkReveal(figure);
        // Pas de survol sur mobile : un tap affiche ou masque la capture originale
        figure.addEventListener('click', () => figure.classList.toggle('ink-off'));

        whenNearViewport(figure, () => {
            engraveUrl(photo.getAttribute('src'), { maxWidth: 1400, period: 4, contrast: 1.1, brightness: 0.12, edgeStrength: 0.8 })
                .then(url => addInkImage(photo, url))
                .catch(() => {});
        });
    });
}

function initMangaProjects() {
    const container = document.querySelector('#projects-container');
    if (!container) return;

    // Les cartes sont régénérées à chaque filtre / changement de langue
    const setup = () => {
        container.querySelectorAll('.project-card:not([data-ink])').forEach(card => {
            card.dataset.ink = '1';
            const visual = card.querySelector('.project-img');
            const url = visual && backgroundUrl(visual);

            observeInkReveal(card);
            if (!url) return;

            whenNearViewport(card, () => {
                engraveUrl(url, { maxWidth: 900, period: 4, contrast: 1.15, edgeStrength: 1.2 })
                    .then(inkUrl => {
                        const layer = document.createElement('div');
                        layer.className = 'ink-layer';
                        layer.style.backgroundImage = `url("${inkUrl}")`;
                        visual.appendChild(layer);
                    })
                    .catch(() => {});
            });
        });
    };

    new MutationObserver(setup).observe(container, { childList: true });
    setup();
}

/* ---------- Coulures d'encre ---------- */

function dripPath(seed) {
    const rand = mulberry32(seed);
    let d = 'M0 0 H1000 V18 ';
    let x = 1000;

    while (x > 0) {
        const width = 18 + rand() * 50;
        const next = Math.max(0, x - width);
        const mid = (x + next) / 2;

        if (rand() < 0.45) {
            const depth = 30 + rand() * 90;
            const radius = Math.min(width * 0.35, 6 + rand() * 7);
            d += `L${mid + radius} 18 C${mid + radius} ${18 + depth * 0.6} ${mid + radius * 1.3} ${depth} ${mid} ${depth + 4} `;
            d += `C${mid - radius * 1.3} ${depth} ${mid - radius} ${18 + depth * 0.6} ${mid - radius} 18 L${next} ${(18 + rand() * 8 - 4).toFixed(1)} `;
        } else {
            d += `Q${mid} ${(18 + rand() * 14).toFixed(1)} ${next} 18 `;
        }
        x = next;
    }

    return d + 'Z';
}

// L'encre du bloc précédent coule en haut de chaque bloc dont la couleur de fond change
function initMangaDrips(blocksSelector, colorOf) {
    const blocks = [...document.querySelectorAll(blocksSelector)];
    blocks.forEach((block, index) => {
        if (index === 0) return;
        const previousColor = colorOf(blocks[index - 1]);
        if (previousColor === colorOf(block)) return;

        const drip = document.createElement('div');
        drip.className = 'ink-drip';
        drip.setAttribute('aria-hidden', 'true');
        drip.innerHTML = `<svg viewBox="0 0 1000 130" preserveAspectRatio="none"><path fill="${previousColor}" d="${dripPath(11 + index * 13)}"/></svg>`;
        block.appendChild(drip);
    });
}

/* ---------- Onomatopées ---------- */

function initMangaSfx(items) {
    items.forEach(item => {
        const section = document.querySelector(item.section);
        if (!section) return;
        const sfx = document.createElement('span');
        sfx.className = 'manga-sfx';
        sfx.setAttribute('aria-hidden', 'true');
        sfx.textContent = item.text;
        sfx.style.cssText = item.style;
        section.prepend(sfx);
    });
}

/* ---------- Animations GSAP ---------- */

function initMangaMotion(hero, title, panel, copy) {
    if (mangaReduceMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = (typeof lenisInstance !== 'undefined' && lenisInstance)
        || (typeof projectLenis !== 'undefined' && projectLenis);
    if (lenis) lenis.on('scroll', ScrollTrigger.update);

    // Entrée de la planche d'ouverture
    gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.manga-woodgrain', { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'power3.inOut' })
        .from(title, { scale: 1.4, opacity: 0, duration: 0.45, ease: 'back.out(2.2)' }, '-=0.25')
        .from(panel, { rotation: -12, scale: 0.8, opacity: 0, duration: 0.6, ease: 'back.out(1.6)' }, '<0.1')
        .from(copy, { x: -40, opacity: 0, duration: 0.5, stagger: 0.08 }, '<0.15');

    gsap.to('.manga-woodgrain canvas', {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
    });

    gsap.to(panel, {
        rotation: 3,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
    });

    document.querySelectorAll('.ink-drip').forEach(drip => {
        gsap.fromTo(drip, { scaleY: 0.1 }, {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: drip, start: 'top bottom', end: 'top 35%', scrub: true }
        });
    });

    document.querySelectorAll('.manga-sfx').forEach(sfx => {
        gsap.fromTo(sfx, { yPercent: 60 }, {
            yPercent: -60,
            ease: 'none',
            scrollTrigger: { trigger: sfx.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
        });
    });
}

// En fin de fichier, une fois toutes les constantes initialisées. Ce script est inséré après ceux de
// la page : il s'exécute après leur DOMContentLoaded (contenu des études de cas déjà généré) ou, s'il
// arrive avant, juste après eux.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMangaTheme);
} else {
    initMangaTheme();
}
