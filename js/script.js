const projectsData = [
    {
        id: 1,
        title: "Web Application Laravel",
        date: "2025-2026",
        image: "assets/previewLeboncoin.png",
        techs: ["PHP", "Laravel", "SQL", "PostgreSQL", "HTML", "CSS", "Power BI"],
        links: [{ text: "View Code", url: "https://github.com/BazeOnigiri/SAE_Leboncoin.git" }],
        fr: { 
            title: "Application Web Laravel",
            type: "Projet Universitaire", 
            desc: "Application web type LeBonCoin développée en équipe de 5. Conception et modélisation de bases de données (MCD/MPD) et diagrammes BPMN. Création de tableaux de bord Power BI pour le suivi des indicateurs clés." 
        },
        en: { 
            title: "Web Application Laravel",
            type: "University Project", 
            desc: "Classified ads web application developed in a team of 5 using Laravel. Designed and modeled databases (ERD/Physical Data Models) and BPMN diagrams. Created Power BI dashboards to monitor key performance indicators." 
        }
    },
    {
        id: 2,
        title: "Order Management App",
        date: "2025",
        image: "assets/previewSIBILIA.png", 
        techs: ["C#", ".NET", "WPF", "XAML"], 
        links: [{ text: "View Code", url: "https://github.com/yanis381/SAE201.git" }],
        fr: { 
            title: "Application Gestion de Commandes",
            type: "Projet Universitaire", 
            desc: "Application de gestion de commandes développée en C# (WPF/XAML). Conception et implémentation d'une interface utilisateur pour la prise de commandes et la gestion des stocks." 
        },
        en: { 
            title: "Order Management Application",
            type: "University Project", 
            desc: "Developed an order management application in C# (WPF/XAML). Designed and implemented a user interface for order taking and stock management." 
        }
    },
    {
        id: 3,
        title: "Portfolio",
        date: "2025",
        image: "assets/previewPortfolio.png",
        techs: ["JavaScript", "HTML", "CSS", "Web"],
        links: [{ text: "View Code", url: "https://github.com/fatiht7/portfolio.git" }],
        fr: { 
            title: "Portfolio",
            type: "Projet Personnel", 
            desc: "Site personnel moderne style Glassmorphism avec filtrage dynamique et animations fluides." 
        },
        en: { 
            title: "Portfolio",
            type: "Personal Project", 
            desc: "Modern Glassmorphism style personal website features dynamic filtering and smooth animations." 
        }
    },
    {
        id: 4,
        title: "2D Video Game",
        date: "2024",
        image: "assets/previewLabyrinthe.png",
        techs: ["C#", ".NET", "Game Dev"],
        links: [{ text: "View Code", url: "https://github.com/xX-Proplayer-Xx/Labyrinthe.git" }],
        fr: { 
            title: "Jeu Vidéo 2D",
            type: "Projet Universitaire", 
            desc: "Développement d'un moteur de jeu et gestion physique en C# pur." 
        },
        en: { 
            title: "2D Video Game",
            type: "University Project", 
            desc: "Game engine development and physics management written in pure C#." 
        }
    }
];

