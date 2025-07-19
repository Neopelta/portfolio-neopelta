export const projectDetails = {
    'gamfed-quiz': {
        title: "Application Android pour la Fédération de Gymnastique de Nouvelle-Aquitaine",
        contentBlocks: [
            {
                type: 'text',
                content: `
                    <p>Application Android native développée en équipe de 4 étudiants en pour la Fédération de Gymnastique de Nouvelle-Aquitaine. L'objectif était de moderniser l'apprentissage et l'évaluation des connaissances des juges de gymnastique artistique masculine.</p>
                `
            },
            {
                type: 'text',
                title: 'Fonctionnalités principales',
                underlined: true,
                content: `
                    <p>L'application propose un système complet de quiz interactifs permettant aux juges d'apprendre et de réviser :</p>
                    <ul>
                        <li>Quiz personnalisés avec génération dynamique de questions (7 types différents)</li>
                        <li>Système de notation et suivi de progression détaillé</li>
                        <li>Statistiques multidimensionnelles avec 4 vues d'analyse</li>
                        <li>Base de données de plus de 600 éléments gymnastiques</li>
                        <li>Interface adaptée aux besoins spécifiques des juges</li>
                    </ul>
                `
            },
            {
                type: 'images',
                title: 'Interface de l\'application',
                underlined: true,
                images: [
                    {
                        src: '/images/projects/gamfed/app-home.webp',
                        alt: 'Écran d\'accueil de l\'application avec options de quiz',
                        caption: 'Écran d\'accueil avec options de quiz personnalisés'
                    },
                    {
                        src: '/images/projects/gamfed/app-selectoption.webp',
                        alt: 'Écran de configuration des options de quiz',
                        caption: 'Configuration des paramètres de quiz (agrès, niveau, type de questions)'
                    },
                    {
                        src: '/images/projects/gamfed/app-question4.webp',
                        alt: 'Écran de quiz avec question à choix multiples',
                        caption: 'Question de quiz avec pictogramme et options de réponse'
                    },
                    {
                        src: '/images/projects/gamfed/app-result.webp',
                        alt: 'Écran de résultats avec score et analyse',
                        caption: 'Résultats détaillés avec pourcentage et recommandations'
                    }
                ]
            },
            {
                type: 'text',
                title: 'Contexte et complexité du domaine',
                underlined: true,
                content: `
                    <p>La gymnastique artistique masculine comprend 6 agrès distincts (Sol, Saut, Barres parallèles, Cheval d'arçons, Barre fixe, Anneaux). Chaque élément gymnastique possède des caractéristiques techniques précises : pictogramme détaillé, symbole simplifié, valeur selon le niveau, groupe d'appartenance et règles de reconnaissance. Les juges doivent maîtriser plus de 600 éléments avec leurs spécificités.</p>
                `
            },
            {
                type: 'images',
                title: 'Les 6 agrès de gymnastique artistique masculine',
                underlined: true,
                images: [
                    {
                        src: '/images/projects/gamfed/sol.webp',
                        alt: 'Agrès Sol - gymnastes réalisant des figures au sol',
                        caption: 'Sol : acrobaties et figures chorégraphiées'
                    },
                    {
                        src: '/images/projects/gamfed/saut.webp',
                        alt: 'Agrès Saut - gymnaste s\'élançant sur le cheval de saut',
                        caption: 'Saut : impulsion et figures aériennes'
                    },
                    {
                        src: '/images/projects/gamfed/paralleles.webp',
                        alt: 'Barres parallèles - gymnaste en équilibre',
                        caption: 'Barres parallèles : force et équilibre'
                    },
                    {
                        src: '/images/projects/gamfed/arcons.webp',
                        alt: 'Cheval d\'arçons - rotation des jambes',
                        caption: 'Cheval d\'arçons : rotations et cisseaux'
                    },
                    {
                        src: '/images/projects/gamfed/fixe.webp',
                        alt: 'Barre fixe - gymnaste en suspension',
                        caption: 'Barre fixe : élans et rotations'
                    },
                    {
                        src: '/images/projects/gamfed/anneaux.webp',
                        alt: 'Anneaux - gymnaste en force statique',
                        caption: 'Anneaux : force pure et maintiens'
                    }
                ]
            },
            {
                type: 'text',
                title: 'Architecture technique globale',
                underlined: true,
                content: `
                    <p>L'application s'appuie sur Room Database pour la persistance, RxJava pour la programmation réactive, et un système complexe de génération dynamique de questions. L'architecture modulaire permet de gérer 7 types de questions différents avec une base de données relationnelle avancée.</p>
                    <p>La base comprend deux parties distinctes : les données officielles FFGym (en lecture seule) et les statistiques utilisateur (préservées entre mises à jour). Le système utilise des métadonnées pour gérer le versioning et les migrations.</p>
                `
            },
            {
                type: 'text',
                title: 'Mes contributions principales',
                underlined: true,
                content: `
                    <h5>1. Système de statistiques multidimensionnel</h5>
                    <p>Développement complet du système de statistiques avec 4 vues d'analyse : historique des quiz, performance par agrès, par type de question et par niveau de qualification. Le système utilise un cache LRU optimisé pour les détails des quiz et propose des filtres temporels dynamiques.</p>
                `
            },
            {
                type: 'images',
                title: 'Interface du système de statistiques',
                underlined: false,
                images: [
                    {
                        src: '/images/projects/gamfed/app-stats1.webp',
                        alt: 'Écran d\'historique des quiz avec scores',
                        caption: 'Historique chronologique avec suppression de quiz'
                    },
                    {
                        src: '/images/projects/gamfed/app-stats2.webp',
                        alt: 'Analyse des performances par agrès',
                        caption: 'Statistiques par agrès avec détails expansibles'
                    },
                    {
                        src: '/images/projects/gamfed/app-stats3.webp',
                        alt: 'Performance par types de questions',
                        caption: 'Analyse par types de questions (pictogrammes, valeurs, etc.)'
                    },
                    {
                        src: '/images/projects/gamfed/app-stats4.webp',
                        alt: 'Performance par niveau de qualification',
                        caption: 'Analyse par niveau de qualification (Fédéral, National)'
                    }
                ]
            },
            {
                type: 'text',
                content: `
                    <h5>2. Pipeline d'extraction de données PDF</h5>
                    <p>Conception d'un pipeline d'extraction automatisée pour traiter les documents PDF officiels de la FFGym. Le projet comportait deux approches :</p>
                    
                    <p><strong>Approche manuelle</strong> : Extraction manuelle des données depuis les PDF vers des fichiers Excel, puis traitement par l'outil Populator Java. Cette méthode a été utilisée pour la version finale en raison de sa fiabilité.</p>
                    
                    <p><strong>Approche automatisée OCR</strong> : Développement d'un pipeline Python avec OpenCV pour la détection automatique des zones rectangulaires, conversion PDF vers PNG, et extraction OCR. Bien que non finalisée, cette approche pose les bases pour une automatisation future complète.</p>
                    
                    <p><strong>Défis techniques</strong> : L'extraction automatisée s'est révélée complexe car les documents ne sont pas structurés dans l'ordre de lecture, les images sont dispersées et parfois fragmentées. La détection automatique des tableaux nécessite un prétraitement complexe et une logique métier pour identifier les en-têtes et regrouper les éléments.</p>
                `
            },
            {
                type: 'text',
                content: `
                    <h5>3. Design et templates Figma</h5>
                    <p>Création de l'ensemble du design system de l'application avec Figma. Définition de la charte graphique, des composants réutilisables, et des parcours utilisateur complets. Les templates incluent tous les écrans avec leurs états (vide, chargement, erreur) et les animations de transition.</p>
                `
            },
            {
                type: 'images',
                title: 'Design system et templates Figma',
                underlined: false,
                images: [
                    {
                        src: '/images/projects/gamfed/figma-advanced-quiz.webp',
                        alt: 'Quiz avancé avec options de personnalisation',
                        caption: 'Interface de quiz avancé avec options de personnalisation'
                    },
                    {
                        src: '/images/projects/gamfed/figma-question1.webp',
                        alt: 'Interface de question type QCM',
                        caption: 'Design des questions à choix multiples'
                    },
                    {
                        src: '/images/projects/gamfed/figma-question2.webp',
                        alt: 'Interface de question alternative',
                        caption: 'Variante d\'affichage des questions'
                    },
                    {
                        src: '/images/projects/gamfed/figma-question3.webp',
                        alt: 'Interface de question avec interactions',
                        caption: 'Question interactive avec éléments visuels'
                    },
                    {
                        src: '/images/projects/gamfed/figma-question10.webp',
                        alt: 'Interface de question milestone',
                        caption: 'Question spéciale avec récompense'
                    },
                    {
                        src: '/images/projects/gamfed/figma-result.webp',
                        alt: 'Écran de résultats et score final',
                        caption: 'Affichage des résultats avec analytics'
                    },
                    {
                        src: '/images/projects/gamfed/figma-result-question1.webp',
                        alt: 'Détail des résultats par question',
                        caption: 'Visualisation des réponses par question'
                    },
                    {
                        src: '/images/projects/gamfed/figma-stats.webp',
                        alt: 'Dashboard de statistiques utilisateur',
                        caption: 'Tableau de bord avec métriques de performance'
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
        sources: [
            {
                name: "La Renaissance Gymnastique",
                url: "http://www.larenaissancegymnastique.fr",
                description: "Images des agrès de gymnastique artistique masculine"
            }, 
            {
                name: "Fédération Française de Gymnastique",
                url: "https://www.ffgym.com",
                description: "Règlements et documentation technique officielle"
            }
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