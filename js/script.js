const projectsData = [
    {
        id: 5,
        title: "Open Food Facts - DB & Dashboards",
        date: {
            fr: "Mars 2026 - Avril 2026",
            en: "March 2026 - April 2026"
        },
        status: "completed",
        image: "assets/open-food-facts/ventespage1.jpg",
        techs: ["PostgreSQL", "Power BI", "Knime", "Star Schema", "Merise"],
        category: ["BI", "Analysis"],
        pageUrl: "open-food-facts.html",
        actionBtn: { text: "View Dashboards", icon: "fa-chart-line" },
        hasDetailedModal: true,
        fr: {
            title: "Open Food Facts - BDD & Tableaux de Bord",
            type: "Projet universitaire (SAÉ)",
            desc: "Conception d'une base OLTP à partir de données Open Food Facts, modélisation en étoile pour l'analyse BI, workflows ETL Knime et tableaux de bord Power BI (ventes & composition produits).",
            modalTitle: "Open Food Facts - Modélisation & Analyse BI",
            modalDesc: "Ce projet couvre l'ensemble de la chaîne data : conception d'une base relationnelle OLTP à partir de données brutes, transformation vers un modèle OLAP en étoile, automatisation via des workflows Knime, et visualisation dans Power BI avec deux rapports analytiques distincts (ventes simulées et composition nutritionnelle).",
            techSection: {
                title: "Stack Data & Technologies",
                items: [
                    { label: "Base de données", value: "PostgreSQL (OLTP)" },
                    { label: "Modélisation", value: "Merise — MLD OLTP & OLAP" },
                    { label: "ETL", value: "Knime (workflows d'insertion)" },
                    { label: "Visualisation", value: "Microsoft Power BI" }
                ]
            },
            diagrams: [
                {
                    image: "assets/open-food-facts/ventespage1.jpg",
                    title: "Dashboard Ventes — Saisonnalité",
                    desc: "Vue macroéconomique des ventes simulées : 1,24 Md€ de CA, évolution N-1, saisonnalité mensuelle par enseigne (Aldi, Lidl, Carrefour…)."
                },
                {
                    image: "assets/open-food-facts/compositionpage1.jpg",
                    title: "Dashboard Composition — Vue Marché",
                    desc: "605 674 produits analysés par catégorie, Nutri-Score (A à E) et classification NOVA. Treemap interactif filtrable par pays et catégorie."
                },
                {
                    image: "assets/open-food-facts/mldBaseOLTP.jpg",
                    title: "MLD Base OLTP",
                    desc: "Modèle relationnel opérationnel (OLTP) conçu avec Merise. Gère les produits, ingrédients, distributeurs et historique de ventes."
                },
                {
                    image: "assets/open-food-facts/mldBaseOLAP.jpg",
                    title: "Modèle en Étoile (OLAP)",
                    desc: "Data Warehouse avec tables de faits (ventes, composition) et dimensions (temps, distributeur, produit, ingrédient) pour l'analyse Power BI."
                },
                {
                    image: "assets/open-food-facts/ETLKnime_InsertionDonnée.jpg",
                    title: "Workflow ETL Knime",
                    desc: "Pipeline d'extraction et d'insertion des données Open Food Facts vers PostgreSQL. Nettoyage, transformation et chargement automatisé."
                }
            ]
        },
        en: {
            title: "Open Food Facts - DB & Dashboards",
            type: "University project (SAÉ)",
            desc: "Designed an OLTP database from Open Food Facts data, built a star schema for BI analysis, ETL workflows with Knime and Power BI dashboards (sales & product composition).",
            modalTitle: "Open Food Facts - Modeling & BI Analysis",
            modalDesc: "This project covers the full data pipeline: designing a relational OLTP database from raw data, transforming it into a star-schema OLAP model, automating ETL with Knime workflows, and building two Power BI reports (simulated sales analytics and nutritional composition analysis).",
            techSection: {
                title: "Data Stack & Technologies",
                items: [
                    { label: "Database", value: "PostgreSQL (OLTP)" },
                    { label: "Modeling", value: "Merise — OLTP & OLAP MLD" },
                    { label: "ETL", value: "Knime (insertion workflows)" },
                    { label: "Visualization", value: "Microsoft Power BI" }
                ]
            },
            diagrams: [
                {
                    image: "assets/open-food-facts/ventespage1.jpg",
                    title: "Sales Dashboard — Seasonality",
                    desc: "Macroeconomic overview of simulated sales: 1.24B€ revenue, year-over-year growth (+49.9%), monthly seasonality by retailer (Aldi, Lidl, Carrefour…)."
                },
                {
                    image: "assets/open-food-facts/compositionpage1.jpg",
                    title: "Composition Dashboard — Market Overview",
                    desc: "605,674 products analyzed by category, Nutri-Score (A to E) and NOVA classification. Interactive treemap filterable by country and category."
                },
                {
                    image: "assets/open-food-facts/mldBaseOLTP.jpg",
                    title: "OLTP Logical Data Model",
                    desc: "Operational relational model (OLTP) designed with Merise. Covers products, ingredients, distributors and sales history."
                },
                {
                    image: "assets/open-food-facts/mldBaseOLAP.jpg",
                    title: "Star Schema (OLAP)",
                    desc: "Data Warehouse with fact tables (sales, composition) and dimensions (time, distributor, product, ingredient) for Power BI analysis."
                },
                {
                    image: "assets/open-food-facts/ETLKnime_InsertionDonnée.jpg",
                    title: "Knime ETL Workflow",
                    desc: "Data extraction and insertion pipeline from Open Food Facts into PostgreSQL. Automated cleaning, transformation and loading."
                }
            ]
        },
        links: []
    },
    {
        id: 8,
        title: "Secure File Storage",
        date: {
            fr: "Mars 2026",
            en: "March 2026"
        },
        status: "completed",
        image: "assets/previews/previewSecureDrive.png",
        techs: ["PHP", "PostgreSQL", "AES-256-GCM", "RSA-2048", "SHA-256"],
        category: ["Web"],
        pageUrl: "secure-file-storage.html",
        actionBtn: { text: "View App", icon: "fa-shield-halved" },
        hasDetailedModal: true,
        fr: {
            title: "Drive sécurisé - Stockage & Partage de Fichiers",
            type: "Projet universitaire",
            desc: "Application web de stockage et de partage de fichiers chiffrés. Chaque fichier est protégé par AES-256-GCM, tandis que sa clé est distribuée aux utilisateurs autorisés avec RSA-2048.",
            modalTitle: "Secure File Storage - Cryptographie & Sécurité",
            modalDesc: "Ce projet universitaire met en œuvre un stockage de fichiers chiffré côté serveur. Il combine chiffrement symétrique et asymétrique, contrôle d'accès, vérification d'intégrité et partage entre utilisateurs au sein d'une application PHP connectée à PostgreSQL.",
            techSection: {
                title: "Architecture de sécurité",
                items: [
                    { label: "Fichiers", value: "AES-256-GCM" },
                    { label: "Clés de partage", value: "RSA-2048 OAEP" },
                    { label: "Mots de passe", value: "Argon2id" },
                    { label: "Intégrité", value: "SHA-256" },
                    { label: "Backend", value: "PHP 8 / OpenSSL" },
                    { label: "Base de données", value: "PostgreSQL" }
                ]
            },
            features: [
                "Création de compte et authentification sécurisée",
                "Chiffrement du contenu, du nom et du type MIME des fichiers",
                "Partage d'un fichier par rechiffrement de sa clé AES avec la clé publique du destinataire",
                "Vérification de l'intégrité du fichier avant téléchargement",
                "Protection CSRF des formulaires et contrôle des autorisations",
                "Suppression des fichiers et des comptes avec nettoyage des données associées"
            ],
            diagrams: [
                {
                    image: "assets/previews/previewSecureDrive.png",
                    title: "Tableau de bord du Drive",
                    desc: "Interface de dépôt, téléchargement, partage et suppression des fichiers chiffrés."
                }
            ]
        },
        en: {
            title: "Secure Drive - Encrypted File Storage & Sharing",
            type: "University project",
            desc: "Web application for encrypted file storage and sharing. Each file is protected with AES-256-GCM, while its key is distributed to authorized users using RSA-2048.",
            modalTitle: "Secure File Storage - Cryptography & Security",
            modalDesc: "This university project implements server-side encrypted file storage. It combines symmetric and asymmetric encryption, access control, integrity verification and user-to-user sharing in a PHP application backed by PostgreSQL.",
            techSection: {
                title: "Security Architecture",
                items: [
                    { label: "Files", value: "AES-256-GCM" },
                    { label: "Shared keys", value: "RSA-2048 OAEP" },
                    { label: "Passwords", value: "Argon2id" },
                    { label: "Integrity", value: "SHA-256" },
                    { label: "Backend", value: "PHP 8 / OpenSSL" },
                    { label: "Database", value: "PostgreSQL" }
                ]
            },
            features: [
                "Account creation and secure authentication",
                "Encryption of file contents, names and MIME types",
                "File sharing by encrypting its AES key with the recipient's public key",
                "File integrity verification before download",
                "CSRF protection and authorization checks",
                "File and account deletion with associated data cleanup"
            ],
            diagrams: [
                {
                    image: "assets/previews/previewSecureDrive.png",
                    title: "Secure Drive Dashboard",
                    desc: "Interface for uploading, downloading, sharing and deleting encrypted files."
                }
            ]
        },
        links: [
            {
                text: "View Live Project",
                url: "https://turkf.alwaysdata.net/login.php",
                icon: "fa-arrow-up-right-from-square",
                iconStyle: "fa-solid"
            },
            {
                text: "View Code",
                url: "https://github.com/fatiht7/secure-file-storage",
                icon: "fa-github"
            }
        ]
    },
    {
        id: 1,
        title: "SAÉ Leboncoin Vacation Rental - Web App",
        date: {
            fr: "Octobre 2025 - Janvier 2026",
            en: "October 2025 - January 2026"
        },
        status: "completed",
        image: "assets/previews/previewLeboncoin.png",
        techs: ["PHP", "Laravel", "SQL", "Merise", "BPMN"],
        category: ["Web", "Analysis"],
        pageUrl: "leboncoin.html",
        actionBtn: { text: "View Modeling", icon: "fa-diagram-project" },
        hasDetailedModal: true,
        fr: { 
            title: "SAÉ Leboncoin Location Vacances - Application Web",
            type: "Projet universitaire (SAÉ)", 
            desc: "Plateforme de location de vacances type LeBonCoin développée en équipe de 5 avec Laravel. Conception complète de la base de données et modélisation des processus métier.",
            modalTitle: "SAÉ Leboncoin Location Vacances - Modélisation & Conception",
            modalDesc: "Ce projet de gestion de locations de vacances a nécessité une phase complète d'analyse et de conception système, utilisant Merise et BPMN pour modéliser les besoins fonctionnels et les processus métier critiques.",
            techSection: {
                title: "Technologies et Méthodologies",
                items: [
                    { label: "Conception", value: "Merise (MCD, MLD, MPD)" },
                    { label: "Processus", value: "BPMN 2.0" },
                    { label: "Backend", value: "PHP / Laravel" },
                    { label: "Base de données", value: "PostgreSQL" }
                ]
            },
            diagrams: [
                { 
                    image: "assets/leboncoin/mpd.png", 
                    title: "MPD (Modèle Physique)", 
                    desc: "Le MPD définit la structure physique de la base de données avec 30+ tables, clés primaires/étrangères et contraintes d'intégrité." 
                },
                { 
                    image: "assets/leboncoin/bpmn.png", 
                    title: "Diagramme BPMN", 
                    desc: "Modélisation du processus de gestion des incidents et remboursements entre locataires, propriétaires et services." 
                }
            ]
        },
        en: { 
            title: "SAÉ Leboncoin Vacation Rental - Web App",
            type: "University project (SAÉ)", 
            desc: "Vacation rental platform (LeBonCoin-style) developed in a team of 5 using Laravel. Complete database design and business process modeling.",
            modalTitle: "SAÉ Leboncoin Vacation Rental - Modeling & Design",
            modalDesc: "This vacation rental management project required a complete analysis and system design phase, using Merise and BPMN to model functional requirements and critical business processes.",
            techSection: {
                title: "Technologies and Methodologies",
                items: [
                    { label: "Design", value: "Merise (CDM, LDM, PDM)" },
                    { label: "Processes", value: "BPMN 2.0" },
                    { label: "Backend", value: "PHP / Laravel" },
                    { label: "Database", value: "PostgreSQL" }
                ]
            },
            diagrams: [
                { 
                    image: "assets/leboncoin/mpd.png", 
                    title: "PDM (Physical Data Model)", 
                    desc: "The PDM defines the physical database structure with 30+ tables, primary/foreign keys and integrity constraints." 
                },
                { 
                    image: "assets/leboncoin/bpmn.png", 
                    title: "BPMN Diagram", 
                    desc: "Modeling of the incident and refund management process between tenants, owners and services." 
                }
            ]
        },
        links: [{ text: "View Code", url: "https://github.com/BazeOnigiri/SAE_Leboncoin.git", icon: "fa-github" }]
    },
    {
        id: 2,
        title: "SAÉ Leboncoin Vacation Rental - Business Intelligence",
        date: {
            fr: "Octobre 2025 - Janvier 2026",
            en: "October 2025 - January 2026"
        },
        status: "completed",
        image: "assets/leboncoin/powerbi-1.png",
        techs: ["Power BI", "DAX", "PostgreSQL", "Star Schema"],
        category: ["BI", "Analysis"],
        pageUrl: "leboncoin.html",
        actionBtn: { text: "View Dashboard", icon: "fa-chart-line" },
        hasDetailedModal: true,
        fr: { 
            title: "SAÉ Leboncoin Location Vacances - Business Intelligence",
            type: "Projet universitaire (SAÉ)", 
            desc: "Conception d'un Data Warehouse en schéma étoile et création de tableaux de bord Power BI pour le suivi du chiffre d'affaires des locations.",
            modalTitle: "SAÉ Leboncoin Location Vacances - Analyse Power BI",
            modalDesc: "Dans ce projet, après avoir créé et peuplé la base PostgreSQL, nous avons importé les données dans Power BI pour créer des tableaux de bord analytiques. L'objectif était de transformer les données brutes en informations décisionnelles.",
            techSection: {
                title: "Stack Data & Technologies",
                items: [
                    { label: "Source de données", value: "PostgreSQL Database" },
                    { label: "Outil d'analyse", value: "Microsoft Power BI" },
                    { label: "Modélisation", value: "Schéma en étoile (Star Schema)" },
                    { label: "Mesures", value: "DAX (CA, KPIs, Agrégations)" }
                ]
            },
            diagrams: [
                { 
                    image: "assets/leboncoin/star-schema.png", 
                    title: "Schéma en Étoile", 
                    desc: "Architecture Data Warehouse avec table de faits (Reservations) et dimensions (Client, Hébergement, Temps) pour optimiser les requêtes analytiques." 
                },
                { 
                    image: "assets/leboncoin/powerbi-1.png", 
                    title: "Dashboard CA par Hébergement", 
                    desc: "Vue d'ensemble du chiffre d'affaires (5,11K€) avec répartition par type d'hébergement, évolution mensuelle et analyse par propriétaire." 
                },
                { 
                    image: "assets/leboncoin/powerbi-2.png", 
                    title: "Dashboard Géographique", 
                    desc: "Analyse spatiale du CA par région de résidence des clients avec carte interactive et détail par ville." 
                }
            ]
        },
        en: { 
            title: "SAÉ Leboncoin Vacation Rental - Business Intelligence",
            type: "University project (SAÉ)", 
            desc: "Design of a Star Schema Data Warehouse and creation of Power BI dashboards to track rental revenue.",
            modalTitle: "SAÉ Leboncoin Vacation Rental - Power BI Analysis",
            modalDesc: "In this project, after creating and populating the PostgreSQL database, we imported the data into Power BI to create analytical dashboards. The goal was to transform raw data into decision-making information.",
            techSection: {
                title: "Data Stack & Technologies",
                items: [
                    { label: "Data Source", value: "PostgreSQL Database" },
                    { label: "Analysis Tool", value: "Microsoft Power BI" },
                    { label: "Modeling", value: "Star Schema (Data Warehouse)" },
                    { label: "Measures", value: "DAX (Revenue, KPIs, Aggregations)" }
                ]
            },
            diagrams: [
                { 
                    image: "assets/leboncoin/star-schema.png", 
                    title: "Star Schema", 
                    desc: "Data Warehouse architecture with fact table (Reservations) and dimensions (Client, Accommodation, Time) to optimize analytical queries." 
                },
                { 
                    image: "assets/leboncoin/powerbi-1.png", 
                    title: "Revenue by Accommodation Dashboard", 
                    desc: "Revenue overview (5.11K€) with breakdown by accommodation type, monthly evolution and analysis by owner." 
                },
                { 
                    image: "assets/leboncoin/powerbi-2.png", 
                    title: "Geographic Dashboard", 
                    desc: "Spatial analysis of revenue by client residence region with interactive map and city-level detail." 
                }
            ]
        },
        links: []
    },
    {
        id: 3,
        title: "Portfolio",
        date: {
            fr: "Octobre 2025 - Aujourd'hui",
            en: "October 2025 - Present"
        },
        status: "ongoing",
        image: "assets/previews/previewPortfolio.png",
        techs: ["JavaScript", "HTML", "CSS"],
        category: ["Web"],
        actionBtn: null,
        hasDetailedModal: false,
        fr: { 
            title: "Portfolio",
            type: "Projet personnel", 
            desc: "Portfolio personnel orienté Data / BI avec design responsive, filtrage dynamique des projets, switch multilingue et animations fluides." 
        },
        en: { 
            title: "Portfolio",
            type: "Personal project", 
            desc: "Data / BI-oriented personal portfolio with responsive design, dynamic project filtering, multilingual switch and smooth animations." 
        },
        links: [{ text: "View Code", url: "https://github.com/fatiht7/portfolio.git", icon: "fa-github" }]
    },
    {
        id: 4,
        title: "Sibilia - Order Management System",
        date: {
            fr: "Juin 2025",
            en: "June 2025"
        },
        status: "completed",
        image: "assets/previews/previewSIBILIA.png", 
        techs: ["C#", ".NET", "WPF", "XAML", "MVVM"],
        category: ["Desktop"],
        pageUrl: "sibilia.html",
        actionBtn: { text: "View App", icon: "fa-desktop" },
        hasDetailedModal: true,
        fr: { 
            title: "Sibilia - Système de Gestion de Commandes",
            type: "Projet universitaire (SAÉ)", 
            desc: "Application desktop de gestion commerciale développée en WPF/C#. Gestion des commandes, clients, plats et stocks avec architecture MVVM.",
            modalTitle: "Projet Sibilia (SAÉ) - Système de Gestion",
            modalDesc: "Ce projet a été réalisé dans le cadre d'un projet appliqué (SAÉ) pour simuler un système de gestion commerciale pour un traiteur. C'est une application desktop développée en WPF et C#.",
            techSection: {
                title: "Technologies et Architecture",
                items: [
                    { label: "Langage", value: "C# (.NET)" },
                    { label: "Interface", value: "WPF / XAML" },
                    { label: "Architecture", value: "MVVM Pattern" },
                    { label: "Base de données", value: "MySQL" }
                ]
            },
            features: [
                "Système d'authentification sécurisé et gestion des rôles",
                "CRUD complet pour produits, clients et commandes",
                "Architecture modulaire basée sur le pattern MVVM",
                "Filtrage et recherche avancée en temps réel"
            ],
            diagrams: [
                { 
                    image: "assets/sibilia/login.png", 
                    title: "Connexion", 
                    desc: "Interface d'authentification utilisateur sécurisée." 
                },
                { 
                    image: "assets/sibilia/dashboard.png", 
                    title: "Menu Principal", 
                    desc: "Navigation vers les différents modules : Commandes, Plats, Clients." 
                },
                { 
                    image: "assets/sibilia/order.png", 
                    title: "Création Commande", 
                    desc: "Interface complète de création de commande avec sélection client, plats et calcul automatique du total." 
                }
            ]
        },
        en: { 
            title: "Sibilia - Order Management System",
            type: "University project (SAÉ)", 
            desc: "Desktop commercial management application developed in WPF/C#. Order, client, dish and inventory management with MVVM architecture.",
            modalTitle: "Sibilia Project (SAÉ) - Management System",
            modalDesc: "This project was carried out as part of an Applied Project (SAÉ) to simulate a commercial management system for a catering business. It's a desktop application developed in WPF and C#.",
            techSection: {
                title: "Technologies and Architecture",
                items: [
                    { label: "Language", value: "C# (.NET)" },
                    { label: "Interface", value: "WPF / XAML" },
                    { label: "Architecture", value: "MVVM Pattern" },
                    { label: "Database", value: "MySQL" }
                ]
            },
            features: [
                "Secure user authentication system and role management",
                "Full CRUD for products, clients, and orders",
                "Modular design based on the MVVM pattern",
                "Real-time advanced filtering and search"
            ],
            diagrams: [
                { 
                    image: "assets/sibilia/login.png", 
                    title: "Login", 
                    desc: "Secure user authentication interface." 
                },
                { 
                    image: "assets/sibilia/dashboard.png", 
                    title: "Main Menu", 
                    desc: "Navigation to different modules: Orders, Dishes, Clients." 
                },
                { 
                    image: "assets/sibilia/order.png", 
                    title: "Order Creation", 
                    desc: "Complete order creation interface with client selection, dishes and automatic total calculation." 
                }
            ]
        },
        links: [{ text: "View Code", url: "https://github.com/yanis381/SAE201.git", icon: "fa-github" }]
    },
    {
        id: 7,
        title: "2D Video Game",
        date: {
            fr: "2024",
            en: "2024"
        },
        status: "completed",
        image: "assets/previews/previewLabyrinthe.png",
        techs: ["C#", ".NET"],
        category: ["Desktop"],
        actionBtn: null,
        hasDetailedModal: false,
        fr: {
            title: "Labyrinthe - Jeu vidéo 2D",
            type: "Projet universitaire (SAÉ)",
            desc: "Développement d'un moteur de jeu et gestion physique en C# pur."
        },
        en: {
            title: "Labyrinth - 2D Video Game",
            type: "University project (SAÉ)",
            desc: "Game engine development and physics management written in pure C#."
        },
        links: [{ text: "View Code", url: "https://github.com/xX-Proplayer-Xx/Labyrinthe.git", icon: "fa-github" }]
    }
];