const translations = {
    fr: {
        nav_home: "Accueil", 
        nav_skills: "Compétences", 
        nav_contact: "Contact", 
        nav_projects: "Projets", 
        nav_projects_btn: "Voir mes projets",
        hero_badge: "✨ Disponible Avril - Juin 2026",
        "profil-p": "Étudiant en BUT Informatique (Parcours C). Je structure la donnée et conçois des architectures backend robustes.",
        "profil-btn-cv": "Télécharger mon CV",
        
        "titre_profil": "Profil",
        "bio_profil": "Étudiant en deuxième année de BUT Informatique à l'Université d'Annecy, spécialisé dans l'administration, la gestion et l'exploitation des données (Parcours C). Je cherche à appliquer mes compétences en développement logiciel et manipulation de données lors d'un stage d'avril à juin 2026, tout en contribuant à des projets innovants.",

        "competences-titre": "Compétences Techniques", 
        "comp-soft": "Savoir-être",
        "soft-time": "Bonne gestion du temps & Ponctuel",
        "soft-analytic": "Précis et Analytique",
        "soft-focus": "Orienté tâches et Concentré",
        "soft-team": "Travail d'équipe",
        "soft-autonomous": "Autonome et capacité d'adaptation",
        
        "titre_edu": "Formation", 
        "titre_pro_exp": "Expériences Professionnelles",
        "date_june_25": "Juin 2025",
        "date_ete_24": "Été 2024",
        
        "job_web_app": "Application Web & Gestion BDD",
        "desc_web_app": "Développement d'une application web avec Laravel en équipe de 5. Conception et modélisation de bases de données (MCD/MPD) et diagrammes BPMN. Création de tableaux de bord Power BI pour le suivi des indicateurs clés.",
        
        "job_order_app": "Application Gestion de Commandes",
        "desc_order_app": "Développement d'une application de gestion de commandes en C# (WPF/XAML). Conception et implémentation d'une interface utilisateur pour la prise de commandes et la gestion des stocks.",
        
        "job_leclerc": "Employé Commercial", 
        "desc_leclerc": "Supermarché - 250 employés. Mise en rayon et gestion des stocks. Merchandising et assistance client.",
        
        "titre_but": "BUT Informatique", 
        "desc_but": "Bachelor Universitaire de Technologie en informatique. Deuxième année en cours.",
        
        "titre_bac": "Baccalauréat Français", 
        "desc_bac": "Diplôme du baccalauréat spécialisé en sciences et informatique.",
        
        "projets-titre": "Projets Récents", 
        "contact-titre": "Contactez-moi", 
        "contact-p": "Disponible pour échanger sur des opportunités de stage.", 
        "form-send": "Envoyer",
        
        "langues-titre": "Langues", 
        "lang-native": "Langue maternelle", 
        "lang-fr": "Français", 
        "lang-tr": "Turc", 
        "lang-en": "Anglais", 
        "lang-es": "Espagnol",
        
        "ref-titre": "Références", 
        "role-ref1": "Enseignante d'Anglais, Coordinatrice Internationale", 
        "role-ref2": "Professeur SQL et POO, Chercheur à l'Université de Savoie",
        
        "interets-titre": "Centres d'intérêt", 
        "hobby-games": "Jeux Vidéo", 
        "hobby-fitness": "Fitness",
        "hobby-fitness-desc": "Musculation"
    },
    en: {
        nav_home: "Home", 
        nav_skills: "Skills", 
        nav_contact: "Contact", 
        nav_projects: "Projects", 
        nav_projects_btn: "View my projects",
        hero_badge: "✨ Available April - June 2026",
        "profil-p": "Second-year CS Student (Data Track). I aim to apply my data architecture rigor to software development.",
        "profil-btn-cv": "Download CV",
        
        "titre_profil": "Profile",
        "bio_profil": "Second-year Computer Science student pursuing a Bachelor's Degree of Technology at the University of Annecy, specializing in data administration, management, and exploitation (Track C). I am seeking to apply my skills in software development and data manipulation during an internship from April to June 2026, while contributing to innovative projects.",

        "competences-titre": "Technical Skills", 
        "comp-soft": "Soft Skills",
        "soft-time": "Good time management skills & Punctual",
        "soft-analytic": "Precise and Analytical",
        "soft-autonomous": "Autonomous and adaptable",

        "titre_edu": "Education", 
        "titre_pro_exp": "Work Experience",
        "date_june_25": "June 2025",
        "date_ete_24": "Summer 2024",
        
        "job_web_app": "Web Application & Database Management",
        "desc_web_app": "Developed a web application using Laravel in a team of 5. Designed and modeled databases (ERD/Physical Data Models) and BPMN diagrams. Created Power BI dashboards to monitor key performance indicators.",
        
        "job_order_app": "Order Management Application",
        "desc_order_app": "Developed an order management application in C# (WPF/XAML). Designed and implemented a user interface for order taking and stock management.",
        
        "job_leclerc": "Retail Associate", 
        "desc_leclerc": "Supermarket - 250 employees. Restocked shelves and managed inventory. Merchandised products and assisted customers.",
        
        "titre_but": "CS Bachelor (BUT Informatique)", 
        "desc_but": "Technical Bachelor's Degree in computer science. Second year in progress.",
        
        "titre_bac": "French Baccalaureate", 
        "desc_bac": "High School diploma specialized in science and computer.",
        
        "projets-titre": "Recent Projects", 
        "contact-titre": "Contact Me", 
        "contact-p": "Available to discuss internship opportunities.", 
        "form-send": "Send",
        
        "langues-titre": "Languages", 
        "lang-native": "Native Speaker", 
        "lang-fr": "French", 
        "lang-tr": "Turkish", 
        "lang-en": "English", 
        "lang-es": "Spanish",
        
        "ref-titre": "References", 
        "role-ref1": "English Lecturer, International Coordinator", 
        "role-ref2": "SQL and OOP teacher, Researcher at university of Savoy",
        
        "interets-titre": "Interests", 
        "hobby-games": "Video Games", 
        "hobby-fitness": "Fitness",
        "hobby-fitness-desc": "Weight training"
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {

    if(document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                "Data Analyst.", 
                "Backend Developer.", 
                "SQL Expert.",
                "Student."
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    renderProjects('all');
    
    document.querySelectorAll('.tech-filters button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.tech-filters .active').classList.remove('active');
            btn.classList.add('active');
            renderProjects(btn.dataset.filter);
        });
    });

    document.getElementById('lang-switch').addEventListener('click', () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        updateLanguage(newLang);
    });
});

