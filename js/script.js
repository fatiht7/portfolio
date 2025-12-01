const projectsData = [
    {
        id: 1,
        date: "2024",
        image: "assets/previewSIBILIA.png", 
        techs: ["C#", ".NET", "WPF", "SQL", "PostgreSQL", "Merise"], 
        links: [{ text: "View Code", url: "https://github.com/yanis381/SAE201.git" }],
        fr: { 
            title: "Projet C#.Net8 WPF",
            type: "Projet Universitaire", 
            desc: "Application lourde de gestion de commandes de charcuterie. Conception UML, Interface XAML moderne et gestion CRUD complète." 
        },
        en: { 
            title: "Project C#.Net8 WPF",
            type: "University Project", 
            desc: "Desktop application for deli order management. UML Design, modern XAML Interface, complete CRUD operations." 
        }
    },
    {
        id: 2,
        title: "Portfolio",
        date: "2025",
        image: "assets/previewPortfolio.png",
        techs: ["JavaScript", "HTML", "CSS", "Web"],
        links: [{ text: "View Code", url: "https://github.com/fatiht7/portfolio.git" }],
        fr: { 
            type: "Projet Personnel", 
            desc: "Site personnel moderne style Glassmorphism avec filtrage dynamique et animations fluides." 
        },
        en: { 
            type: "Personal Project", 
            desc: "Modern Glassmorphism style personal website features dynamic filtering and smooth animations." 
        }
    },
    {
        id: 3,
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
            title: "Video game 2D",
            type: "University Project", 
            desc: "Game engine development and physics management written in pure C#." 
        }
    },
    {
        id: 4,
        date: "2025",
        image: "assets/previewLeboncoin.png",
        techs: ["PHP", "Laravel", "SQL", "PostgreSQL", "HTML", "CSS"],
        links: [{ text: "View Code", url: "https://github.com/BazeOnigiri/SAE_Leboncoin.git" }],
        fr: { 
            title: "Projet Web Laravel",
            type: "Projet Universitaire", 
            desc: "Application web type LeBonCoin. Gestion complète BDD, utilisateurs et annonces." 
        },
        en: { 
            title: "Web Project Laravel",
            type: "University Project", 
            desc: "Classified ads web application (Craigslist style). Complete DB, user, and ad management." 
        }
    }
];