const translations = {
    fr: {
        nav_home: "Accueil", 
        nav_skills: "Compétences", 
        nav_contact: "Contact", 
        nav_projects: "Projets", 
        nav_projects_btn: "Voir mes projets",
        nav_cv_download: "Télécharger CV",
        nav_cv_fr: "CV français",
        nav_cv_intl: "CV international",
        
        hero_badge: "🔍 Alternance Data / BI / Bases de données - Sept. 2026",
        "profil-p": "Étudiant en BUT Informatique, spécialisé en administration, gestion et exploitation des données. Je conçois des tableaux de bord et des outils d'aide à la décision à partir de données fiables.",
        "profil-btn-cv": "Télécharger mon CV",
        "profil-btn-cv-fr": "Télécharger CV français",
        "profil-btn-cv-intl": "Télécharger CV international",

        "titre_profil": "Profil",
        "profile-lead": "Je transforme des données brutes en analyses claires et en outils utiles à la prise de décision.",
        "profile-discover": "Découvrir mon parcours",
        "bio_profil": "Étudiant en deuxième année de BUT Informatique, parcours administration, gestion et exploitation des données à l'IUT d'Annecy, j'ai acquis une première expérience en Data Analysis et Business Intelligence. Je recherche une alternance à partir de septembre 2026 en Data, BI ou bases de données afin de contribuer à la préparation des données, à leur analyse et à la création de tableaux de bord.",

        "competences-titre": "Compétences techniques",
        "skills-frontend-title": "Frontend",
        "skills-backend-title": "Backend & Logiciel",
        "skills-data-title": "Data & BI",
        "skills-tools-title": "Outils & Méthodes",
        "comp-soft": "Savoir-être",
        "soft-time": "Bonne gestion du temps & Ponctuel",
        "soft-analytic": "Précis et Analytique",
        "soft-focus": "Orienté tâches et Concentré",
        "soft-team": "Travail d'équipe",
        "soft-autonomous": "Autonome et capacité d'adaptation",
        
        "titre_edu": "Formation",
        "titre_pro_exp": "Expériences professionnelles",
        "education-intro": "Un parcours technique construit entre développement, bases de données et analyse de données.",
        "experience-intro": "Des expériences professionnelles et universitaires centrées sur des solutions concrètes, fiables et utiles.",
        "projects-overline": "Projets sélectionnés",
        "contact-overline": "Construisons quelque chose d'utile à partir des données.",
        
        "date_2024_2027": "2024 - 2027",
        "date_2021_2024": "2021 - 2024",
        "date_oct_jan": "Octobre 2025 - Janvier 2026",
        "date_june_25": "Juin 2025",
        "date_ete_24": "Été 2024",
        "date_avr_juin_26": "Avril 2026 - Juin 2026",
        "date_mars_avr_26": "Mars 2026 - Avril 2026",

        "job_lbdp": "Stagiaire Data Analyst & Business Intelligence",
        "lieu_lbdp": "La Boutique du Pro (LBDP) - Méry, France",
        "desc_lbdp": "Extraction et nettoyage de données issues d'une plateforme e-commerce (WooCommerce) et d'un logiciel de gestion comptable (MEG). Création de tableaux de bord interactifs Power BI pour le suivi des ventes, des stocks et des indicateurs de performance (KPIs).",

        "job_open_food": "Projet BDD & Dashboards Open Food Facts",
        "desc_open_food": "Création et optimisation d'une base de données relationnelle (OLTP) à partir de données brutes de l'Open Food Facts. Simulation de ventes massives et conception d'un modèle en étoile. Workflows Knime pour l'exploration des données et rapports analytiques en anglais.",

        "job_web_app": "Application Web & Gestion BDD",
        "desc_web_app": "Développement d'une application web avec Laravel en équipe de 5. Conception et modélisation de bases de données (MCD/MPD) et diagrammes BPMN. Création de tableaux de bord Power BI pour le suivi des indicateurs clés.",

        "job_order_app": "Application Gestion de Commandes",
        "desc_order_app": "Développement d'une application de gestion de commandes en C# (WPF/XAML). Conception et implémentation d'une interface utilisateur pour la prise de commandes et la gestion des stocks.",

        "job_leclerc": "Employé Commercial",
        "desc_leclerc": "Mise en rayon, suivi des stocks, présentation des produits et accompagnement des clients au sein d'une équipe en grande distribution.",
        
        "titre_but": "BUT Informatique", 
        "lieu_but": "Université de Savoie / IUT Annecy, France",
        "desc_but": "Bachelor Universitaire de Technologie en informatique. Deuxième année en cours.",
        
        "titre_bac": "Baccalauréat Français", 
        "lieu_bac": "Lycée Louis Lachenal - Argonay, France",
        "desc_bac": "Baccalauréat technologique STI2D - Option SIN (Systèmes d'Information et Numérique).",
        
        "lieu_usmb": "USMB / IUT Annecy, France - Projet universitaire en équipe (SAÉ)",
        "lieu_leclerc": "Leclerc - Seynod, France",
        
        "projets-titre": "Projets", 
        "contact-titre": "Contactez-moi",
        "contact-p": "Disponible pour échanger sur une alternance en Data, Business Intelligence ou bases de données.",
        "form-send": "Envoyer",
        "form-name": "Nom",
        "form-email": "Email",
        "form-subject": "Objet",
        "form-message": "Message",
        
        "langues-titre": "Langues", 
        "lang-native": "Langue maternelle", 
        "lang-fr": "Français", 
        "lang-tr": "Turc", 
        "lang-en": "Anglais", 
        "lang-es": "Espagnol",
        "lang_b1": "B1 - Intermédiaire",
        "lang_a2": "A2 - Élémentaire",
        
        "ref-titre": "Références", 
        "role-ref1": "Enseignante d'Anglais, Coordinatrice Internationale", 
        "role-ref2": "Professeur SQL et POO, Chercheur à l'Université de Savoie",
        "lieu_ref": "Université de Savoie / IUT Annecy, France",
        
        "interets-titre": "Centres d'intérêt", 
        "hobby-games": "Jeux Vidéo", 
        "hobby_games_desc": "FPS, Jeux de construction",
        "hobby_manga_desc": "One Piece, Chainsaw Man",
        "hobby-fitness": "Fitness",
        "hobby-fitness-desc": "Musculation",
        
        "footer_rights": "© 2026 Fatih TÜRK. Tous droits réservés.",
        "footer_tagline": "Conçu & développé avec passion",
        "status-ongoing": "En cours",
        "status-completed": "Terminé",

        "filter-all": "Tous",
        "filter-web": "Web",
        "filter-desktop": "Desktop",
        "filter-bi": "BI / Analytics",
        "filter-analysis": "Modélisation",
        
        "diagrams-title": "Aperçu des Diagrammes",
        "previews-title": "Aperçu Fonctionnel",
        "features-title": "Fonctionnalités Clés",
        
        typed_strings: [
            "Analyste de Données.",
            "Développeur BI.", 
            "Bases de Données.",
            "Développement Backend.",
            "Étudiant.",
            "SQL et Bases de Données."
        ]
    },
    en: {
        nav_home: "Home", 
        nav_skills: "Skills", 
        nav_contact: "Contact", 
        nav_projects: "Projects", 
        nav_projects_btn: "View my projects",
        nav_cv_download: "Download CV",
        nav_cv_fr: "French CV",
        nav_cv_intl: "International CV",
        
        hero_badge: "🔍 Seeking a Data / BI / Database apprenticeship - September 2026",
        "profil-p": "Second-year BUT Informatique student specializing in data management and analytics. I build reliable dashboards and decision-support tools from structured data.",
        "profil-btn-cv": "Download CV",
        "profil-btn-cv-fr": "Download French CV",
        "profil-btn-cv-intl": "Download International CV",

        "titre_profil": "Profile",
        "profile-lead": "I turn raw data into clear analysis and practical decision-support tools.",
        "profile-discover": "Discover my journey",
        "bio_profil": "I am a second-year BUT Informatique student specializing in data management and analytics at IUT Annecy. After gaining initial experience in Data Analysis and Business Intelligence, I am seeking an apprenticeship starting in September 2026 in Data, BI or databases, where I can contribute to data preparation, analysis and dashboard development.",

        "competences-titre": "Technical Skills", 
        "skills-frontend-title": "Frontend",
        "skills-backend-title": "Backend & Software",
        "skills-data-title": "Data & BI",
        "skills-tools-title": "Tools & Methods",
        "comp-soft": "Soft Skills",
        "soft-time": "Good time management skills & Punctual",
        "soft-analytic": "Precise and Analytical",
        "soft-focus": "Task-oriented and Focused",
        "soft-team": "Teamwork",
        "soft-autonomous": "Autonomous and adaptable",

        "titre_edu": "Education",
        "titre_pro_exp": "Work Experience",
        "education-intro": "A technical path built between software engineering, databases and data analysis.",
        "experience-intro": "Professional and academic experience focused on building practical, reliable solutions.",
        "projects-overline": "Selected work",
        "contact-overline": "Let us build something useful from data.",
        "date_2024_2027": "2024 - 2027",
        "date_2021_2024": "2021 - 2024",
        "date_oct_jan": "October 2025 - January 2026",
        "date_june_25": "June 2025",
        "date_ete_24": "Summer 2024",
        "date_avr_juin_26": "April 2026 - June 2026",
        "date_mars_avr_26": "March 2026 - April 2026",

        "job_lbdp": "Data Analyst & Business Intelligence Intern",
        "lieu_lbdp": "La Boutique du Pro (LBDP) - Méry, France",
        "desc_lbdp": "Extraction and cleaning of data from an e-commerce platform (WooCommerce) and accounting management software (MEG). Built interactive Power BI dashboards to track sales, inventory and key performance indicators (KPIs).",

        "job_open_food": "Open Food Facts - DB & Dashboards Project",
        "desc_open_food": "Built and optimized a relational database (OLTP) from raw Open Food Facts data. Simulated large-scale sales data and designed a star schema for analysis. Created Knime workflows for data exploration and analytical reports in English.",

        "job_web_app": "Web Application & Database Management",
        "desc_web_app": "Developed a web application using Laravel in a team of 5. Designed and modeled databases (ERD/Physical Data Models) and BPMN diagrams. Created Power BI dashboards to monitor key performance indicators.",

        "job_order_app": "Order Management Application",
        "desc_order_app": "Developed an order management application in C# (WPF/XAML). Designed and implemented a user interface for order taking and stock management.",

        "job_leclerc": "Retail Associate",
        "desc_leclerc": "Shelf stocking, inventory monitoring, product presentation and customer support as part of a retail team.",
        
        "titre_but": "CS Bachelor (BUT Informatique)", 
        "lieu_but": "University of Savoy / IUT Annecy, France",
        "desc_but": "Technical Bachelor's Degree in computer science. Second year in progress.",
        
        "titre_bac": "French Baccalaureate", 
        "lieu_bac": "Louis Lachenal High School - Argonay, France",
        "desc_bac": "Technical High School diploma (STI2D - Digital Information Systems).",
        
        "lieu_usmb": "USMB / IUT Annecy, France - University team project (SAÉ)",
        "lieu_leclerc": "Leclerc - Seynod, France",
        
        "projets-titre": "Projects", 
        "contact-titre": "Contact Me",
        "contact-p": "Available to discuss apprenticeship opportunities in Data, Business Intelligence or databases.",
        "form-send": "Send",
        "form-name": "Name",
        "form-email": "Email",
        "form-subject": "Subject",
        "form-message": "Message",
        
        "langues-titre": "Languages", 
        "lang-native": "Native Speaker", 
        "lang-fr": "French", 
        "lang-tr": "Turkish", 
        "lang-en": "English", 
        "lang-es": "Spanish",
        "lang_b1": "B1 - Intermediate",
        "lang_a2": "A2 - Elementary",
        
        "ref-titre": "References", 
        "role-ref1": "English Lecturer, International Coordinator", 
        "role-ref2": "SQL and OOP teacher, Researcher at university of Savoy",
        "lieu_ref": "University of Savoy / IUT Annecy, France",
        
        "interets-titre": "Interests", 
        "hobby-games": "Video Games", 
        "hobby_games_desc": "FPS, Construction games",
        "hobby_manga_desc": "One Piece, Chainsaw Man",
        "hobby-fitness": "Fitness",
        "hobby-fitness-desc": "Weight training",
        
        "footer_rights": "© 2026 Fatih TÜRK. All rights reserved.",
        "footer_tagline": "Designed & built with passion",
        "status-ongoing": "Ongoing",
        "status-completed": "Completed",

        "filter-all": "All Projects",
        "filter-web": "Web",
        "filter-desktop": "Desktop",
        "filter-bi": "BI / Analytics",
        "filter-analysis": "Modeling",
        
        "diagrams-title": "Key Diagram Previews",
        "previews-title": "Functional Previews",
        "features-title": "Key Features",
        
        typed_strings: [
            "Data Analyst.",
            "BI Developer.", 
            "Databases.",
            "Backend Development.",
            "Student.",
            "SQL and Databases."
        ]
    }
};

