export const projectDetails = {
    'gamfed-quiz': {
        title: "Application Android pour la Fédération de Gymnastique de Nouvelle-Aquitaine",
        contentBlocks: [
            {
                type: 'text',
                content: `
                    <p>Application Android native développée en équipe de 4 étudiants en collaboration avec la Fédération de Gymnastique de Nouvelle-Aquitaine. L'objectif était de moderniser l'apprentissage et l'évaluation des connaissances des juges de gymnastique artistique masculine.</p>
                    
                    <h5>Contexte et complexité du domaine</h5>
                    <p>La gymnastique artistique masculine comprend 6 agrès distincts (Sol, Saut, Barres parallèles, Cheval d'arçons, Barre fixe, Anneaux). Chaque élément gymnastique possède des caractéristiques techniques précises : pictogramme détaillé, symbole simplifié, valeur selon le niveau, groupe d'appartenance et règles de reconnaissance. Les juges doivent maîtriser plus de 600 éléments avec leurs spécificités.</p>
                `
            },
            {
                type: 'images',
                title: 'Les 6 agrès de gymnastique',
                images: [
                    {
                        src: '/images/gamfed-agres-sol.webp',
                        alt: 'Agrès Sol - gymnastes réalisant des figures au sol',
                        caption: 'Sol : acrobaties et figures chorégraphiées'
                    },
                    {
                        src: '/images/gamfed-agres-saut.webp',
                        alt: 'Agrès Saut - gymnaste s\'élançant sur le cheval de saut',
                        caption: 'Saut : impulsion et figures aériennes'
                    },
                    {
                        src: '/images/gamfed-agres-paralleles.webp',
                        alt: 'Barres parallèles - gymnaste en équilibre',
                        caption: 'Barres parallèles : force et équilibre'
                    },
                    {
                        src: '/images/gamfed-agres-arcons.webp',
                        alt: 'Cheval d\'arçons - rotation des jambes',
                        caption: 'Cheval d\'arçons : rotations et cisseaux'
                    },
                    {
                        src: '/images/gamfed-agres-fixe.webp',
                        alt: 'Barre fixe - gymnaste en suspension',
                        caption: 'Barre fixe : élans et rotations'
                    },
                    {
                        src: '/images/gamfed-agres-anneaux.webp',
                        alt: 'Anneaux - gymnaste en force statique',
                        caption: 'Anneaux : force pure et maintiens'
                    }
                ]
            },
            {
                type: 'text',
                content: `
                    <h5>Architecture technique globale</h5>
                    <p>L'application s'appuie sur Room Database pour la persistance, RxJava pour la programmation réactive, et un système complexe de génération dynamique de questions. L'architecture modulaire permet de gérer 7 types de questions différents avec une base de données relationnelle avancée.</p>
                `
            },
            {
                type: 'images',
                title: 'Architecture et base de données',
                images: [
                    {
                        src: '/images/gamfed-architecture-diagram.webp',
                        alt: 'Schéma d\'architecture de l\'application avec pipeline de données',
                        caption: 'Architecture générale : extraction PDF, base de données Room et génération dynamique'
                    },
                    {
                        src: '/images/gamfed-database-mcd.webp',
                        alt: 'Modèle conceptuel de données de l\'application',
                        caption: 'MCD avec relations complexes et séparation données officielles/statistiques utilisateur'
                    }
                ]
            },
            {
                type: 'text',
                content: `
                    <h5>Mes contributions principales</h5>
                    
                    <h5>1. Système de statistiques multidimensionnel</h5>
                    <p>Développement complet du système de statistiques avec 4 vues d'analyse : historique des quiz, performance par agrès, par type de question et par niveau de qualification. Le système utilise un cache LRU optimisé pour les détails des quiz et propose des filtres temporels dynamiques.</p>
                `
            },
            {
                type: 'images',
                title: 'Interface du système de statistiques',
                images: [
                    {
                        src: '/images/gamfed-stats-historique.webp',
                        alt: 'Écran d\'historique des quiz avec scores',
                        caption: 'Historique chronologique avec suppression de quiz'
                    },
                    {
                        src: '/images/gamfed-stats-agres.webp',
                        alt: 'Analyse des performances par agrès',
                        caption: 'Statistiques par agrès avec détails expansibles'
                    },
                    {
                        src: '/images/gamfed-stats-types.webp',
                        alt: 'Performance par types de questions',
                        caption: 'Analyse par types de questions (pictogrammes, valeurs, etc.)'
                    }
                ]
            },
            {
                type: 'text',
                content: `
                    <h5>2. Pipeline d'extraction de données PDF</h5>
                    <p>Conception d'un pipeline d'extraction automatisée pour traiter les documents PDF officiels de la FFGym. Le projet comportait deux approches :</p>
                    
                    <p><strong>Approche manuelle</strong> : Extraction manuelle des données depuis les PDF vers des fichiers Excel, puis traitement par l'outil Populator Java. Cette méthode a été utilisée pour la version finale.</p>
                    
                    <p><strong>Approche automatisée OCR</strong> : Développement d'un pipeline Python avec OpenCV pour la détection automatique des zones rectangulaires, conversion PDF vers PNG, et extraction OCR. Bien que non finalisée, cette approche pose les bases pour une automatisation future complète.</p>
                `
            },
            {
                type: 'images',
                title: 'Pipeline d\'extraction des données',
                images: [
                    {
                        src: '/images/gamfed-pdf-source.webp',
                        alt: 'Document PDF source de la FFGym avec grilles d\'éléments',
                        caption: 'Document PDF officiel FFGym avec grilles complexes'
                    },
                    {
                        src: '/images/gamfed-extraction-opencv.webp',
                        alt: 'Détection automatique des zones avec OpenCV',
                        caption: 'Détection des zones rectangulaires avec seuillage binaire'
                    },
                    {
                        src: '/images/gamfed-extraction-results.webp',
                        alt: 'Zones extraites et identifiées automatiquement',
                        caption: 'Extraction automatique des blocs avec identification des en-têtes'
                    }
                ]
            },
            {
                type: 'text',
                content: `
                    <h5>Défis techniques du pipeline d'extraction</h5>
                    <p>L'extraction automatisée des PDF FFGym s'est révélée plus complexe que prévu. Les documents ne sont pas structurés dans l'ordre de lecture, les images sont dispersées et parfois fragmentées. La détection automatique des tableaux avec OpenCV nécessite un prétraitement complexe et une logique métier pour identifier les en-têtes et regrouper les éléments.</p>
                    
                    <p>Face à ces difficultés, nous avons opté pour une approche hybride : extraction manuelle initiale avec un pipeline automatisé en développement pour les futures mises à jour.</p>
                    
                    <h5>3. Design et templates Figma</h5>
                    <p>Création de l'ensemble du design system de l'application avec Figma. Définition de la charte graphique, des composants réutilisables, et des parcours utilisateur complets. Les templates incluent tous les écrans avec leurs états (vide, chargement, erreur) et les animations de transition.</p>
                `
            },
            {
                type: 'images',
                title: 'Design system et templates Figma',
                images: [
                    {
                        src: '/images/gamfed-figma-components.webp',
                        alt: 'Bibliothèque de composants réutilisables dans Figma',
                        caption: 'Design system avec composants modulaires et variantes'
                    },
                    {
                        src: '/images/gamfed-figma-screens.webp',
                        alt: 'Maquettes complètes de tous les écrans de l\'application',
                        caption: 'Ensemble des écrans avec états et transitions'
                    },
                    {
                        src: '/images/gamfed-figma-styleguide.webp',
                        alt: 'Guide de style avec couleurs, typographie et espacements',
                        caption: 'Charte graphique complète avec guidelines'
                    }
                ]
            },
            {
                type: 'text',
                content: `
                    <h5>4. Modélisation de la base de données</h5>
                    <p>Participation à la conception du schéma Room Database avec gestion des métadonnées, versioning et migrations. La base comprend deux parties distinctes : les données officielles FFGym (en lecture seule) et les statistiques utilisateur (préservées entre mises à jour).</p>
                `
            },
        ],
        downloads: [
            {
                title: "Templates Figma",
                filename: "GamFed - Ronan (Neopelta) PLUTA FONTAINE.fig",
                description: "Fichier Figma contenant l'ensemble des maquettes, composants et design system de l'application.",
                icon: "/images/logo/figma/figma-logo.svg"
            }
        ]
    }
};

export function getProjectDetails(projectId) {
    return projectDetails[projectId] || null;
}