const translations = {
    fr: {
        nav_home: "Accueil", nav_skills: "Compétences", nav_exp: "Parcours", nav_contact: "Contact", nav_projects: "Projets", nav_projects_btn: "Voir mes projets",
        hero_badge: "✨ Disponible Avril - Juin 2026",
        "profil-p": "Étudiant en BUT Informatique (Parcours C). Je structure la donnée et conçois des architectures backend robustes.",
        "profil-btn-cv": "Télécharger mon CV",
        
        "titre_profil": "Profil",
        "bio_profil": "Étudiant en deuxième année de BUT Informatique à l'Université d'Annecy, spécialisé dans l'administration, la gestion et l'exploitation des données (Parcours C). Je cherche à appliquer mes compétences en développement logiciel et manipulation de données lors d'un stage d'avril à juin 2026, tout en contribuant à des projets innovants.",

        "competences-titre": "Compétence Technique", 
        "comp-soft": "Savoir-être",
        "soft-time": "Bonne gestion du temps & Ponctuel",
        "soft-analytic": "Précis et Analytique",
        "soft-focus": "Orienté tâches et Concentré",
        "soft-team": "Travail d'équipe",
        
        "titre_edu": "Formation", 
        "titre_pro_exp": "Expérience Pro",
        "date_ete_25": "Été 2025", "date_ete_24": "Été 2024",
        "job_leclerc": "Employé Commercial", "desc_leclerc": "Mise en rayon, gestion des stocks, relation client.", 
        "job_mcdo": "Équipier Polyvalent", "desc_mcdo": "Travail sous pression, respect des procédures.",
        "job_sgbd": "Projet Universitaire (SGBD)", "desc_sgbd": "Création des modèles de données (MCD/MPD) et développement de scripts SQL complexes.",
        "titre_but": "BUT Informatique", "desc_but": "Spécialisation Data (Parcours C). Administration BDD, Algo.", 
        "titre_bac": "Baccalauréat STI2D", "desc_bac": "Spécialités Systèmes d'Information et numérique (SIN).",
        
        "projets-titre": "Projets Récents", 
        "contact-titre": "Contactez-moi", "contact-p": "Disponible pour échanger sur des opportunités de stage.", "form-send": "Envoyer",
        
        "langues-titre": "Langues", "lang-native": "Langue maternelle", "lang-fr": "Français", "lang-tr": "Turc", "lang-en": "Anglais", "lang-es": "Espagnol",
        
        "ref-titre": "Références", "role-ref1": "Coordinatrice Internationale", "role-ref2": "Professeur SQL et POO",
        "interets-titre": "Centres d'intérêt", "hobby-games": "Jeux Vidéo", "hobby-sport": "Football"
    },
    en: {
        nav_home: "Home", nav_skills: "Skills", nav_exp: "Journey", nav_contact: "Contact", nav_projects: "Projects", nav_projects_btn: "View Projects",
        hero_badge: "✨ Available April - June 2026",
        "profil-p": "CS Student (Data Track). I structure data and design robust backend architectures.",
        "profil-btn-cv": "Download CV",
        
        "titre_profil": "Profile",
        "bio_profil": "Second-year Computer Science student pursuing a Bachelor's Degree of Technology at the University of Annecy, specializing in data administration, management, and exploitation (Track C). I am seeking to apply my skills in software development and data manipulation during an internship from April to June 2026, while contributing to innovative projects.",

        "competences-titre": "Technical Expertise", 
        "comp-soft": "Soft Skills",
        "soft-time": "Good time management skills & Punctual",
        "soft-analytic": "Precise and Analytical",
        "soft-focus": "Very task-oriented and Focused",
        "soft-team": "Teamwork",

        "titre_edu": "Education", 
        "titre_pro_exp": "Work Experience",
        "date_ete_25": "Summer 2025", "date_ete_24": "Summer 2024",
        "job_leclerc": "Retail Associate", "desc_leclerc": "Stock management, inventory, customer relations.", 
        "job_mcdo": "Crew Member", "desc_mcdo": "Working under pressure, procedure compliance, teamwork.",
        "job_sgbd": "University Project (DBMS)", "desc_sgbd": "Creation of data models (CDM/PDM) and development of complex SQL scripts.",
        "titre_but": "CS Bachelor", "desc_but": "Data Specialization (Track C). DB Admin, Algo.", 
        "titre_bac": "High School Diploma (STI2D)", "desc_bac": "Specialized in Information Systems and Digital Technologies.",
        
        "projets-titre": "Recent Projects", 
        "contact-titre": "Contact Me", "contact-p": "Available for internship opportunities.", "form-send": "Send",
        
        "langues-titre": "Languages", "lang-native": "Native Language", "lang-fr": "French", "lang-tr": "Turkish", "lang-en": "English", "lang-es": "Spanish",
        
        "ref-titre": "References", "role-ref1": "International Coordinator", "role-ref2": "SQL & OOP Professor",
        "interets-titre": "Interests", "hobby-games": "Video Games", "hobby-sport": "Football"
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
            const html = `
                <div class="glass-card project-card" onclick="openModal(${p.id})">
                    <div class="project-img" style="background-image: url('${p.image}')"></div>
                    <div class="project-content">
                        <div class="project-meta">
                            <span class="meta-date">${p.date}</span>
                            <span class="meta-sep">•</span>
                            <span class="meta-type">${content.type}</span>
                        </div>
                        
                        <h3>${p.title}</h3>
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
    
    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-title').textContent = p.title;
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
    document.getElementById('lang-switch').textContent = lang.toUpperCase();
    
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