// Assistant du portfolio : réponses préparées (sans IA), en français et en anglais.
// Les réponses reprennent uniquement les informations déjà présentes sur le site.

const chatbotOnIndex = !document.body.classList.contains('project-page');

// Lien vers une section de l'accueil, depuis l'accueil ou depuis une page projet
const sectionLink = id => (chatbotOnIndex ? `#${id}` : `index.html#${id}`);

const CHATBOT_UI = {
    fr: {
        title: "Assistant de Fatih",
        subtitle: "Réponses automatiques",
        open: "Ouvrir l'assistant",
        close: "Fermer l'assistant",
        placeholder: "Posez votre question…",
        send: "Envoyer",
        greeting: "Bonjour ! Je suis l'assistant du portfolio de Fatih. Posez-moi une question sur son parcours, ses projets ou son alternance, ou choisissez un sujet ci-dessous.",
        fallback: "Je n'ai pas trouvé de réponse à cette question. Essayez l'un de ces sujets, ou contactez Fatih directement.",
        suggestions: "Suggestions"
    },
    en: {
        title: "Fatih's assistant",
        subtitle: "Automated answers",
        open: "Open the assistant",
        close: "Close the assistant",
        placeholder: "Ask your question…",
        send: "Send",
        greeting: "Hi! I'm the assistant of Fatih's portfolio. Ask me about his background, projects or apprenticeship, or pick a topic below.",
        fallback: "I couldn't find an answer to that. Try one of these topics, or contact Fatih directly.",
        suggestions: "Suggestions"
    }
};

