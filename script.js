// Les données sont intégrées directement pour éviter les erreurs de chargement local (CORS)
const projets = [
    {
        "titre": "Gestionnaire de Stock",
        "description": "Application de bureau pour la gestion d'inventaire avec rapports PDF.",
        "technos": ["Python", "Tkinter", "SQLite"],
        "lien": "https://github.com/ton-profil/stock-manager"
    },
    {
        "titre": "API E-commerce",
        "description": "Backend complet avec authentification JWT et gestion de panier.",
        "technos": ["Node.js", "Express", "MongoDB"],
        "lien": "https://github.com/ton-profil/shop-api"
    },
    {
        "titre": "Plateforme Scolaire",
        "description": "Système de gestion de notes et d'absences pour étudiants.",
        "technos": ["PHP", "MySQL", "Bootstrap"],
        "lien": "https://github.com/ton-profil/school-app"
    }
];

function afficherProjets() {
    const container = document.querySelector('.grid-projets');
    
    if (!container) {
        console.error("Le conteneur .grid-projets n'a pas été trouvé dans le HTML.");
        return;
    }

    // Génération du HTML pour chaque projet
    container.innerHTML = projets.map(p => `
        <article class="card">
            <h3>${p.titre}</h3>
            <p>${p.description}</p>
            <div class="tags">
                ${p.technos.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${p.lien}" class="link" target="_blank">Voir sur GitHub →</a>
        </article>
    `).join('');
}

// Lancement des fonctions au chargement du document
window.addEventListener('DOMContentLoaded', () => {
    // 1. Afficher les projets
    afficherProjets();
    
    // 2. Animation d'apparition de la section Hero
    const hero = document.querySelector('.hero-container');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 1s ease-out';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
});