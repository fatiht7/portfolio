const caseStudies = {
    openFoodFacts: {
        accent: "#f0cc61",
        number: "01",
        date: { fr: "Projet universitaire (SAÉ) · Mars - Avril 2026", en: "University project (SAÉ) · March - April 2026" },
        title: "Open Food Facts",
        lead: {
            fr: "Transformer plus de 600 000 produits alimentaires en une chaîne Data complète, de la base opérationnelle aux tableaux de bord Power BI.",
            en: "Turn more than 600,000 food products into a complete data pipeline, from the operational database to Power BI dashboards."
        },
        facts: [
            ["Rôle", "Role", "Data, BI & modélisation", "Data, BI & modeling"],
            ["Contexte", "Context", "Projet en équipe", "Team project"],
            ["Stack", "Stack", "PostgreSQL · Knime · Power BI", "PostgreSQL · Knime · Power BI"],
            ["Périmètre", "Scope", "OLTP · ETL · OLAP · Reporting", "OLTP · ETL · OLAP · Reporting"]
        ],
        challenge: {
            fr: "Construire une architecture capable d'exploiter un jeu de données volumineux et hétérogène, puis le rendre compréhensible à travers des indicateurs métier.",
            en: "Build an architecture able to process a large, heterogeneous dataset and make it understandable through business indicators.",
            detailsFr: [
                "Les données Open Food Facts devaient être nettoyées, structurées et chargées dans une base PostgreSQL cohérente.",
                "Une seconde modélisation orientée analyse devait ensuite alimenter deux rapports : ventes simulées et composition nutritionnelle."
            ],
            detailsEn: [
                "Open Food Facts data had to be cleaned, structured and loaded into a consistent PostgreSQL database.",
                "A second analytics-oriented model then had to feed two reports: simulated sales and nutritional composition."
            ]
        },
        methods: [
            ["fa-database", "Base OLTP", "OLTP database", "Modèle relationnel Merise pour les produits, ingrédients, distributeurs et ventes.", "Merise relational model for products, ingredients, retailers and sales."],
            ["fa-diagram-project", "ETL Knime", "Knime ETL", "Workflows de nettoyage, transformation et insertion automatisée dans PostgreSQL.", "Automated cleaning, transformation and insertion workflows into PostgreSQL."],
            ["fa-star", "Modèle en étoile", "Star schema", "Tables de faits et dimensions conçues pour simplifier et accélérer l'analyse.", "Fact and dimension tables designed to simplify and accelerate analysis."],
            ["fa-chart-column", "Power BI", "Power BI", "Mesures, filtres et visualisations pour explorer ventes, Nutri-Score et classification NOVA.", "Measures, filters and visuals to explore sales, Nutri-Score and NOVA classification."]
        ],
        gallery: [
            ["assets/open-food-facts/ventespage1.jpg", "Dashboard ventes", "Sales dashboard", "Vue de la saisonnalité, du chiffre d'affaires et de l'évolution par enseigne.", "Seasonality, revenue and retailer evolution overview."],
            ["assets/open-food-facts/compositionpage1.jpg", "Composition des produits", "Product composition", "Analyse de 605 674 produits par catégorie, Nutri-Score et NOVA.", "Analysis of 605,674 products by category, Nutri-Score and NOVA."],
            ["assets/open-food-facts/mldBaseOLTP.jpg", "Modèle OLTP", "OLTP model", "Structure relationnelle de la base opérationnelle.", "Relational structure of the operational database."],
            ["assets/open-food-facts/mldBaseOLAP.jpg", "Modèle OLAP", "OLAP model", "Schéma en étoile utilisé par les rapports analytiques.", "Star schema used by the analytical reports."],
            ["assets/open-food-facts/ETLKnime_InsertionDonnée.jpg", "Pipeline ETL", "ETL pipeline", "Workflow Knime d'insertion et de transformation des données.", "Knime data insertion and transformation workflow."]
        ],
        result: {
            fr: "Une chaîne Data cohérente, de la donnée brute à la décision.",
            en: "A consistent data pipeline, from raw data to decision-making.",
            textFr: "Ce projet m'a permis de relier conception de bases, qualité des données, automatisation ETL et restitution visuelle dans un même cas d'usage.",
            textEn: "This project allowed me to connect database design, data quality, ETL automation and visual reporting in one use case."
        }
    },
    leboncoin: {
        accent: "#78b8ff",
        number: "02",
        date: { fr: "Projet universitaire (SAÉ) · Octobre 2025 - Janvier 2026", en: "University project (SAÉ) · October 2025 - January 2026" },
        title: "Leboncoin Location",
        lead: {
            fr: "Concevoir en équipe une plateforme de location de vacances, de la modélisation métier à l'application Laravel et au reporting Power BI.",
            en: "Design a vacation rental platform as a team, from business modeling to the Laravel application and Power BI reporting."
        },
        facts: [
            ["Rôle", "Role", "Conception, backend & BI", "Design, backend & BI"],
            ["Équipe", "Team", "5 étudiants", "5 students"],
            ["Stack", "Stack", "Laravel · PostgreSQL · Power BI", "Laravel · PostgreSQL · Power BI"],
            ["Méthodes", "Methods", "Merise · BPMN · Schéma en étoile", "Merise · BPMN · Star schema"]
        ],
        challenge: {
            fr: "Modéliser un domaine métier riche avant de construire une application capable de gérer locations, utilisateurs, incidents et indicateurs financiers.",
            en: "Model a rich business domain before building an application able to manage rentals, users, incidents and financial indicators.",
            detailsFr: [
                "La plateforme devait couvrir les parcours locataire et propriétaire, avec réservations, paiements, incidents et remboursements.",
                "La base opérationnelle devait aussi servir de source à un modèle décisionnel et à des tableaux de bord Power BI."
            ],
            detailsEn: [
                "The platform had to cover tenant and owner journeys, including bookings, payments, incidents and refunds.",
                "The operational database also had to feed a decision model and Power BI dashboards."
            ]
        },
        methods: [
            ["fa-sitemap", "Merise", "Merise", "Conception du MCD, du MLD et d'un MPD de plus de 30 tables.", "CDM, LDM and a physical model with more than 30 tables."],
            ["fa-diagram-project", "Processus BPMN", "BPMN processes", "Modélisation des incidents et remboursements entre les différents acteurs.", "Modeling incidents and refunds between the different stakeholders."],
            ["fa-code", "Application Laravel", "Laravel application", "Développement des parcours métier et connexion à la base PostgreSQL.", "Development of business workflows connected to PostgreSQL."],
            ["fa-chart-line", "Analyse BI", "BI analysis", "Schéma en étoile, mesures DAX et analyse du chiffre d'affaires.", "Star schema, DAX measures and revenue analysis."]
        ],
        gallery: [
            ["assets/previews/previewLeboncoin.png", "Application web", "Web application", "Interface de la plateforme de location développée avec Laravel.", "Vacation rental platform interface developed with Laravel."],
            ["assets/leboncoin/mpd.png", "Modèle physique", "Physical data model", "Structure PostgreSQL détaillée avec clés et contraintes.", "Detailed PostgreSQL structure with keys and constraints."],
            ["assets/leboncoin/bpmn.png", "Processus BPMN", "BPMN process", "Gestion d'un incident et d'un remboursement.", "Incident and refund management."],
            ["assets/leboncoin/powerbi-1.png", "Dashboard revenus", "Revenue dashboard", "Suivi du chiffre d'affaires par hébergement et propriétaire.", "Revenue tracking by accommodation and owner."],
            ["assets/leboncoin/powerbi-2.png", "Analyse géographique", "Geographic analysis", "Répartition du chiffre d'affaires par région et ville.", "Revenue distribution by region and city."]
        ],
        github: "https://github.com/BazeOnigiri/SAE_Leboncoin.git",
        result: {
            fr: "Un projet transversal, de l'analyse métier à la visualisation.",
            en: "A cross-functional project, from business analysis to visualization.",
            textFr: "Cette SAÉ m'a appris à maintenir la cohérence entre processus, modèle de données, application et indicateurs, tout en travaillant dans une équipe de cinq.",
            textEn: "This project taught me how to maintain consistency between processes, data model, application and indicators while working in a five-person team."
        }
    },
    sibilia: {
        accent: "#e7ba6b",
        number: "03",
        date: { fr: "Projet universitaire (SAÉ) · Juin 2025", en: "University project (SAÉ) · June 2025" },
        title: "Sibilia",
        lead: {
            fr: "Une application desktop de gestion commerciale pour centraliser clients, plats, stocks et commandes d'un service traiteur.",
            en: "A desktop business management application centralizing customers, dishes, inventory and orders for a catering service."
        },
        facts: [
            ["Rôle", "Role", "Développement logiciel", "Software development"],
            ["Contexte", "Context", "Projet en équipe", "Team project"],
            ["Stack", "Stack", "C# · WPF · XAML", "C# · WPF · XAML"],
            ["Architecture", "Architecture", "MVVM · MySQL", "MVVM · MySQL"]
        ],
        challenge: {
            fr: "Créer une interface desktop claire pour remplacer une gestion dispersée des commandes et fiabiliser les opérations quotidiennes d'un traiteur.",
            en: "Create a clear desktop interface to replace scattered order management and make a caterer's daily operations more reliable.",
            detailsFr: [
                "L'application devait permettre de retrouver rapidement clients et produits, puis de composer une commande sans erreur de calcul.",
                "Le code devait rester structuré malgré plusieurs écrans et opérations CRUD, d'où l'utilisation de l'architecture MVVM."
            ],
            detailsEn: [
                "The application had to quickly retrieve customers and products, then build an order without calculation errors.",
                "The code had to remain structured across multiple screens and CRUD operations, leading to the use of MVVM."
            ]
        },
        methods: [
            ["fa-user-shield", "Authentification", "Authentication", "Connexion sécurisée et gestion des rôles utilisateur.", "Secure login and user role management."],
            ["fa-boxes-stacked", "Gestion métier", "Business management", "CRUD pour les clients, plats, stocks et commandes.", "CRUD for customers, dishes, inventory and orders."],
            ["fa-layer-group", "Architecture MVVM", "MVVM architecture", "Séparation de l'interface, de la logique et des données.", "Separation of interface, logic and data."],
            ["fa-magnifying-glass", "Recherche", "Search", "Filtrage en temps réel pour accélérer les opérations.", "Real-time filtering to speed up operations."]
        ],
        gallery: [
            ["assets/sibilia/order.png", "Création d'une commande", "Order creation", "Sélection du client et des plats avec calcul automatique du total.", "Customer and dish selection with automatic total calculation."],
            ["assets/sibilia/dashboard.png", "Menu principal", "Main menu", "Accès aux modules Commandes, Plats et Clients.", "Access to Orders, Dishes and Customers modules."],
            ["assets/sibilia/login.png", "Connexion", "Login", "Écran d'authentification de l'application.", "Application authentication screen."]
        ],
        github: "https://github.com/yanis381/SAE201.git",
        result: {
            fr: "Une première application métier structurée et utilisable.",
            en: "A first structured and usable business application.",
            textFr: "Sibilia m'a permis de consolider C#, WPF et la conception d'interfaces, tout en découvrant l'intérêt d'une architecture claire pour faire évoluer une application.",
            textEn: "Sibilia helped me consolidate C#, WPF and interface design while discovering the value of a clear architecture for evolving an application."
        }
    },
    labyrinthe: {
        accent: "#5fce8f",
        number: "04",
        date: { fr: "Projet universitaire (SAÉ) · 2024", en: "University project (SAÉ) · 2024" },
        title: "Labyrinthe",
        lead: {
            fr: "Un jeu d'arcade 2D développé entièrement en C# et WPF : un Père Noël récolte des cadeaux et les rapporte au sapin avant la fin du temps, tout en évitant les lutins voleurs.",
            en: "A 2D arcade game built entirely in C# and WPF: Santa collects gifts and brings them back to the tree before time runs out, while dodging gift-stealing elves."
        },
        facts: [
            ["Rôle", "Role", "Développement & game design", "Development & game design"],
            ["Contexte", "Context", "Projet en équipe (SAÉ)", "Team project (SAÉ)"],
            ["Stack", "Stack", "C# · WPF · XAML", "C# · WPF · XAML"],
            ["Cœur technique", "Technical core", "Game loop · collisions · IA", "Game loop · collisions · AI"]
        ],
        challenge: {
            fr: "Concevoir un moteur de jeu temps réel sans moteur dédié, uniquement avec C# et le Canvas de WPF.",
            en: "Build a real-time game engine without any dedicated engine, using only C# and the WPF Canvas.",
            detailsFr: [
                "Tout repose sur une boucle de jeu (DispatcherTimer ~60 images/s) qui orchestre déplacements, animations, collisions et apparition des ennemis à chaque frame.",
                "Le plus délicat : des collisions fiables (murs, cadeaux, sapin, zone d'attaque) et des lutins qui poursuivent le joueur tout en restant dans la carte."
            ],
            detailsEn: [
                "Everything relies on a game loop (DispatcherTimer ~60 fps) orchestrating movement, animations, collisions and enemy spawning on every frame.",
                "The tricky part: reliable collisions (walls, gifts, tree, attack zone) and elves that chase the player while staying inside the map."
            ]
        },
        methods: [
            ["fa-arrows-rotate", "Boucle de jeu", "Game loop", "DispatcherTimer ~60 FPS pilotant déplacements, collisions et animations à chaque frame.", "DispatcherTimer ~60 FPS driving movement, collisions and animations every frame."],
            ["fa-vector-square", "Collisions", "Collisions", "Détection par hitbox (Rect.IntersectsWith) pour murs, cadeaux, sapin et attaque.", "Hitbox detection (Rect.IntersectsWith) for walls, gifts, tree and attack."],
            ["fa-ghost", "IA des lutins", "Enemy AI", "Les lutins poursuivent le joueur, se réorientent et sont ralentis dans les buissons.", "Elves chase the player, reorient themselves and slow down in the bushes."],
            ["fa-gauge-high", "Difficulté & modes", "Difficulty & modes", "Quatre niveaux (Facile à Difficile) plus un mode Illimité avec record de session.", "Four levels (Easy to Hard) plus an Endless mode with a session high score."]
        ],
        gallery: [
            ["assets/labyrinthe/gameplay.png", "Aperçu du jeu", "Gameplay", "Le Père Noël récolte les cadeaux disséminés dans le labyrinthe de buissons et les rapporte au sapin avant la fin du temps.", "Santa collects the gifts scattered across the bush maze and brings them back to the tree before time runs out."],
            ["assets/labyrinthe/menu-accueil.png", "Menu d'accueil", "Home menu", "Écran d'accueil avec les règles du jeu et l'ambiance de Noël.", "Home screen with the game rules and the Christmas atmosphere."],
            ["assets/labyrinthe/difficulte.png", "Choix de la difficulté", "Difficulty selection", "Quatre niveaux (Facile, Moyen, Difficile) plus un mode Illimité pour battre son record.", "Four levels (Easy, Medium, Hard) plus an Endless mode to beat your high score."],
            ["assets/labyrinthe/class-diagram.svg", "Diagramme de classes", "Class diagram", "Architecture du projet : MainWindow (moteur de jeu), l'entité Luttin et les fenêtres de menus.", "Project architecture: MainWindow (game engine), the Luttin entity and the menu windows."]
        ],
        github: "https://github.com/xX-Proplayer-Xx/Labyrinthe",
        download: "https://github.com/xX-Proplayer-Xx/Labyrinthe/releases/latest",
        result: {
            fr: "Un projet ludique qui m'a fait toucher du doigt la logique d'un moteur de jeu.",
            en: "A playful project that introduced me to the logic of a game engine.",
            textFr: "Au-delà du jeu, ce projet m'a appris à structurer du code temps réel, à gérer des états (menus, pause, fin de partie) et à déboguer des comportements visuels image par image.",
            textEn: "Beyond the game itself, this project taught me to structure real-time code, manage states (menus, pause, game over) and debug visual behavior frame by frame."
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const project = caseStudies[document.body.dataset.project];
    const root = document.querySelector("#case-study-root");
    if (!project || !root) return;

    document.documentElement.style.setProperty("--case-color", project.accent);
    root.classList.add("generated-case");
    root.innerHTML = buildCaseStudy(project);
});

function bilingual(fr, en, tag = "span", className = "lang-copy") {
    return `<${tag} class="${className}" data-language="fr">${fr}</${tag}><${tag} class="${className}" data-language="en">${en}</${tag}>`;
}

function buildCaseStudy(project) {
    const facts = project.facts.map(([frLabel, enLabel, frValue, enValue]) => `
        <div>${bilingual(frLabel, enLabel, "dt")}${bilingual(frValue, enValue, "dd")}</div>
    `).join("");

    const methods = project.methods.map((method, index) => `
        <article class="case-method-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <i class="fa-solid ${method[0]}"></i>
            ${bilingual(method[1], method[2], "h3")}
            ${bilingual(method[3], method[4], "p")}
        </article>
    `).join("");

    const gallery = project.gallery.map((item, index) => `
        <figure class="case-gallery-item${index === 0 ? " featured" : ""}">
            <div class="case-gallery-image"><img src="${item[0]}" alt="${item[1]}" loading="lazy" decoding="async"></div>
            <figcaption>
                <div>${bilingual(item[1], item[2], "strong")}</div>
                <span>${String(index + 1).padStart(2, "0")} / ${String(project.gallery.length).padStart(2, "0")}</span>
                ${bilingual(item[3], item[4], "p")}
            </figcaption>
        </figure>
    `).join("");

    const githubTop = project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener" class="case-secondary-link">
            <i class="fa-brands fa-github"></i>${bilingual("Voir le code", "View code")}
        </a>` : "";

    const githubBottom = project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener" class="case-secondary-link">
            <i class="fa-brands fa-github"></i> GitHub
        </a>` : "";

    const downloadTop = project.download ? `
        <a href="${project.download}" target="_blank" rel="noopener" class="case-secondary-link">
            <i class="fa-solid fa-download"></i>${bilingual("Télécharger (.zip)", "Download (.zip)")}
        </a>` : "";

    const downloadBottom = project.download ? `
        <a href="${project.download}" target="_blank" rel="noopener" class="case-secondary-link">
            <i class="fa-solid fa-download"></i>${bilingual("Télécharger", "Download")}
        </a>` : "";

    const hasActions = project.github || project.download;

    return `
        <header class="case-hero">
            <div class="case-shell case-hero-grid">
                <div class="case-hero-copy">
                    <a href="index.html#projects" class="case-breadcrumb"><i class="fa-solid fa-arrow-left"></i><span>Portfolio / ${project.number}</span></a>
                    <div class="case-overline"><span class="status-dot"></span>${bilingual(project.date.fr, project.date.en)}</div>
                    <h1>${project.title}</h1>
                    ${bilingual(project.lead.fr, project.lead.en, "p", "case-lead lang-copy")}
                    ${hasActions ? `<div class="case-actions">${githubTop}${downloadTop}</div>` : ""}
                </div>
                <dl class="case-facts">${facts}</dl>
            </div>
        </header>

        <section class="case-gallery">
            <div class="case-shell"><div class="case-gallery-grid">${gallery}</div></div>
        </section>

        <section class="case-section">
            <div class="case-shell case-editorial-grid">
                <div class="case-section-heading"><span>01</span>${bilingual("Le défi", "The challenge", "h2")}</div>
                <div class="case-copy-large">
                    ${bilingual(project.challenge.fr, project.challenge.en, "p")}
                    <div class="case-copy-columns">
                        ${bilingual(project.challenge.detailsFr[0], project.challenge.detailsEn[0], "p")}
                        ${bilingual(project.challenge.detailsFr[1], project.challenge.detailsEn[1], "p")}
                    </div>
                </div>
            </div>
        </section>

        <section class="case-section architecture-section">
            <div class="case-shell">
                <div class="case-section-heading horizontal"><span>02</span>${bilingual("Méthode & réalisation", "Method & delivery", "h2")}</div>
                <div class="case-method-grid">${methods}</div>
            </div>
        </section>

        <section class="case-section case-result">
            <div class="case-shell case-result-grid">
                <div><span class="case-result-label">03 / RESULT</span>${bilingual(project.result.fr, project.result.en, "h2")}</div>
                <div>
                    ${bilingual(project.result.textFr, project.result.textEn, "p")}
                    ${hasActions ? `<div class="case-actions">${githubBottom}${downloadBottom}</div>` : ""}
                </div>
            </div>
        </section>

        <nav class="case-next">
            <div class="case-shell">
                <a href="index.html#projects">
                    ${bilingual("Retour à la sélection", "Back to selected work")}
                    ${bilingual("Voir tous les projets", "View all projects", "strong")}
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </nav>
    `;
}