// Chaque sujet : mots-clés (sans accents, en minuscules), réponse FR/EN, liens et suggestions suivantes
const CHATBOT_TOPICS = [
    {
        id: 'profile',
        chip: { fr: "Qui est Fatih ?", en: "Who is Fatih?" },
        keywords: ['qui', 'presente', 'presentation', 'profil', 'about', 'who', 'yourself', 'introduce'],
        answer: {
            fr: "Fatih Türk est étudiant en 3e année de BUT Informatique à l'IUT d'Annecy, parcours administration, gestion et exploitation des données. Il est alternant développeur Python (automatisation & IA) chez Cats Power Design, après une première expérience en Data Analysis et Business Intelligence.",
            en: "Fatih Türk is a third-year BUT Informatique student at IUT Annecy, specializing in data management and analytics. He is a Python developer apprentice (automation & AI) at Cats Power Design, after a first experience in Data Analysis and Business Intelligence."
        },
        links: [{ label: { fr: "Voir le profil", en: "See the profile" }, href: () => sectionLink('profile') }],
        next: ['apprenticeship', 'skills', 'projects']
    },
    {
        id: 'apprenticeship',
        chip: { fr: "Son alternance", en: "His apprenticeship" },
        keywords: ['alternance', 'alternant', 'cats', 'power design', 'entreprise', 'poste', 'actuel', 'actuellement', 'apprenti', 'apprenticeship', 'apprentice', 'company', 'current', 'job', 'travail', 'travaille', 'en ce moment', 'aujourd hui', 'now', 'currently'],
        answer: {
            fr: "Depuis août 2026 (et jusqu'en septembre 2027), Fatih est alternant développeur Python – Automatisation & IA chez Cats Power Design, à Seynod. Il y développe des connecteurs API vers l'ERP, le CRM et Zoho Projects, et conçoit des agents IA (serveur MCP connecté à Claude) qui analysent les demandes métier et automatisent les actions entre les outils.",
            en: "Since August 2026 (and until September 2027), Fatih has been a Python developer apprentice – Automation & AI at Cats Power Design in Seynod. He builds API connectors to the ERP, CRM and Zoho Projects, and designs AI agents (an MCP server connected to Claude) that analyze business requests and automate actions across tools."
        },
        links: [{ label: { fr: "Voir les expériences", en: "See experience" }, href: () => sectionLink('experience') }],
        next: ['experience', 'skills', 'contact']
    },
    {
        id: 'experience',
        chip: { fr: "Ses expériences", en: "His experience" },
        keywords: ['experience', 'experiences', 'stage', 'stagiaire', 'lbdp', 'boutique du pro', 'parcours', 'internship', 'intern', 'leclerc', 'career', 'background'],
        answer: {
            fr: "En plus de son alternance chez Cats Power Design, Fatih a été stagiaire Data Analyst & Business Intelligence chez La Boutique du Pro (avril – juin 2026) : extraction et nettoyage de données WooCommerce et comptables, puis tableaux de bord Power BI (ventes, stocks, KPIs). Il a aussi mené plusieurs projets universitaires en équipe (bases de données, BI, applications web et desktop).",
            en: "Besides his apprenticeship at Cats Power Design, Fatih was a Data Analyst & Business Intelligence intern at La Boutique du Pro (April – June 2026): extracting and cleaning WooCommerce and accounting data, then building Power BI dashboards (sales, inventory, KPIs). He also led several team university projects (databases, BI, web and desktop apps)."
        },
        links: [{ label: { fr: "Voir le parcours", en: "See the timeline" }, href: () => sectionLink('experience') }],
        next: ['projects', 'education', 'skills']
    },
    {
        id: 'skills',
        chip: { fr: "Ses compétences", en: "His skills" },
        keywords: ['competence', 'competences', 'skill', 'skills', 'techno', 'technologie', 'stack', 'langage', 'outils', 'python', 'sql', 'power bi', 'dax', 'knime', 'etl', 'php', 'laravel', 'c#', 'tools', 'maitrise'],
        answer: {
            fr: "Côté data : SQL (PostgreSQL, MySQL), Power BI / DAX, Apache Superset, Excel, Knime / ETL et MongoDB. Côté développement : Python (API, automatisation, ETL), PHP / Laravel, C# (.NET / WPF), HTML, CSS et JavaScript. Côté méthodes : Merise, BPMN, modèle en étoile, Git et Linux.",
            en: "Data: SQL (PostgreSQL, MySQL), Power BI / DAX, Apache Superset, Excel, Knime / ETL and MongoDB. Development: Python (APIs, automation, ETL), PHP / Laravel, C# (.NET / WPF), HTML, CSS and JavaScript. Methods: Merise, BPMN, star schema, Git and Linux."
        },
        links: [{ label: { fr: "Voir les compétences", en: "See skills" }, href: () => sectionLink('skills') }],
        next: ['projects', 'apprenticeship', 'cv']
    },
    {
        id: 'projects',
        chip: { fr: "Ses projets", en: "His projects" },
        keywords: ['projet', 'projets', 'realisation', 'realisations', 'project', 'projects', 'work', 'portfolio', 'exemple'],
        answer: {
            fr: "Quelques projets à découvrir : Open Food Facts (base de données et tableaux de bord Power BI), un Drive sécurisé (fichiers chiffrés AES-256 / RSA), une plateforme type Leboncoin en Laravel avec sa partie BI, Sibilia (gestion de commandes en C# / WPF) et Labyrinthe (jeu vidéo 2D en C#).",
            en: "A few projects to explore: Open Food Facts (database and Power BI dashboards), a secure Drive (AES-256 / RSA encrypted files), a Leboncoin-style platform built with Laravel plus its BI part, Sibilia (order management in C# / WPF) and Labyrinthe (2D video game in C#)."
        },
        links: [
            { label: { fr: "Open Food Facts", en: "Open Food Facts" }, href: () => 'open-food-facts.html' },
            { label: { fr: "Drive sécurisé", en: "Secure Drive" }, href: () => 'secure-file-storage.html' },
            { label: { fr: "Tous les projets", en: "All projects" }, href: () => sectionLink('projects') }
        ],
        next: ['data-project', 'skills', 'contact']
    },
    {
        id: 'data-project',
        chip: { fr: "Un projet data / BI ?", en: "A data / BI project?" },
        keywords: ['open food', 'openfoodfacts', 'power bi', 'base de donnees', 'bases de donnees', 'bdd', 'database', 'tableau de bord', 'tableaux de bord', 'dashboard', 'dashboards', 'bi', 'business intelligence', 'data warehouse', 'etoile', 'star schema', 'olap', 'analyse'],
        answer: {
            fr: "Le projet le plus représentatif est Open Food Facts : à partir de plus de 600 000 produits, Fatih a construit une base PostgreSQL (OLTP), des workflows ETL avec Knime, un modèle en étoile pour l'analyse, puis deux rapports Power BI (ventes et composition des produits). Le projet Leboncoin a aussi une partie BI avec un data warehouse et un suivi du chiffre d'affaires.",
            en: "The most representative project is Open Food Facts: from more than 600,000 products, Fatih built a PostgreSQL (OLTP) database, Knime ETL workflows, a star schema for analysis, then two Power BI reports (sales and product composition). The Leboncoin project also has a BI part with a data warehouse and revenue tracking."
        },
        links: [
            { label: { fr: "Étude de cas Open Food Facts", en: "Open Food Facts case study" }, href: () => 'open-food-facts.html' },
            { label: { fr: "Étude de cas Leboncoin", en: "Leboncoin case study" }, href: () => 'leboncoin.html' }
        ],
        next: ['projects', 'skills', 'cv']
    },
    {
        id: 'education',
        chip: { fr: "Sa formation", en: "His education" },
        keywords: ['formation', 'etude', 'etudes', 'but', 'diplome', 'ecole', 'iut', 'universite', 'bac', 'education', 'degree', 'school', 'university', 'study', 'studies', 'graduation'],
        answer: {
            fr: "Fatih prépare un BUT Informatique (2024 – 2027) à l'IUT d'Annecy (Université Savoie Mont Blanc), parcours administration, gestion et exploitation des données, avec une obtention prévue en 2027. Avant cela, il a obtenu un baccalauréat technologique STI2D, option SIN, au lycée Louis Lachenal d'Argonay.",
            en: "Fatih is completing a BUT Informatique (2024 – 2027) at IUT Annecy (Université Savoie Mont Blanc), specializing in data management and analytics, with expected graduation in 2027. Before that, he earned a technological baccalauréat (STI2D, SIN option) at Lycée Louis Lachenal in Argonay."
        },
        links: [{ label: { fr: "Voir la formation", en: "See education" }, href: () => sectionLink('education') }],
        next: ['apprenticeship', 'skills', 'languages']
    },
    {
        id: 'availability',
        chip: { fr: "Est-il disponible ?", en: "Is he available?" },
        keywords: ['disponible', 'dispo', 'disponibilite', 'recrute', 'recruter', 'recrutement', 'embauche', 'embaucher', 'cdi', 'cdd', 'opportunite', 'offre', 'apres', 'available', 'availability', 'hire', 'hiring', 'opportunity', 'open to'],
        answer: {
            fr: "Fatih est en alternance chez Cats Power Design jusqu'en septembre 2027. Pour une opportunité ou un échange autour de la data, de l'automatisation ou de l'IA, le plus simple est de le contacter directement.",
            en: "Fatih is an apprentice at Cats Power Design until September 2027. For an opportunity or a chat about data, automation or AI, the easiest way is to contact him directly."
        },
        links: [{ label: { fr: "Le contacter", en: "Contact him" }, href: () => sectionLink('contact') }],
        next: ['contact', 'cv', 'apprenticeship']
    },
    {
        id: 'contact',
        chip: { fr: "Le contacter", en: "Contact him" },
        keywords: ['contact', 'contacter', 'joindre', 'mail', 'email', 'e-mail', 'linkedin', 'telephone', 'message', 'ecrire', 'reach', 'phone', 'write'],
        answer: {
            fr: "Vous pouvez écrire à Fatih à fatih.turk070@gmail.com, le contacter sur LinkedIn, ou utiliser le formulaire en bas de la page d'accueil.",
            en: "You can email Fatih at fatih.turk070@gmail.com, reach him on LinkedIn, or use the form at the bottom of the home page."
        },
        links: [
            { label: { fr: "Envoyer un e-mail", en: "Send an email" }, href: () => 'mailto:fatih.turk070@gmail.com' },
            { label: { fr: "LinkedIn", en: "LinkedIn" }, href: () => 'https://www.linkedin.com/in/fatih-tk', external: true },
            { label: { fr: "Formulaire", en: "Contact form" }, href: () => sectionLink('contact') }
        ],
        next: ['cv', 'availability', 'location']
    },
    {
        id: 'cv',
        chip: { fr: "Son CV", en: "His resume" },
        keywords: ['cv', 'curriculum', 'resume', 'telecharger', 'download', 'pdf'],
        answer: {
            fr: "Le CV de Fatih est disponible en version française et en version internationale (anglais).",
            en: "Fatih's resume is available in a French version and an international (English) version."
        },
        links: [
            { label: { fr: "CV français", en: "French CV" }, href: () => 'assets/CV_Fatih_TURK_FR.pdf', external: true },
            { label: { fr: "CV international", en: "International CV" }, href: () => 'assets/CV_Fatih_TURK_International.pdf', external: true }
        ],
        next: ['contact', 'skills', 'projects']
    },
    {
        id: 'languages',
        chip: { fr: "Langues parlées", en: "Languages" },
        keywords: ['langue', 'langues', 'anglais', 'espagnol', 'turc', 'francais', 'languages', 'language', 'english', 'spanish', 'turkish', 'french', 'speak'],
        answer: {
            fr: "Fatih parle français et turc (langues maternelles), anglais (niveau B1) et espagnol (niveau A2).",
            en: "Fatih speaks French and Turkish (native), English (B1 level) and Spanish (A2 level)."
        },
        links: [{ label: { fr: "Voir les langues", en: "See languages" }, href: () => sectionLink('languages') }],
        next: ['location', 'education', 'contact']
    },
    {
        id: 'location',
        chip: { fr: "Où est-il basé ?", en: "Where is he based?" },
        keywords: ['ville', 'annecy', 'region', 'localisation', 'habite', 'where', 'location', 'based', 'city', 'remote', 'teletravail'],
        answer: {
            fr: "Fatih est basé à Annecy, en Haute-Savoie. Son alternance se déroule chez Cats Power Design, à Seynod.",
            en: "Fatih is based in Annecy, in Haute-Savoie (France). His apprenticeship is at Cats Power Design in Seynod."
        },
        links: [],
        next: ['availability', 'contact', 'languages']
    },
    {
        id: 'interests',
        chip: { fr: "Ses centres d'intérêt", en: "His interests" },
        keywords: ['interet', 'interets', 'loisir', 'loisirs', 'passion', 'passions', 'hobby', 'hobbies', 'interests', 'temps libre', 'free time', 'manga', 'voyage', 'sport', 'fitness', 'jeux'],
        answer: {
            fr: "En dehors du travail, Fatih aime la lecture de mangas et la culture japonaise, les voyages, les jeux vidéo et la musculation.",
            en: "Outside work, Fatih enjoys reading manga and Japanese culture, travel, video games and weight training."
        },
        links: [{ label: { fr: "Voir les centres d'intérêt", en: "See interests" }, href: () => sectionLink('interets') }],
        next: ['profile', 'languages', 'contact']
    },
    {
        id: 'greeting',
        chip: null,
        keywords: ['bonjour', 'salut', 'hello', 'coucou', 'bonsoir', 'hey', 'hi', 'yo'],
        answer: {
            fr: "Bonjour ! Que souhaitez-vous savoir sur Fatih ?",
            en: "Hello! What would you like to know about Fatih?"
        },
        links: [],
        next: ['profile', 'apprenticeship', 'projects', 'contact']
    },
    {
        id: 'thanks',
        chip: null,
        keywords: ['merci', 'thanks', 'thank you', 'super', 'parfait', 'top', 'great'],
        answer: {
            fr: "Avec plaisir ! Autre chose ?",
            en: "You're welcome! Anything else?"
        },
        links: [],
        next: ['projects', 'cv', 'contact']
    }
];