function renderProjects(filter) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projectsData.forEach(p => {
        if (filter === 'all' || p.techs.includes(filter)) {
            const content = p[currentLang];
            const displayTitle = content.title || p.title;
            const html = `
                <div class="glass-card project-card" onclick="openModal(${p.id})">
                    <div class="project-img" style="background-image: url('${p.image}')"></div>
                    <div class="project-content">
                        <div class="project-meta">
                            <span class="meta-date">${p.date}</span>
                            <span class="meta-sep">•</span>
                            <span class="meta-type">${content.type}</span>
                        </div>
                        
                        <h3>${displayTitle}</h3>
                        <p>${content.desc}</p>
                        <div class="project-tags">
                            ${p.techs.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        }
    });
}

function openModal(id) {
    const p = projectsData.find(proj => proj.id === id);
    const content = p[currentLang];
    const displayTitle = content.title || p.title;
    
    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-title').textContent = displayTitle;
    document.getElementById('modal-desc').textContent = content.desc;
    
    document.getElementById('modal-techs').innerHTML = p.techs.map(t => `<span>${t}</span>`).join('');
    document.getElementById('modal-links').innerHTML = p.links.map(l => `<a href="${l.url}" target="_blank">${l.text}</a>`).join('');
    
    document.getElementById('project-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}

function updateLanguage(lang) {
    currentLang = lang;
    document.getElementById('lang-switch').textContent = lang === 'fr' ? 'EN' : 'FR';
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.dataset.lang;
        if(translations[lang][key]) el.textContent = translations[lang][key];
    });
    
    const activeFilter = document.querySelector('.tech-filters .active').dataset.filter;
    renderProjects(activeFilter);
}

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const icon = document.querySelector('.hamburger i');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

function closeMenu() {
    const menu = document.getElementById('nav-menu');
    const icon = document.querySelector('.hamburger i');
    
    menu.classList.remove('active');
    if(icon){
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}