let currentLang = 'fr';
let typedInstance;
let lenisInstance = null;

document.addEventListener('DOMContentLoaded', () => {

    updateLanguage('fr');

    initSmoothScroll();
    initScrollReveal();
    initProgressBars();
    initScrollProgress();
    initCursorGlow();
    initScrollSpy();
    initSmoothNavigation();
    initHeroParallax();
    initHeroVisualAlignment();
    
    document.querySelectorAll('.tech-filters button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.tech-filters .active').classList.remove('active');
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    document.querySelectorAll('[data-set-lang]').forEach(button => {
        button.addEventListener('click', () => updateLanguage(button.dataset.setLang));
    });
});

function initTyped(lang) {
    const typedElement = document.querySelector('#typed-text');
    if (!typedElement) return;

    if (typedInstance) {
        typedInstance.destroy();
        typedInstance = null;
    }

    if (typeof Typed === 'undefined') {
        typedElement.textContent = translations[lang].typed_strings[0];
        return;
    }

    typedInstance = new Typed('#typed-text', {
        strings: translations[lang].typed_strings,
        typeSpeed: 50,
        backSpeed: 26,
        backDelay: 2400,
        smartBackspace: false,
        loop: true
    });
}

function renderProjects(filter) {
    const container = document.querySelector('#projects-container');
    if (!container) return;
    
    container.innerHTML = '';
    let visibleProjectIndex = 0;

    projectsData.forEach(p => {
        const matchesFilter = filter === 'all' || 
                              p.techs.includes(filter) || 
                              (p.category && p.category.includes(filter));
        
        if (matchesFilter) {
            visibleProjectIndex += 1;
            const content = p[currentLang];
            const displayTitle = content.title || p.title;
            
            let actionBtnHtml = '';
                if (p.pageUrl) {
                    actionBtnHtml = `
                        <a class="btn-action" href="${p.pageUrl}" onclick="event.stopPropagation()">
                            ${currentLang === 'fr' ? 'Voir l’étude de cas' : 'View case study'}
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    `;
                } else if (p.actionBtn) {
                let btnText = p.actionBtn.text;
                if (currentLang === 'fr') {
                    if (p.actionBtn.text === 'View Modeling') btnText = 'Voir Modélisation';
                    else if (p.actionBtn.text === 'View Dashboard') btnText = 'Voir Dashboard';
                    else if (p.actionBtn.text === 'View Dashboards') btnText = 'Voir Dashboards';
                    else if (p.actionBtn.text === 'View App') btnText = 'Voir Application';
                }
                actionBtnHtml = `
                    <button class="btn-action" onclick="event.stopPropagation(); openDetailedModal(${p.id})">
                        ${btnText} <i class="fa-solid fa-arrow-right"></i>
                    </button>
                `;
            } else {
                actionBtnHtml = `
                    <span class="project-open-label">
                        ${currentLang === 'fr' ? 'Découvrir le projet' : 'Explore project'}
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                `;
            }

            const html = `
                <div class="glass-card project-card" onclick="${p.pageUrl ? `window.location.href='${p.pageUrl}'` : `openModal(${p.id})`}">
                    <span class="project-index">${String(visibleProjectIndex).padStart(2, '0')} / ${String(projectsData.length).padStart(2, '0')}</span>
                    <div class="project-img" style="background-image: url('${p.image}')"></div>
                    <div class="project-content">
                        <span class="project-case-label">${currentLang === 'fr' ? 'ÉTUDE DE CAS' : 'CASE STUDY'}</span>
                        <div class="project-meta">
                            <span class="meta-type">${content.type}</span>
                            <span class="project-badge ${p.status === 'ongoing' ? 'badge-ongoing' : 'badge-completed'}">${translations[currentLang]['status-' + p.status]}</span>
                        </div>
                        <span class="meta-date">${typeof p.date === 'object' ? p.date[currentLang] : p.date}</span>
                        
                        <h3>${displayTitle}</h3>
                        <p>${content.desc}</p>
                        <div class="project-tags">
                            ${p.techs.map(t => `<span>${t}</span>`).join('')}
                        </div>
                        ${actionBtnHtml}
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
            const card = container.lastElementChild;
            card.style.animationDelay = `${container.children.length * 0.08}s`;
        }
    });
}

function openModal(id) {
    const p = projectsData.find(proj => proj.id === id);
    
    if (p.hasDetailedModal) {
        openDetailedModal(id);
        return;
    }
    
    const content = p[currentLang];
    const displayTitle = content.title || p.title;
    
    document.querySelector('#modal-img').src = p.image;
    document.querySelector('#modal-title').textContent = displayTitle;
    document.querySelector('#modal-desc').textContent = content.desc;
    
    document.querySelector('#modal-techs').innerHTML = p.techs.map(t => `<span>${t}</span>`).join('');
    document.querySelector('#modal-links').innerHTML = p.links.map(l => {
        let linkText = l.text;
        if (currentLang === 'fr') {
            if (l.text === 'View Code') linkText = 'Voir le code';
            else if (l.text === 'View Live Project') linkText = 'Voir le projet en ligne';
        }
        return `
          <a href="${l.url}" target="_blank" class="btn-link">
              <i class="${l.iconStyle || 'fa-brands'} ${l.icon || 'fa-github'}"></i> ${linkText}
          </a>
      `;
    }).join('');
    
    document.querySelector('#project-modal').classList.add('active');
    updateModalScrollState();
}

function openDetailedModal(id) {
    const p = projectsData.find(proj => proj.id === id);
    const content = p[currentLang];
    
    const modal = document.querySelector('#detailed-modal');
    
    modal.querySelector('#detailed-modal-title').textContent = content.modalTitle;
    modal.querySelector('#detailed-modal-desc').textContent = content.modalDesc;
    
    const techSection = modal.querySelector('#detailed-tech-section');
    techSection.querySelector('h4').innerHTML = `<i class="fa-solid fa-globe"></i> ${content.techSection.title}`;
    techSection.querySelector('.tech-grid').innerHTML = content.techSection.items.map(item => `
        <div class="tech-item">
            <span class="tech-label">${item.label}:</span>
            <span class="tech-value">${item.value}</span>
        </div>
    `).join('');
    
    const featuresContainer = modal.querySelector('#detailed-features-section');
    if (content.features && content.features.length > 0) {
        const featuresTitle = translations[currentLang]['features-title'];
        featuresContainer.innerHTML = `
            <div class="features-section">
                <h4><i class="fa-solid fa-list-check"></i> ${featuresTitle}</h4>
                <ul class="features-list">
                    ${content.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
        `;
        featuresContainer.style.display = 'block';
    } else {
        featuresContainer.innerHTML = '';
        featuresContainer.style.display = 'none';
    }
    

    let diagramsTitle;
    if (p.id === 4 || p.id === 8) {
        diagramsTitle = translations[currentLang]['previews-title'];
    } else {
        diagramsTitle = translations[currentLang]['diagrams-title'];
    }
    modal.querySelector('#diagrams-section-title').textContent = diagramsTitle;
    
    const diagramsContainer = modal.querySelector('#detailed-diagrams');
    diagramsContainer.innerHTML = content.diagrams.map((d, index) => `
        <div class="diagram-card" onclick="openImageModal('${d.image}')">
            <div class="diagram-img" style="background-image: url('${d.image}')"></div>
            <div class="diagram-info">
                <h5>${index + 1}. ${d.title}</h5>
                <p>${d.desc}</p>
            </div>
        </div>
    `).join('');
    
    const linksContainer = modal.querySelector('#detailed-links');
    if (p.links && p.links.length > 0) {
        linksContainer.innerHTML = p.links.map(l => {
            let linkText = l.text;
            if (currentLang === 'fr') {
                if (l.text === 'View Code') linkText = 'Voir le code';
                else if (l.text === 'View Live Project') linkText = 'Voir le projet en ligne';
            }
            return `
              <a href="${l.url}" target="_blank" class="btn-link">
                  <i class="${l.iconStyle || 'fa-brands'} ${l.icon || 'fa-github'}"></i> ${linkText}
              </a>
          `;
        }).join('');
        linksContainer.style.display = 'flex';
    } else {
        linksContainer.style.display = 'none';
    }
    
    modal.classList.add('active');
    updateModalScrollState();
}

function openImageModal(imageSrc) {
    const imageModal = document.querySelector('#image-modal');
    imageModal.querySelector('#image-modal-img').src = imageSrc;
    imageModal.classList.add('active');
    updateModalScrollState();
}

function closeModal() {
    document.querySelector('#project-modal').classList.remove('active');
    updateModalScrollState();
}

function closeDetailedModal() {
    document.querySelector('#detailed-modal').classList.remove('active');
    updateModalScrollState();
}

function closeImageModal() {
    document.querySelector('#image-modal').classList.remove('active');
    updateModalScrollState();
}

function updateModalScrollState() {
    if (!lenisInstance) return;

    const hasOpenModal = document.querySelector('.modal-overlay.active');
    if (hasOpenModal) {
        lenisInstance.stop();
    } else {
        lenisInstance.start();
    }
}

window.onclick = function(event) {
    const modal = document.querySelector('#project-modal');
    const detailedModal = document.querySelector('#detailed-modal');
    const imageModal = document.querySelector('#image-modal');

    if (event.target == modal) closeModal();
    if (event.target == detailedModal) closeDetailedModal();
    if (event.target == imageModal) closeImageModal();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (document.querySelector('#image-modal.active')) closeImageModal();
        else if (document.querySelector('#detailed-modal.active')) closeDetailedModal();
        else if (document.querySelector('#project-modal.active')) closeModal();
    }
});

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-fr', lang === 'fr');
    document.body.classList.toggle('lang-en', lang === 'en');
    const cvPath = lang === 'fr'
        ? 'assets/CV_Fatih_TURK_FR.pdf'
        : 'assets/CV_Fatih_TURK_International.pdf';
    
    document.querySelectorAll('[data-set-lang]').forEach(button => {
        const isActive = button.dataset.setLang === lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    document.querySelectorAll('[data-cv-link]').forEach(link => {
        link.href = cvPath;
    });
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.dataset.lang;
        if (translations[lang][key]) {
            if (el.children.length) {
                const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                if (textNode) {
                    textNode.textContent = ` ${translations[lang][key]}`;
                } else {
                    el.appendChild(document.createTextNode(` ${translations[lang][key]}`));
                }
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    const inputName = document.querySelector('input[name="name"]');
    const inputEmail = document.querySelector('input[name="email"]');
    const inputSubject = document.querySelector('input[name="subject"]');
    const inputMessage = document.querySelector('textarea[name="message"]');
    
    if (inputName) inputName.placeholder = translations[lang]['form-name'];
    if (inputEmail) inputEmail.placeholder = translations[lang]['form-email'];
    if (inputSubject) inputSubject.placeholder = translations[lang]['form-subject'];
    if (inputMessage) inputMessage.placeholder = translations[lang]['form-message'];
    
    initTyped(lang);

    const activeFilter = document.querySelector('.tech-filters .active');
    if (activeFilter) {
        renderProjects(activeFilter.dataset.filter);
    }
}

function initScrollReveal() {
    const targets = document.querySelectorAll(
        '.glass-card, .section-header h2, .tech-filters, .timeline-card, .editorial-section-heading, .profile-manifesto, .contact-heading'
    );

    targets.forEach(el => {
        el.classList.add('reveal');
    });

    document.querySelectorAll(
        '.education-grid, .projects-grid, .grid-3, .grid-4, .split-view, .skills-layout-advanced'
    ).forEach(grid => {
        grid.querySelectorAll('.glass-card, .timeline-card').forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.08}s`;
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initProgressBars() {
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress-fill').forEach((bar, i) => {
                    setTimeout(() => bar.classList.add('animated'), i * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
}

function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    const nav = document.querySelector('.glass-nav');

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + '%';

        if (scrollTop > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        if (scrollTop > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    backToTop.addEventListener('click', () => {
        if (lenisInstance) {
            lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        if (!glow.classList.contains('active')) glow.classList.add('active');
    });
    document.addEventListener('mouseleave', () => glow.classList.remove('active'));
}

function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
}

function initSmoothNavigation() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            closeMenu();

            const nav = document.querySelector('.glass-nav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 18;

            if (lenisInstance && !reduceMotion) {
                lenisInstance.scrollTo(Math.max(0, top), { duration: 1.2 });
            } else {
                window.scrollTo({
                    top: Math.max(0, top),
                    behavior: reduceMotion ? 'auto' : 'smooth'
                });
            }
        });
    });
}

function initSmoothScroll() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof Lenis === 'undefined') return;

    lenisInstance = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9
    });

    const raf = time => {
        lenisInstance.raf(time);
        window.requestAnimationFrame(raf);
    };

    window.requestAnimationFrame(raf);
}