const DEFAULT_CHIPS = ['profile', 'apprenticeship', 'projects', 'skills', 'contact'];

const normalizeText = text => text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9#+\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// Un mot-clé d'un seul mot doit correspondre à un mot entier ; une expression peut apparaître n'importe où.
// Les mots-clés longs comptent plus, pour que « open food » l'emporte sur « projet ».
function findTopic(question) {
    const text = ` ${normalizeText(question)} `;
    let best = null;
    let bestScore = 0;

    CHATBOT_TOPICS.forEach(topic => {
        const score = topic.keywords.reduce((total, keyword) => (
            text.includes(` ${keyword} `) || (keyword.includes(' ') && text.includes(keyword))
                ? total + keyword.length
                : total
        ), 0);
        if (score > bestScore) {
            best = topic;
            bestScore = score;
        }
    });

    return best;
}

function initChatbot() {
    const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'fr');
    const ui = () => CHATBOT_UI[lang()];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const root = document.createElement('div');
    root.className = 'chatbot';
    root.innerHTML = `
        <button type="button" class="chatbot-launcher" aria-expanded="false" aria-controls="chatbot-panel">
            <i class="fa-solid fa-comments" aria-hidden="true"></i>
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
        <section class="chatbot-panel" id="chatbot-panel" role="dialog" aria-modal="false" hidden>
            <header class="chatbot-header">
                <span class="chatbot-avatar" aria-hidden="true">FT</span>
                <div>
                    <strong class="chatbot-title"></strong>
                    <span class="chatbot-subtitle"></span>
                </div>
                <button type="button" class="chatbot-close"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
            </header>
            <div class="chatbot-messages" aria-live="polite" data-lenis-prevent></div>
            <div class="chatbot-chips"></div>
            <form class="chatbot-form">
                <input type="text" class="chatbot-input" autocomplete="off" maxlength="200">
                <button type="submit" class="chatbot-send"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i></button>
            </form>
        </section>
    `;
    document.body.appendChild(root);
    document.body.classList.add('has-chatbot');

    const launcher = root.querySelector('.chatbot-launcher');
    const panel = root.querySelector('.chatbot-panel');
    const messages = root.querySelector('.chatbot-messages');
    const chips = root.querySelector('.chatbot-chips');
    const form = root.querySelector('.chatbot-form');
    const input = root.querySelector('.chatbot-input');
    let started = false;

    const applyLanguage = () => {
        const t = ui();
        root.querySelector('.chatbot-title').textContent = t.title;
        root.querySelector('.chatbot-subtitle').textContent = t.subtitle;
        panel.setAttribute('aria-label', t.title);
        launcher.setAttribute('aria-label', panel.hidden ? t.open : t.close);
        root.querySelector('.chatbot-close').setAttribute('aria-label', t.close);
        root.querySelector('.chatbot-send').setAttribute('aria-label', t.send);
        input.placeholder = t.placeholder;
        chips.setAttribute('aria-label', t.suggestions);
    };

    const scrollToEnd = () => {
        messages.scrollTop = messages.scrollHeight;
    };

    const addMessage = (text, from) => {
        const bubble = document.createElement('div');
        bubble.className = `chatbot-message from-${from}`;
        bubble.textContent = text;
        messages.appendChild(bubble);
        scrollToEnd();
        return bubble;
    };

    const addLinks = (bubble, links) => {
        if (!links.length) return;
        const row = document.createElement('div');
        row.className = 'chatbot-links';
        links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href();
            a.textContent = link.label[lang()];
            if (link.external) {
                a.target = '_blank';
                a.rel = 'noopener';
            }
            row.appendChild(a);
        });
        bubble.appendChild(row);
        scrollToEnd();
    };

    const showChips = ids => {
        chips.innerHTML = '';
        ids.map(id => CHATBOT_TOPICS.find(topic => topic.id === id))
            .filter(topic => topic && topic.chip)
            .forEach(topic => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'chatbot-chip';
                chip.textContent = topic.chip[lang()];
                chip.addEventListener('click', () => ask(topic.chip[lang()], topic));
                chips.appendChild(chip);
            });
    };

    // Petit délai « en train d'écrire » pour un rythme de conversation plus naturel
    const reply = (text, links, nextChips) => {
        chips.innerHTML = '';
        const typing = addMessage('', 'bot');
        typing.classList.add('is-typing');
        typing.innerHTML = '<span></span><span></span><span></span>';

        setTimeout(() => {
            typing.remove();
            const bubble = addMessage(text, 'bot');
            addLinks(bubble, links);
            showChips(nextChips);
            // Les suggestions réduisent la zone des messages : on redescend jusqu'à la fin de la réponse
            scrollToEnd();
        }, reduceMotion ? 0 : 450);
    };

    function ask(question, topic = findTopic(question)) {
        addMessage(question, 'user');
        if (topic) reply(topic.answer[lang()], topic.links, topic.next);
        else reply(ui().fallback, [{ label: { fr: "Contacter Fatih", en: "Contact Fatih" }, href: () => sectionLink('contact') }], DEFAULT_CHIPS);
    }

    const setOpen = open => {
        panel.hidden = !open;
        root.classList.toggle('is-open', open);
        launcher.setAttribute('aria-expanded', String(open));
        launcher.setAttribute('aria-label', open ? ui().close : ui().open);

        if (open && !started) {
            started = true;
            addMessage(ui().greeting, 'bot');
            showChips(DEFAULT_CHIPS);
        }
        if (open) input.focus({ preventScroll: true });
        else launcher.focus({ preventScroll: true });
    };

    launcher.addEventListener('click', () => setOpen(panel.hidden));
    root.querySelector('.chatbot-close').addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !panel.hidden) setOpen(false);
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const question = input.value.trim();
        if (!question) return;
        input.value = '';
        ask(question);
    });

    // Lien vers une section de la page en cours : on y défile et on referme sur mobile
    messages.addEventListener('click', event => {
        const link = event.target.closest('a[href^="#"]');
        const target = link && document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        if (window.matchMedia('(max-width: 600px)').matches) setOpen(false);
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        if (typeof lenisInstance !== 'undefined' && lenisInstance) lenisInstance.scrollTo(top, { duration: 1.2 });
        else window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    // La langue du site change via le sélecteur FR / EN (attribut lang de <html>)
    new MutationObserver(() => {
        applyLanguage();
        // Tant que la conversation n'a pas commencé, on traduit aussi l'accueil et les suggestions
        if (started && messages.children.length === 1) {
            messages.firstElementChild.textContent = ui().greeting;
            showChips(DEFAULT_CHIPS);
        }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    applyLanguage();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    initChatbot();
}
