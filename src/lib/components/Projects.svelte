<script>
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    const projects = [
        {
            title: "Gamfed Quiz",
            description: "Application Android destinée aux juges de la Fédération de Gymnastique de Nouvelle-Aquitaine. Développée en équipe de 4, cette application permet d'apprendre et de réviser les concepts, symboles et règles de la gymnastique artistique masculine sur différents agrès. Le système inclut des quiz interactifs avec notation et suivi de progression.",
            date: "2025",
            technologies: [
                { name: "Android", highlighted: true },
                { name: "Java", highlighted: true },
                { name: "Room (SQLite)", highlighted: false }
            ],
            link: "#",
            image: "/images/gamfed-project.webp",
            alt: "Interface de quiz Gamfed avec questions à choix multiples"
        },
        {
            title: "Survival Quiz",
            description: "Quiz de survie temporelle sur Android avec génération de certificat PDF. Interface adaptative jour/nuit, support multilingue et historique des résultats via Room Database. Développé en binôme dans le cadre du cours d'IHM mobile.",
            date: "2025",
            technologies: [
                { name: "Android", highlighted: true },
                { name: "Java", highlighted: true },
                { name: "Room (SQLite)", highlighted: false }
            ],
            link: "#",
            image: "/images/survival-quiz-project.webp",
            alt: "Page d'accueil de quiz Survival Quiz"
        },
        {
            title: "Portfolio Personnel",
            description: "Mon portfolio personnel développé en SvelteKit, mettant en avant mes projets, compétences et expériences. Le site est entièrement responsive.",
            date: "2025",
            technologies: [
                { name: "SvelteKit", highlighted: true },
                { name: "HTML/CSS", highlighted: false },
                { name: "JavaScript", highlighted: false }
            ],
            link: "#",
            image: "/ronan_default.svg",
            alt: "Capture d'écran du portfolio personnel avec sections Projets, Compétences et Contact"
        },
        {
            title: "SkillTracker",
            description: "Application de suivi de compétences techniques avec tableau de bord personnalisable. Développé en React avec un backend Express.js, ce projet permet aux utilisateurs de suivre leur progression.",
            date: "2025",
            technologies: [
                { name: "React", highlighted: true },
                { name: "Express.js", highlighted: true },
                { name: "Discord API", highlighted: false },
                { name: "Google Sheets API", highlighted: false }
            ],
            link: "#",
            image: "/images/skilltracker-project.webp",
            alt: "Tableau de bord SkillTracker avec graphiques de progression"
        },
        {
            title: "Configurateur de Voiture 3D",
            description: "Application Unity développée dans le cadre du cours IHM à l'Université de Poitiers. Projet en binôme créant 3 widgets personnalisés réutilisables : ColorMixer pour mélanger et appliquer des couleurs, Carousel 2D pour naviguer entre les roues, et Joystick de Rotation pour contrôler la rotation du véhicule. Architecture modulaire avec conversion en Prefabs pour réutilisation.",
            date: "2025",
            technologies: [
                { name: "Unity 3D", highlighted: true },
                { name: "C#", highlighted: true },
                { name: "Blender", highlighted: false }
            ],
            link: "#",
            image: "/images/3D_car_configurator-project.webp",
            alt: "Interface du configurateur de voiture 3D avec widgets ColorMixer, Carousel et Joystick"
        },
        {
            title: "Kapture game",
            description: "Jeu de stratégie en tour par tour développé en C++. Combat tactique avec 3 types d'unités (Éclaireur, Troupe de choc, Chair à canon) sur terrain varié. Objectif : capturer le drapeau ennemi et le ramener à sa base. Inclut brouillard de guerre, système de combat complexe et gestion de terrains avec coûts de déplacement différents.",
            date: "2024",
            technologies: [
                { name: "C++", highlighted: true},
                { name: "CMake", highlighted: false }
            ],
            link: "#",
            image: "/images/kapture-game.webp",
            alt: "Capture d'écran du jeu Kapture dans un terminal Linux"
        },
        {
            title: "Solveur de Sudoku",
            description: "Solveur de Sudoku en C combinant logique avancée et backtracking. Le programme applique d'abord des techniques de réduction de notes (X-Wing, kuplets) et des analyses de blocs, puis utilise le backtracking comme solution de secours.",
            date: "2024",
            technologies: [
                { name: "C", highlighted: true }
            ],
            link: "#",
            image: "/images/sudoku-image.webp",
            alt: "Capture d'écran d'un terminal linux d'un sudoku résolu"
        },
        {
            title: "Validateur de Polysyllogismes",
            description: "Outil pédagogique en TypeScript pour valider des raisonnements logiques. Développé en équipe de 5 sur 3 mois, ce projet permet à des étudiants de vérifier la validité de leurs syllogismes.",
            date: "2024",
            technologies: [
                { "name": "TypeScript", "highlighted": true },
                { "name": "HTML/CSS", "highlighted": false }
            ],
            link: "#",
            image: "/images/validateur-syllo-project.webp",
            alt: "Interface du validateur de polysyllogismes avec formulaire de saisie"
        },
        {
            title: "The Cave",
            description: "Jeu d'aventure textuel inspiré de Colossal Cave Adventure développé en Java. Le joueur incarne Dave, un héros piégé dans une caverne mystérieuse dont personne n'est jamais revenu vivant. Système de combat tactique, gestion d'inventaire, marchands dynamiques et événements aléatoires.",
            date: "2023",
            technologies: [
                { name: "JAVA", highlighted: true }
            ],
            link: "#",
            image: "/images/the-cave-intro.webp",
            alt: "The Cave - Introduction avec un personnage dans une grotte"
        },
        {
            title: "TowerDefend",
            description: "Simulation automatique de tower defense développée en C avec SDL2. Le joueur observe en temps réel une bataille stratégique entre tours défensives et unités ennemies. Génération automatique d'unités, système de combat avec visualisation des attaques par lignes rouges, et double système de sauvegarde (binaire/séquentielle). Projet étudiant réalisé en binôme.",
            date: "2023",
            technologies: [
                { name: "C", highlighted: true },
                { name: "SDL2", highlighted: false }
            ],
            link: "#",
            image: "/images/towerdefends-project.webp",
            alt: "Simulation TowerDefend avec tours défensives et unités ennemies sur un plateau de jeu"
        },
        {
            title: "Tetris",
            description: "Jeu Tetris complet développé en OCaml dans le cadre d'un projet étudiant en binôme. Implémentation des 7 formes classiques avec rotations authentiques, système de lignes complètes, score progressif et écran Game Over. Utilise la bibliothèque Graphics d'OCaml pour l'interface graphique.",
            date: "2022",
            technologies: [
                { name: "OCaml", highlighted: true }
            ],
            link: "#",
            image: "/images/tetris-gameplay.webp",
            alt: "Partie de Tetris en cours avec différentes formes colorées"
        },
        {
            title: "Dinomonie",
            description: "Site web présentant une collection de jeux vidéo sous forme de 'cérémonie des jeux vidéo'. Projet universitaire développé en HTML/CSS/JavaScript avec un focus sur l'accessibilité, incluant des fiches de jeux détaillées, un système de prix et récompenses, et un formulaire questionnaire. Design responsive avec police Luciole spécialement adaptée aux malvoyants.",
            date: "2022",
            technologies: [
                { name: "xhtml", highlighted: true },
                { name: "css", highlighted: true },
                { name: "javascript", highlighted: true }
            ],
            link: "#",
            image: "/images/La-Dinomonie-La-ceremonie-des-jeux-video.webp",
            alt: "Page d'accueil de Dinomonie - La cérémonie des jeux vidéo"
        } 
    ];
</script>

<section id="projets" class="section">
    <div class="projects">
        <h2 class="section-title">Projets</h2>
        <div class="projects-grid">
            {#each projects as project}
                <ProjectCard {...project} />
            {/each}
        </div>
    </div>
</section>

<style>
    .projects {
        margin-bottom: var(--spacing-xl);
    }
    
    .projects-grid {
        display: grid;
        gap: var(--spacing-lg);
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    @media (max-width: 600px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>