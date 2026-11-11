// Thème du portfolio, choisi avec le bouton de thème (mémorisé) ou forcé pour un lien avec ?theme=manga|classic.
// Chargé de façon synchrone dans <head> pour appliquer le thème avant le premier rendu.
(function () {
    var STORAGE_KEY = 'portfolio-theme';
    var THEMES = ['manga', 'classic'];

    // Un ?theme= ne vaut que pour la session en cours : il ne remplace pas le choix mémorisé du visiteur
    function readTheme() {
        var fromUrl = new URLSearchParams(window.location.search).get('theme');
        try {
            if (THEMES.indexOf(fromUrl) !== -1) {
                sessionStorage.setItem(STORAGE_KEY, fromUrl);
                return fromUrl;
            }
            return sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return fromUrl;
        }
    }

    var isManga = readTheme() === 'manga';

    if (isManga) {
        var sfx = encodeURIComponent('ドンゴデータアナリストバッ!');
        document.documentElement.classList.add('theme-manga');
        // Feuilles de style écrites pendant l'analyse du <head> : elles bloquent le rendu, donc pas de flash
        document.write(
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&display=swap">' +
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap&text=' + sfx + '">' +
            '<link rel="stylesheet" href="css/theme-manga.css">'
        );
    }

    // À appeler en fin de <body>, après les scripts de la page. Les scripts ne bloquent pas l'analyse
    // mais s'exécutent dans l'ordre (async = false).
    window.writeThemeScripts = function () {
        if (!isManga) return;
        [
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
            'js/theme-manga.js'
        ].forEach(function (src) {
            var script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.body.appendChild(script);
        });
    };

    // Le thème est appliqué au chargement, donc on mémorise le choix et on recharge
    document.addEventListener('click', function (event) {
        var button = event.target.closest && event.target.closest('[data-theme-toggle]');
        if (!button) return;

        var nextTheme = isManga ? 'classic' : 'manga';
        var url = new URL(window.location.href);
        url.hash = '';
        try {
            localStorage.setItem(STORAGE_KEY, nextTheme);
            sessionStorage.removeItem(STORAGE_KEY);
            url.searchParams.delete('theme');
        } catch (e) {
            url.searchParams.set('theme', nextTheme);
        }
        window.location.href = url.toString();
    });
})();