function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const content = hero?.querySelector('.hero-content');
    const visual = hero?.querySelector('.hero-visual-editorial');
    const scrollCue = hero?.querySelector('.hero-scroll-cue');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hero || !content || !visual || reduceMotion) return;

    let ticking = false;

    const updateHero = () => {
        const rect = hero.getBoundingClientRect();
        const travelled = Math.max(0, -rect.top);
        const progress = Math.min(1, travelled / Math.max(hero.offsetHeight, 1));

        content.style.transform = `translate3d(0, ${travelled * 0.08}px, 0)`;
        content.style.opacity = String(1 - progress * 0.42);
        visual.style.transform = `translate3d(0, ${travelled * 0.035}px, 0) scale(${1 - progress * 0.025})`;

        if (scrollCue) {
            scrollCue.style.opacity = String(1 - progress * 1.8);
        }

        ticking = false;
    };

    const requestUpdate = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHero);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateHero();
}

function initHeroVisualAlignment() {
    const visual = document.querySelector('.hero-visual-editorial');
    const portrait = visual?.querySelector('.portrait-frame');

    if (!visual || !portrait || typeof ResizeObserver === 'undefined') return;

    const syncRailHeight = () => {
        visual.style.setProperty('--portrait-rail-height', `${portrait.offsetHeight}px`);
    };

    const observer = new ResizeObserver(syncRailHeight);
    observer.observe(portrait);

    const portraitImage = portrait.querySelector('img');
    if (portraitImage && !portraitImage.complete) {
        portraitImage.addEventListener('load', syncRailHeight, { once: true });
    }

    syncRailHeight();
}

function toggleMenu() {
    const menu = document.querySelector('#nav-menu');
    const icon = document.querySelector('.hamburger i');
    
    if (menu) {
        menu.classList.toggle('active');
        
        if (icon) {
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
    }
}

function closeMenu() {
    const menu = document.querySelector('#nav-menu');
    const icon = document.querySelector('.hamburger i');
    
    if (menu) {
        menu.classList.remove('active');
    }
    if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}
