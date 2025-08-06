export const projectDetails = {
	'gamfed-quiz': {
		title: 'Application Android pour la Fédération de Gymnastique de Nouvelle-Aquitaine',
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
				title: "Interface de l'application",
				underlined: true,
				images: [
					{
						src: '/images/projects/gamfed/app-home.webp',
						alt: "Écran d'accueil de l'application avec options de quiz",
						caption: "Écran d'accueil avec options de quiz personnalisés"
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
						alt: 'Écran de résultats avec score',
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
						alt: 'Agrès Sol',
						caption: 'Sol : acrobaties et figures chorégraphiées'
					},
					{
						src: '/images/projects/gamfed/saut.webp',
						alt: 'Agrès Saut',
						caption: 'Saut : impulsion et figures aériennes'
					},
					{
						src: '/images/projects/gamfed/paralleles.webp',
						alt: 'Agrès Barres parallèles',
						caption: 'Barres parallèles : force et équilibre'
					},
					{
						src: '/images/projects/gamfed/arcons.webp',
						alt: "Agrès Cheval d'arçons",
						caption: "Cheval d'arçons : rotations et cisseaux"
					},
					{
						src: '/images/projects/gamfed/fixe.webp',
						alt: 'Agrès Barre fixe',
						caption: 'Barre fixe : élans et rotations'
					},
					{
						src: '/images/projects/gamfed/anneaux.webp',
						alt: 'Agrès Anneaux',
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
                    <h4>1. Système de statistiques multidimensionnel</h4>
                    <p>Développement complet du système de statistiques avec 4 vues d'analyse : historique des quiz, performance par agrès, par type de question et par niveau de qualification. Le système utilise un cache LRU optimisé pour les détails des quiz et propose des filtres temporels dynamiques.</p>
                `
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/gamfed/app-stats1.webp',
						alt: "Écran d'historique des quiz avec scores",
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
                    <h4>2. Pipeline d'extraction de données PDF</h4>
                    <p>Conception d'un pipeline d'extraction automatisée pour traiter les documents PDF officiels de la FFGym. Le projet comportait deux approches :</p>
                    
                    <p><strong>Approche manuelle</strong> : Extraction manuelle des données depuis les PDF vers des fichiers Excel, puis traitement par l'outil Populator Java. Cette méthode a été utilisée pour la version finale en raison de sa fiabilité.</p>
                    
                    <p><strong>Approche automatisée OCR</strong> : Développement d'un pipeline Python avec OpenCV pour la détection automatique des zones rectangulaires, conversion PDF vers PNG, et extraction OCR. Bien que non finalisée, cette approche pose les bases pour une automatisation future complète.</p>
                    
                    <p><strong>Défis techniques</strong> : L'extraction automatisée s'est révélée complexe car les documents ne sont pas structurés dans l'ordre de lecture, les images sont dispersées et parfois fragmentées. La détection automatique des tableaux nécessite un prétraitement complexe et une logique métier pour identifier les en-têtes et regrouper les éléments.</p>
                `
			},
			{
				type: 'text',
				content: `
                    <h4>3. Design et templates Figma</h4>
                    <p>Création de l'ensemble du design system de l'application avec Figma. Définition de la charte graphique. Les templates représentent les écrans principaux de l'application.</p>
                `
			},
			{
				type: 'images',
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
						caption: "Variante d'affichage des questions"
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
                    <h4>4. Modélisation de la base de données</h4>
                    <p>Participation à la conception du schéma Room Database avec gestion des métadonnées, versioning et migrations. La base comprend deux parties distinctes : les données officielles FFGym (en lecture seule) et les statistiques utilisateur (préservées entre mises à jour).</p>
                `
			}
		],
		sources: [
			{
				name: 'Université de Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Contexte académique et encadrement du projet'
			},
			{
				name: 'La Renaissance Gymnastique',
				url: 'http://www.larenaissancegymnastique.fr',
				description: 'Images des agrès de gymnastique artistique masculine'
			},
			{
				name: 'Fédération Française de Gymnastique',
				url: 'https://www.ffgym.com',
				description: 'Règlements et documentation technique officielle'
			}
		],
		downloads: [
			{
				title: 'Templates Figma',
				filename: 'GamFed - Ronan (Neopelta) PLUTA FONTAINE.fig',
				description:
					"Fichier Figma contenant l'ensemble des maquettes, composants et design system de l'application.",
				icon: '/images/logo/figma/figma-logo.svg'
			}
		]
	},
	skilltracker: {
		title: 'Plateforme Web de Suivi de Compétences avec Écosystème Discord',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Plateforme complète de gestion et visualisation des compétences développée en équipe de 3 étudiants en Master 1 Informatique à l'Université de Poitiers. Ce projet propose un écosystème complet combinant application web, bot Discord et API Google pour permettre aux étudiants de suivre et améliorer leurs compétences.</p>
				`
			},
			{
				type: 'text',
				title: 'Architecture complète du système',
				underlined: true,
				content: `
					<p>Le projet SkillTracker se compose de plusieurs composants principaux interconnectés :</p>
					<ul>
						<li><strong>Application Web React</strong> : Interface moderne avec authentification Discord OAuth2</li>
						<li><strong>Bot Discord</strong> : Interaction directe via commandes pour consulter et modifier les compétences</li>
						<li><strong>API Express.js</strong> : Backend robuste avec gestion des sessions et interface Google Sheets</li>
						<li><strong>Base de données</strong> : Google Sheets comme système de stockage avec API dédiée</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: "Interfaces de l'application web",
				underlined: true,
				images: [
					{
						src: '/images/projects/skilltracker/skillTracker-project.webp',
						alt: "Page d'accueil SkillTracker avec présentation des fonctionnalités",
						caption: "Page d'accueil avec description des fonctionnalités web et Discord"
					},
					{
						src: '/images/projects/skilltracker/skillTracker-project(skills).webp',
						alt: 'Tableau des compétences avec tous les étudiants',
						caption: 'Vue tableau complète avec navigation horizontale et recherche'
					},
					{
						src: '/images/projects/skilltracker/skillTracker-project(connect).webp',
						alt: 'Page de connexion Discord OAuth2',
						caption: 'Interface de connexion sécurisée via Discord'
					},
					{
						src: '/images/projects/skilltracker/skillTracker-project(fiche).webp',
						alt: 'Profil individuel avec édition des compétences',
						caption: 'Fiche personnelle avec système de modification en temps réel'
					}
				]
			},
			{
				type: 'text',
				title: 'Fonctionnalités principales',
				underlined: true,
				content: `
					<h4>Application Web</h4>
					<ul>
						<li>Authentification sécurisée via Discord OAuth2</li>
						<li>Tableau de bord interactif avec toutes les compétences étudiantes</li>
						<li>Recherche et filtrage par nom d'étudiant</li>
						<li>Système de permissions (administrateur/utilisateur)</li>
						<li>Interface responsive adaptée mobile et desktop</li>
					</ul>
					
					<h4>Bot Discord</h4>
					<ul>
						<li>Commandes prefix <code>mpf!</code> pour toutes les interactions</li>
						<li>Consultation des compétences via <code>mpf!skills</code></li>
						<li>Visualisation d'un profil spécifique avec <code>mpf!skill @user</code></li>
						<li>Modification rapide avec <code>mpf!updateskill [SKILL] [Value]</code></li>
						<li>Système de pagination pour les listes importantes</li>
						<li>Gestion des erreurs et validations des données</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Architecture technique avancée',
				underlined: true,
				content: `
					<p>L'architecture du projet suit une approche modulaire avec séparation claire des responsabilités :</p>
					
					<h4>Frontend (React + Vite)</h4>
					<p>Interface utilisateur développée avec React et build tool Vite pour des performances optimales. Utilisation de React Router pour la navigation, et Lucide React pour les icônes. L'application gère l'état d'authentification de manière globale et propose une expérience utilisateur fluide.</p>
					
					<h4>Backend (Express.js + Passport)</h4>
					<p>Serveur API robuste utilisant Express.js avec middleware Passport pour l'authentification Discord. Gestion des sessions sécurisées, validation des tokens et interface avec Google Sheets API. Architecture RESTful avec endpoints séparés pour les différentes fonctionnalités.</p>
					
					<h4>Bot Discord (Discord.js)</h4>
					<p>Bot autonome développé avec Discord.js v14, système de commandes modulaire et gestion d'événements. Partage la même base de données que l'application web pour assurer la cohérence des données.</p>
				`
			},
			{
				type: 'images',
				title: 'Interface administrative',
				underlined: true,
				images: [
					{
						src: '/images/projects/skilltracker/skillTracker-project(admin).webp',
						alt: 'Panel administrateur pour gestion des utilisateurs connectés',
						caption: 'Interface admin avec gestion des sessions et déconnexion forcée'
					}
				]
			},
			{
				type: 'text',
				title: 'Mes contributions principales',
				underlined: true,
				content: `
					<h4>1. Développement Frontend React</h4>
					<p>Conception et développement complet de l'interface utilisateur avec React. Création des composants réutilisables (Header, Footer, Template) et en atomic design, mise en place du routing avec React Router, et développement des pages principales (Accueil, Tableau des compétences, Profils individuels). Implémentation du système de recherche et filtrage en temps réel.</p>
					
					<h4>2. Système de Permissions et Rôles</h4>
					<p>Implémentation du système de permissions complexe permettant aux administrateurs de modifier toutes les fiches (sauf autres admins) et aux utilisateurs de modifier uniquement leur propre profil. Gestion des tokens de session et validation côté client et serveur.</p>
					
					<h4>3. Interface Responsive et UX</h4>
					<p>Conception d'une interface entièrement responsive adaptée aux appareils mobiles et desktop. Optimisation de l'affichage du tableau avec défilement horizontal pour les écrans étroits, ajout d'instructions contextuelles et amélioration de l'accessibilité générale.</p>
				`
			},
			{
				type: 'text',
				title: 'Défis techniques et solutions',
				underlined: true,
				content: `
					<h4>Gestion des Sessions Distribuées</h4>
					<p>La complexité principale résidait dans la synchronisation des sessions entre l'application web et le bot Discord. Solution implémentée : base de données MySQL centralisée pour les sessions avec système d'expiration automatique et validation des tokens en temps réel.</p>
					
					<h4>Permissions Granulaires</h4>
					<p>Mise en place d'un système de permissions complexe permettant différents niveaux d'accès. Les administrateurs peuvent gérer tous les utilisateurs mais ne peuvent pas modifier les comptes d'autres administrateurs, assurant ainsi une sécurité hiérarchique.</p>
					
					<h4>Interface Google Sheets</h4>
					<p>Intégration avec Google Sheets API nécessitant la gestion des credentials de service, authentification OAuth2 et synchronisation des données en temps réel entre l'application et la feuille de calcul partagée.</p>
				`
			},
			{
				type: 'text',
				title: 'Technologies et outils utilisés',
				underlined: true,
				content: `
					<h4>Frontend</h4>
					<ul>
						<li><strong>React 18</strong> : Framework principal avec hooks modernes</li>
						<li><strong>Vite</strong> : Build tool pour développement rapide</li>
						<li><strong>React Router</strong> : Navigation et routing</li>
						<li><strong>Lucide React</strong> : Icônes SVG optimisées</li>
						<li><strong>CSS natif</strong> : Styles personnalisés sans framework</li>
					</ul>
					
					<h4>Backend</h4>
					<ul>
						<li><strong>Express.js</strong> : Framework web Node.js</li>
						<li><strong>Passport.js</strong> : Middleware d'authentification</li>
						<li><strong>MySQL2</strong> : Driver base de données</li>
						<li><strong>Google APIs</strong> : Interface Google Sheets</li>
						<li><strong>Discord.js v14</strong> : Wrapper API Discord</li>
					</ul>
					
					<h4>Outils et Infrastructure</h4>
					<ul>
						<li><strong>Google Cloud Console</strong> : Gestion des APIs</li>
						<li><strong>Discord Developer Portal</strong> : Configuration bot</li>
						<li><strong>ESLint</strong> : Linting et qualité de code</li>
						<li><strong>Dotenv</strong> : Gestion des variables d'environnement</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Collaboration et méthodologie',
				underlined: true,
				content: `
					<p>Projet développé en équipe de 3 personnes avec répartition claire des responsabilités :</p>
					<ul>
						<li><strong>Maxime M.</strong> : Backend API, infrastructure serveur et base de données</li>
						<li><strong>Ronan PLUTA FONTAINE</strong> : Frontend React, intégration API et design UX/UI</li>
						<li><strong>Victor F.</strong> : Bot Discord, commandes et intégration base de données</li>
					</ul>
					
					<p>Méthodologie agile avec cycles de développement courts, tests continus et intégration progressive des fonctionnalités. Utilisation de Git pour le versioning avec branches feature et revues de code collectives.</p>
				`
			}
		],
		sources: [
			{
				name: 'Université de Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Contexte académique et encadrement du projet'
			},
			{
				name: 'Discord Developer Portal',
				url: 'https://discord.com/developers/applications',
				description: 'Configuration OAuth2 et bot Discord'
			},
			{
				name: 'Google Cloud Console',
				url: 'https://console.cloud.google.com',
				description: 'Configuration Google Sheets API et service accounts'
			},
			{
				name: 'Site web SkillTracker',
				url: 'https://aaw.univportfolio.info',
				description: 'Application web en ligne accessible publiquement'
			}
		]
	},
	'polysyllogism-validator': {
		title: 'Outil Pédagogique de Validation de Raisonnements Logiques',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Application Web éducative développée en équipe de 5 étudiants en Master 1 Informatique à l'Université de Poitiers. Ce projet vise à moderniser l'apprentissage de la logique formelle en proposant un outil interactif pour valider des syllogismes et polysyllogismes, destiné principalement aux étudiants de première année universitaire.</p>
				`
			},
			{
				type: 'text',
				title: 'Architecture et fonctionnalités principales',
				underlined: true,
				content: `
					<p>L'application propose une approche pédagogique complète pour l'apprentissage des syllogismes :</p>
					<ul>
						<li><strong>Mode Guidé</strong> : Interface step-by-step pour construire des syllogismes classiques à deux prémisses</li>
						<li><strong>Mode Libre</strong> : Création de polysyllogismes complexes avec ajout dynamique de prémisses</li>
						<li><strong>Système de validation</strong> : Vérification basée sur 8 règles logiques fondamentales</li>
						<li><strong>Éditeur de quantificateurs</strong> : Personnalisation des quantificateurs logiques avec persistance</li>
						<li><strong>Générateur exhaustif</strong> : Calcul et affichage des 256 combinaisons possibles de syllogismes</li>
						<li><strong>Support multilingue</strong> : Interface disponible en français et anglais</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Interfaces des modes de validation',
				underlined: true,
				images: [
					{
						src: '/images/projects/polysyllogism/syllogisme-project(guide).webp',
						alt: 'Mode guidé avec construction étape par étape de syllogismes',
						caption: 'Mode guidé : construction progressive avec aide contextuelle'
					},
					{
						src: '/images/projects/polysyllogism/syllogisme-project(libre).webp',
						alt: 'Mode libre pour polysyllogismes complexes',
						caption: 'Mode libre : création de polysyllogismes avec prémisses multiples'
					},
					{
						src: '/images/projects/polysyllogism/syllogisme-project(edit).webp',
						alt: 'Éditeur de quantificateurs personnalisés',
						caption: 'Éditeur : gestion des quantificateurs par catégorie logique'
					},
					{
						src: '/images/projects/polysyllogism/syllogisme-project(gen).webp',
						alt: 'Générateur des 256 combinaisons de syllogismes',
						caption: 'Générateur : tableau exhaustif avec validation règle par règle'
					}
				]
			},
			{
				type: 'text',
				title: 'Fondements théoriques et règles logiques',
				underlined: true,
				content: `
					<p>L'application implémente un système de validation basé sur les 8 règles fondamentales de la logique syllogistique :</p>
					
					<h4>Règles structurelles</h4>
					<ul>
						<li><strong>Rmt (Middle Term Rule)</strong> : Le moyen terme doit être distribué au moins une fois</li>
						<li><strong>Rp (Premise Rule)</strong> : Validation de la cohérence des prémisses</li>
						<li><strong>Rlh (Hypothesis Linking Rule)</strong> : La conclusion ne peut excéder les prémisses</li>
					</ul>
					
					<h4>Règles de qualité</h4>
					<ul>
						<li><strong>Rnn (Non-Negativity Rule)</strong> : Interdiction de deux prémisses négatives</li>
						<li><strong>Rn (Negativity Rule)</strong> : Propagation de la négativité vers la conclusion</li>
						<li><strong>Rpp (Positive Premise Rule)</strong> : Cohérence des conclusions positives</li>
					</ul>
					
					<h4>Règles de quantité</h4>
					<ul>
						<li><strong>Raa (Affirmation-Affirmation Rule)</strong> : Limitation des prémisses particulières</li>
						<li><strong>Ruu (Hypothesis of Existence)</strong> : Vérification de l'existence des termes</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Architecture technique et implémentation',
				underlined: true,
				content: `
					<p>Le projet s'appuie sur une architecture modulaire en TypeScript privilégiant la séparation des préoccupations :</p>
					
					<h4>Couche logique métier</h4>
					<p>Implémentation des classes <code>Type</code>, <code>Proposition</code> et <code>Polysyllogism</code> pour modéliser les structures logiques. Le système de types garantit la cohérence des propositions (A, E, I, O) selon la classification aristotélicienne.</p>
					
					<h4>Moteur de validation</h4>
					<p>La classe <code>ValidityChecker</code> orchestre l'application des règles logiques de manière configurable. Chaque règle peut être activée/désactivée individuellement pour des scénarios pédagogiques spécifiques.</p>
					
					<h4>Interface utilisateur adaptive</h4>
					<p>Système de formulaires dynamiques avec génération de prémisses à la volée, gestion des relations entre termes et validation en temps réel. Support du mode sombre et internationalisation complète.</p>
				`
			},
			{
				type: 'text',
				title: 'Mes contributions principales',
				underlined: true,
				content: `
					<h4>1. Développement du front-end interactif</h4>
					<p>Conception et implémentation complète des formulaires interactifs pour les deux modes d'utilisation. Développement du système de création dynamique de prémisses en Mode Libre, avec gestion des relations logiques entre termes et interface responsive.</p>
					
					<h4>2. Logique de parsing des polysyllogismes</h4>
					<p>Implémentation de l'algorithme de validation structurelle des polysyllogismes dans la méthode <code>checkStructure()</code>. Cette fonction vérifie la cohérence des termes, détecte les relations logiques et réorganise automatiquement les propositions dans l'ordre canonique.</p>
					
					<h4>3. Système de gestion des quantificateurs</h4>
					<p>Développement complet de l'éditeur de quantificateurs personnalisés avec persistance localStorage, catégorisation par type logique (universel/existentiel, positif/négatif) et intégration seamless dans les formulaires principaux.</p>
					
					<h4>4. Interface de visualisation des combinaisons</h4>
					<p>En équipe, création du générateur exhaustif affichant les 256 combinaisons possibles de syllogismes avec validation règle par règle. Interface tabulaire avec codage couleur pour identifier rapidement les syllogismes valides/invalides selon les règles sélectionnées.</p>
				`
			},
			{
				type: 'text',
				title: 'Défis techniques et solutions',
				underlined: true,
				content: `
					<h4>Gestion des états complexes</h4>
					<p>L'interface du Mode Libre nécessitait une gestion sophistiquée des états avec des formulaires dynamiques interdépendants. Implementation d'un système de binding bi-directionnel entre les sélections utilisateur et les options disponibles.</p>
				`
			},
			{
				type: 'text',
				title: 'Méthodologie et collaboration',
				underlined: true,
				content: `
					<p>Projet développé en équipe de 5 personnes sur 3 mois avec une approche agile :</p>
					<ul>
						<li><strong>Architecture modulaire</strong> : Séparation claire entre logique métier, validation et interface</li>
						<li><strong>Tests automatisés</strong> : Suite de tests Jest couvrant 256 cas de test avec fichier Excel de référence</li>
						<li><strong>Documentation technique</strong> : Génération automatique avec TypeDoc</li>
					</ul>
					
					<p>Ma contribution principale s'est concentrée sur l'interface utilisateur et la logique de parsing, en étroite collaboration avec l'équipe pour assurer la cohérence de l'architecture globale.</p>
				`
			}
		],
		sources: [
			{
				name: 'Université de Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Contexte académique et encadrement du projet'
			},
			{
				name: 'Repository GitHub',
				url: 'https://github.com/Neopelta/polysyllogisme.git',
				description: 'Code source complet avec documentation technique'
			},
			{
				name: 'Wikipédia - Syllogisme',
				url: 'https://fr.wikipedia.org/wiki/Syllogisme',
				description: 'Définition et théorie des syllogismes'
			},
			{
				name: 'Wikipédia - Polysyllogisme',
				url: 'https://fr.wikipedia.org/wiki/Polysyllogisme',
				description: 'Définition et théorie des polysyllogismes'
			}
		]
	},
	'sudoku-solver': {
		title: 'Solveur de Sudoku Avancé avec Techniques de Résolution Humaines',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Solveur de Sudoku développé en langage C dans le cadre d'un projet académique de Licence 3 Informatique à l'Université de Poitiers. Conçu en équipe de 4 étudiants, ce projet combine approche pédagogique et techniques avancées de résolution algorithmique.</p>
				`
			},
			{
				type: 'text',
				title: 'Objectif et contexte académique',
				underlined: true,
				content: `
					<p>Le projet s'inscrit dans le module de préprofessionnalisation visant à développer les compétences en travail d'équipe, gestion de projet et programmation avancée. L'objectif principal était de créer un solveur capable de résoudre automatiquement des grilles de Sudoku de différentes tailles (9x9, 16x16, 25x25) en appliquant les techniques de résolution utilisées par les humains avant de recourir au backtracking.</p>
					
					<p><strong>Contraintes techniques :</strong></p>
					<ul>
						<li>Implémentation en langage C pour optimiser les performances</li>
						<li>Architecture modulaire avec séparation claire des responsabilités</li>
						<li>Support des grilles de tailles variables</li>
						<li>Respect du minimum de 17 cases pré-remplies pour garantir une solution unique pour une grille 9x9</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Structures de données optimisées',
				underlined: true,
				content: `
					<p>Chaque cellule du Sudoku est représentée par une structure contenant sa valeur et un entier représentant les notes possibles via manipulation binaire. Cette approche permet une gestion efficace de la mémoire et des opérations sur les candidats.</p>
				`
			},
			{
				type: 'text',
				title: 'Techniques de résolution implémentées',
				underlined: true,
				content: `
					<p>Le solveur implémente une hiérarchie de techniques de résolution, des plus simples aux plus complexes :</p>
					
					<h4>1. Méthode des Singletons</h4>
					<p>Détection automatique des cellules ne possédant qu'un seul candidat possible. Cette technique de base permet de résoudre rapidement les parties évidentes du puzzle.</p>
					
					<h4>2. K-uplets généralisés (Naked et Hidden Subsets)</h4>
					<p>Algorithme unifié couvrant les paires, triplets et k-uplets jusqu'à 9 éléments. Détecte automatiquement les groupes de cellules partageant le même ensemble de candidats pour éliminer les possibilités ailleurs.</p>
					
					<h4>3. Intersections lignes/colonnes/blocs (Pointing et Claiming)</h4>
					<p>Analyse des intersections entre blocs et lignes/colonnes pour identifier les candidats contraints à certaines positions, permettant l'élimination de candidats dans les zones adjacentes.</p>
					
					<h4>4. Pattern X-Wing</h4>
					<p>Détection du motif X-Wing sur deux lignes ou colonnes parallèles, créant un pattern en diagonale qui permet d'éliminer les candidats dans les colonnes ou lignes concernées.</p>
					
					<h4>5. Backtracking</h4>
					<p>Algorithme de derniers recours utilisant l'exploration exhaustive avec retour en arrière pour les grilles que les techniques humaines ne peuvent résoudre complètement.</p>
				`
			},
			{
				type: 'text',
				title: 'Orchestration et algorithme principal',
				underlined: true,
				content: `
					<p>Le solveur suit un flux d'exécution optimisé appliquant les techniques dans l'ordre de complexité croissante :</p>
					
					<h4><strong>1. Initialisation des notes</strong></h4> 
					<p>Calcul des candidats possibles pour chaque cellule vide</p>

					<h4><strong>2. Singleton Method</strong></h4> 
					<p>Résolution des cellules évidentes</p>

					<h4><strong>3. Boucle K-uplets</strong></h4> 
					<p>Application des k-uplets pour k=1 à 9</p>

					<h4><strong>4. Réductions d'intersections</strong></h4> 
					<p>Analyse des contraintes bloc/ligne/colonne</p>

					<h4><strong>5. X-Wing</strong></h4> 
					<p>Recherche de patterns avancés</p>

					<h4><strong>6. Backtracking</strong></h4> 
					<p>Solution de dernier recours si aucune technique humaine ne progresse</p>
					
					<p>Cette approche garantit une résolution efficace : les techniques rapides résolvent la majorité des cas, et le backtracking n'intervient que pour les grilles les plus complexes.</p>
				`
			},
			{
				type: 'text',
				title: 'Mes contributions principales',
				underlined: true,
				content: `
					<h4>1. Architecture modulaire et structure du projet</h4>
					<p>Conception de l'architecture générale du projet avec séparation claire des responsabilités. Définition des interfaces entre modules et standardisation des conventions de codage pour faciliter le travail en équipe.</p>
					
					<h4>2. Système de gestion des notes optimisé</h4>
					<p>Implémentation du système de manipulation binaire des candidats permettant des opérations rapides sur les notes. Développement des fonctions de base (setnote, getnote) et du système de comptage pré-calculé des bits pour optimiser les performances.</p>
					
					<h4>3. Algorithmes k-uplets généralisés</h4>
					<p>Conception et implémentation de l'algorithme unifié pour détecter les k-uplets nus et cachés. Utilisation de la génération de combinaisons et du coefficient binomial pour explorer systématiquement tous les groupes possibles.</p>
					
					<h4>4. Fonctions utilitaires et débogage</h4>
					<p>Développement des outils d'affichage et de débogage permettant de visualiser l'état des notes et de suivre la progression des algorithmes. Ces outils ont été essentiels pour valider le bon fonctionnement des techniques complexes.</p>
				`
			},
			{
				type: 'text',
				title: 'Défis techniques et optimisations',
				underlined: true,
				content: `
					<h4>Manipulation binaire avancée</h4>
					<p>L'utilisation d'entiers pour représenter les notes nécessitait une maîtrise des opérations bit-à-bit. Nous avons développé un système de pré-calcul des comptages de bits et des fonctions optimisées pour les opérations fréquentes.</p>
					
					<h4>Intégration des techniques de résolution</h4>
					<p>La difficulté principale était de créer une architecture permettant l'ajout facile de nouvelles techniques tout en maintenant l'efficacité. Nous avons opté pour une approche modulaire où chaque technique retourne le nombre de modifications effectuées.</p>
					`
			},
			{
				type: 'text',
				title: "Méthodologie et organisation d'équipe",
				underlined: true,
				content: `
					<p>Le projet a été mené selon une méthodologie agile adaptée au contexte académique :</p>
					
					<h4>Organisation de l'équipe</h4>
					<ul>
						<li><strong>Maxime MARCHIVE</strong> : Algorithmes complexes </li>
						<li><strong>Ronan PLUTA FONTAINE</strong> : Chef d'équipe, architecture technique et k-uplets</li>
						<li><strong>Raphaël SIMON</strong> : Algorithmes de base</li>
						<li><strong>Diewertje VAN DAM</strong> : Algorithmes de base</li>
					</ul>
					
					<h4>Outils et processus</h4>
					<ul>
						<li><strong>Contrôle de version</strong> : Git </li>
						<li><strong>Documentation</strong> : Rédaction en LaTeX pour un rendu professionnel</li>
						<li><strong>Cycles itératifs</strong> : Développement par sprints avec livrables fonctionnels</li>
						<li><strong>Tests continus</strong> : Validation sur grilles de référence à chaque itération</li>
					</ul>
					
					<h4>Jalons du projet</h4>
					<p>Le projet s'est déroulé de septembre 2023 à avril 2024 avec des jalons clairs : cahier des charges (novembre), rapport d'avancement (janvier), et soutenance finale en anglais (mars-avril).</p>
				`
			},
			{
				type: 'text',
				title: 'Résultats et performances',
				underlined: true,
				content: `
					<p>Le solveur final présente d'excellentes performances sur l'ensemble des tailles de grilles testées :</p>
					
					<h4>Efficacité des techniques</h4>
					<ul>
						<li><strong>Grilles faciles à moyennes (9x9)</strong> : Résolues uniquement par les techniques humaines en < 1ms</li>
						<li><strong>Grilles difficiles</strong> : Combinaison techniques + backtracking limité</li>
						<li><strong>Grilles 16x16 et 25x25</strong> : Gestion efficace grâce aux optimisations algorithmiques</li>
					</ul>
					
					<h4>Robustesse et fiabilité</h4>
					<p>Validation sur grilles de référence connues, et respect des contraintes de validité (minimum 17 cases pour grilles 9x9).</p>
					
					<h4>Extensibilité</h4>
					<p>Architecture modulaire permettant l'ajout facile de nouvelles techniques (Swordfish, Y-Wing, etc.) sans modification du code existant. Base solide pour des extensions futures.</p>
				`
			}
		],
		sources: [
			{
				name: 'Université de Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Contexte académique et encadrement du projet'
			},
			{
				name: 'GitHub Repository',
				url: 'https://github.com/Neopelta/sudoku-solver.git',
				description: 'Code source complet du projet avec documentation'
			},
			{
				name: 'Sudoku.com Rules',
				url: 'https://sudoku.com/sudoku-rules',
				description: 'Référence des règles et techniques de résolution du Sudoku'
			},
			{
				name: 'Gordon Royle Research',
				url: 'https://staffhome.ecm.uwa.edu.au/~00013890/sudoku.html',
				description: 'Recherches sur le minimum de 17 cases pour grilles 9x9'
			}
		],
		downloads: [
			{
				title: 'Méthode de résolution de Sudoku',
				filename: 'FR_SUDOKU_methods.pdf',
				description: 'Document PDF détaillant les méthodes de résolution de Sudoku possible.',
				icon: '/images/logo/pdf/pdf-logo.svg'
			}
		]
	},
	'station-meteo': {
		title: 'Station Météo Connectée BLE - Système IoT Embarqué',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Station météorologique IoT complète développée en binôme dans le cadre d'un projet BLE & Capteurs à l'Université de Poitiers. Ce système embarqué acquisition, traite et transmet des données environnementales (température, humidité, pression atmosphérique) via deux modes de communication : liaison série USB et Bluetooth Low Energy vers une interface graphique Qt temps réel.</p>
				`
			},
			{
				type: 'text',
				title: 'Architecture du système',
				underlined: true,
				content: `
					<p>Le système repose sur une architecture modulaire combinant hardware et software avec un flux de données optimisé :</p>
					<ul>
						<li><strong>Couche capteurs</strong> : Acquisition des mesures environnementales via protocole I2C</li>
						<li><strong>Couche traitement</strong> : STM32L476RG pour traitement temps réel et formatage des données</li>
						<li><strong>Couche communication</strong> : Double transmission série (USB) et sans fil (BLE)</li>
						<li><strong>Couche visualisation</strong> : Application Qt avec graphiques temps réel et interface responsive</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Architecture et flux de données',
				underlined: true,
				images: [
					{
						src: '/images/projects/station-meteo/flux_donnees.webp',
						alt: 'Diagramme du flux de données du système',
						caption: "Architecture complète : des capteurs vers l'interface de visualisation"
					},
					{
						src: '/images/projects/station-meteo/schema_pressure.webp',
						alt: 'Schéma technique du capteur de pression LPS22HH',
						caption: 'Schéma électronique détaillé du capteur de pression'
					},
					{
						src: '/images/projects/station-meteo/schema_humidity_temp.webp',
						alt: 'Schéma technique du capteur température/humidité HTS221',
						caption: 'Architecture interne des capteurs température et humidité'
					}
				]
			},
			{
				type: 'text',
				title: 'Matériel et composants techniques',
				underlined: true,
				content: `
					<p>Le projet s'appuie sur un écosystème STMicroelectronics :</p>
					
					<h4>Microcontrôleur principal</h4>
					<ul>
						<li><strong>STM32L476RG Nucleo</strong> : Cortex-M4 80MHz, 1MB Flash, 128KB SRAM</li>
						<li>Périphériques intégrés : I2C, SPI, UART, Timer, EXTI</li>
						<li>Optimisé pour applications IoT basse consommation</li>
					</ul>
					
					<h4>Shield capteurs environnementaux</h4>
					<ul>
						<li><strong>X-NUCLEO-IKS01A3</strong> : Plateforme multi-capteurs MEMS</li>
						<li><strong>HTS221</strong> : Température (-40°C/+85°C) et humidité relative (0-100%)</li>
						<li><strong>LPS22HH</strong> : Pression barométrique (260-1260 hPa)</li>
						<li>Communication I2C avec adressage automatique</li>
					</ul>
					
					<h4>Module de communication sans fil</h4>
					<ul>
						<li><strong>X-NUCLEO-BNRG2A1</strong> : Module Bluetooth Low Energy BlueNRG-2</li>
						<li>Protocole GATT/ATT pour transmission structurée</li>
						<li>Portée 10m, consommation optimisée</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Composants matériels du système',
				underlined: true,
				images: [
					{
						src: '/images/projects/station-meteo/L476RG.webp',
						alt: 'Carte STM32L476RG Nucleo avec microcontrôleur ARM',
						caption: 'STM32L476RG Nucleo : cœur du système embarqué'
					},
					{
						src: '/images/projects/station-meteo/IKS01A3.webp',
						alt: 'Shield X-NUCLEO-IKS01A3 avec capteurs MEMS',
						caption: 'X-NUCLEO-IKS01A3 : plateforme capteurs environnementaux'
					},
					{
						src: '/images/projects/station-meteo/BNRG2A1.webp',
						alt: 'Module X-NUCLEO-BNRG2A1 Bluetooth Low Energy',
						caption: 'X-NUCLEO-BNRG2A1 : communication BLE professionnelle'
					}
				]
			},
			{
				type: 'text',
				title: 'Défis techniques et solutions de montage',
				underlined: true,
				content: `
					<p>Le projet présentait un défi majeur d'incompatibilité matérielle entre les shields X-NUCLEO-IKS01A3 et X-NUCLEO-BNRG2A1, conçus pour être empilés mais présentant des conflits électriques.</p>
					
					<h4>Problématique identifiée</h4>
					<ul>
						<li>Conflits de broches entre les deux shields expansion</li>
						<li>Incompatibilités électriques au niveau des signaux de contrôle</li>
						<li>Impossibilité d'empilage direct selon la documentation</li>
					</ul>
					
					<h4>Solution technique implémentée</h4>
					<ul>
						<li><strong>Montage hybride</strong> : Shield BLE empilé + capteurs en connexion filaire</li>
						<li><strong>Isolement électrique</strong> : Contrôle précis des connexions actives</li>
						<li><strong>Routage manuel</strong> : Câblage point-à-point des signaux I2C critiques</li>
						<li><strong>Validation électrique</strong> : Tests de continuité et absence de court-circuits</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Montage final et solutions techniques',
				underlined: true,
				images: [
					{
						src: '/images/projects/station-meteo/montage_station-meteo.webp',
						alt: 'Station météo assemblée avec montage hybride des cartes',
						caption: 'Montage final : solution hybride pour résoudre les incompatibilités'
					},
					{
						src: '/images/projects/station-meteo/montage_fils_1.webp',
						alt: 'Détail des connexions filaires entre les shields',
						caption:
							'Connexions filaires sur la carte "X-NUCLEO-IKS01A3" pour isoler les conflits électriques'
					},
					{
						src: '/images/projects/station-meteo/montage_fils_2.webp',
						alt: "Vue d'ensemble du câblage manuel réalisé",
						caption:
							'Routage manuel sur le "shield", elle même sur le "STM32L476RG Nucleo", pour les signaux I2C et alimentation'
					}
				]
			},
			{
				type: 'text',
				title: 'Développement de la partie embarquée STM32',
				underlined: true,
				content: `
					<p>La partie embarquée constitue le cœur technique du projet, développée avec STM32CubeIDE et les bibliothèques HAL :</p>
					
					<h4>Architecture logicielle modulaire</h4>
					<ul>
						<li><strong>Couche d'abstraction matérielle</strong> : Drivers HAL pour périphériques</li>
						<li><strong>Gestionnaire de capteurs</strong> : Abstraction des protocoles I2C spécifiques</li>
						<li><strong>Module de communication</strong> : Routines série et BLE unifiées</li>
						<li><strong>Planificateur temps réel</strong> : Timer système pour acquisition périodique (10s)</li>
					</ul>
					
					<h4>Protocole de communication BLE optimisé</h4>
					<p>Implémentation d'un protocole GATT personnalisé pour transmission efficace :</p>
					<ul>
						<li><strong>Structure de données compacte</strong> : 10 octets (timestamp 2B + pression 4B + température 2B + humidité 2B)</li>
						<li><strong>Endianness gérée</strong> : Conversion automatique pour compatibilité multi-plateformes</li>
						<li><strong>Service GATT dédié</strong> : Caractéristique environnementale avec notification</li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/activation_bits.webp',
						alt: 'Diagramme de la structure des données BLE transmises',
						caption: 'Structure optimisée des données BLE : 10 octets pour efficacité maximale'
					}
				]
			},
			{
				type: 'text',
				title: 'Application Qt : Interface utilisateur professionnelle',
				underlined: true,
				content: `
					<p>Interface desktop moderne développée avec Qt 6.8.3 et architecture MVC :</p>
					
					<h4>Architecture logicielle Qt</h4>
					<ul>
						<li><strong>Build system CMake</strong> : Compilation cross-platform</li>
						<li><strong>Modules Qt spécialisés</strong> : SerialPort, Bluetooth, Widgets</li>
						<li><strong>QCustomPlot</strong> : Bibliothèque de graphiques temps réel</li>
						<li><strong>Gestion d'état réactive</strong> : Mise à jour automatique des vues</li>
					</ul>
					
					<h4>Fonctionnalités interface utilisateur</h4>
					<ul>
						<li><strong>Mode de connexion dual</strong> : Port série (USB) et Bluetooth LE au choix</li>
						<li><strong>Visualisation temps réel</strong> : Graphiques animés avec historique</li>
						<li><strong>Dashboard textuel</strong> : Affichage numérique précis avec unités</li>
						<li><strong>Configuration avancée</strong> : Scan BLE, sélection ports COM</li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/qt_donnees_textuelles.webp',
						alt: 'Interface Qt affichant les données numériques en temps réel',
						caption: 'Onglet données textuelles : valeurs instantanées avec unités physiques'
					},
					{
						src: '/images/projects/station-meteo/qt_graphique.webp',
						alt: 'Graphiques temps réel des trois paramètres environnementaux',
						caption: 'Visualisation graphique : évolution temporelle des mesures'
					},
					{
						src: '/images/projects/station-meteo/qt_config_port_serie.webp',
						alt: 'Configuration de la connexion port série',
						caption: 'Configuration série : sélection automatique des ports disponibles'
					},
					{
						src: '/images/projects/station-meteo/qt_config_bluetooth.webp',
						alt: 'Configuration Bluetooth avec scan des périphériques BLE',
						caption: 'Configuration Bluetooth : scan automatique et connexion BLE'
					}
				]
			},
			{
				type: 'text',
				title: 'Mes contributions techniques principales',
				underlined: true,
				content: `
					<h4>1. Architecture système et conception globale</h4>
					<p>Définition de l'architecture complète du projet avec mon binôme, depuis la spécification des protocoles de communication jusqu'à l'interface utilisateur finale.</p>
					
					<h4>2. Résolution des incompatibilités matérielles</h4>
					<p>Analyse des conflits entre shields et conception de la solution de montage hybride. Identification des signaux critiques, conception du câblage manuel et validation électrique complète du système.</p>
					
					<h4>3. Développement de l'interface Qt avancée</h4>
					<p>Implémentation complète de l'application desktop avec mon binôme, gestion des deux modes de communication. Développement du système de graphiques temps réel avec QCustomPlot, interface responsive et gestion des erreurs de communication.</p>
				`
			},
			{
				type: 'text',
				title: 'Validation et tests',
				underlined: true,
				content: `
					<p>Validation du système avec les outils officiels STMicroelectronics :</p>
					
					<h4>Application ST BLE Sensor</h4>
					<ul>
						<li><strong>Reconnaissance automatique</strong> : Le système est détecté</li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/app_STBLE_sensor_classic.webp',
						alt: 'Application mobile ST BLE Sensor affichant nos données',
						caption:
							"Reconnaissance du montage dans l'application ST BLE Sensor : affichage des données environnementales"
					}
				]
			},
			{
				type: 'text',
				title: 'Technologies et outils de développement',
				underlined: true,
				content: `
					<h4>Partie Embarquée</h4>
					<ul>
						<li><strong>STM32CubeIDE</strong> : Environnement de développement intégré Eclipse</li>
						<li><strong>STM32CubeMX</strong> : Configurateur graphique de périphériques</li>
						<li><strong>HAL Libraries</strong> : Abstraction matérielle STMicroelectronics</li>
					</ul>
					
					<h4>Application Desktop</h4>
					<ul>
						<li><strong>Qt 6.8.3</strong> : Framework cross-platform</li>
						<li><strong>CMake</strong> : Système de build</li>
						<li><strong>QCustomPlot</strong> : Bibliothèque de graphiques</li>
						<li><strong>QtBluetooth & QtSerialPort</strong> : Modules de communication</li>
					</ul>
					
					<h4>Outils et Méthodologie</h4>
					<ul>
						<li><strong>Git</strong> : Contrôle de version avec branches feature</li>
						<li><strong>Qt Creator 16</strong></li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/logo_qt.webp',
						alt: 'Logo Qt Framework',
						caption: 'Qt 6.8.3 : Framework moderne pour interface desktop'
					},
					{
						src: '/images/projects/station-meteo/logo_st.webp',
						alt: 'Logo STMicroelectronics',
						caption: 'STMicroelectronics : Écosystème embarqué professionnel'
					}
				]
			},
			{
				type: 'text',
				title: 'Résultats et impact pédagogique',
				underlined: true,
				content: `
					<p>Ce projet représente une réalisation technique complète combinant hardware, software embarqué et interface utilisateur :</p>
					
					<h4>Réalisations techniques</h4>
					<ul>
						<li><strong>Système IoT fonctionnel</strong> : Acquisition, traitement et transmission temps réel</li>
						<li><strong>Communication dual-mode</strong> : Flexibilité d'usage série et sans fil</li>
						<li><strong>Interface</strong> : Application desktop avec graphiques temps réel</li>
					</ul>
					
					<h4>Compétences développées</h4>
					<ul>
						<li><strong>Programmation embarquée</strong> : STM32, protocoles I2C/SPI, temps réel</li>
						<li><strong>Développement d'interfaces</strong> : Qt, MVC, expérience utilisateur</li>
						<li><strong>Résolution de problèmes</strong> : Debugging hardware, analyse de conflits</li>
					</ul>
					
					<h4>Perspective d'évolution</h4>
					<p>Base solide pour extensions futures : ajout de capteurs, stockage de données, interfaces web, ou déploiement en réseau de capteurs distribués.</p>
				`
			}
		],
		sources: [
			{
				name: 'Université de Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Contexte académique - Projet BLE & Capteurs Master 1'
			},
			{
				name: 'STMicroelectronics Developer Zone',
				url: 'https://www.st.com/en/development-tools.html',
				description: 'Documentation technique STM32 et shields X-NUCLEO'
			},
			{
				name: 'Qt Documentation',
				url: 'https://doc.qt.io/',
				description: 'Documentation officielle Qt 6.8.3 et modules'
			},
			{
				name: 'Repository GitHub',
				url: 'https://github.com/Neopelta/station-meteo',
				description: 'Code source complet avec documentation technique'
			},
			{
				name: 'ST BLE Sensor App',
				url: 'https://www.st.com/en/embedded-software/stblesensor.html',
				description: 'Application officielle de validation Bluetooth LE'
			}
		]
	},
	portfolio: {
		title: 'Portfolio Personnel - Site Web Moderne et Performant',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Ce portfolio répond à un besoin concret : disposer d'une vitrine professionnelle qui présente mes projets. Plutôt que d'utiliser une solution existante, j'ai choisi de développer mon propre site - une approche qui permet de montrer mes compétences en développement web.</p>
					
					<p>Le projet évolue constamment, me permettant d'expérimenter avec de nouvelles technologies et d'affiner mes pratiques de développement au fil des apprentissages.</p>
				`
			},
			{
				type: 'text',
				title: 'Choix technique : SvelteKit',
				underlined: true,
				content: `
					<p>La découverte de SvelteKit s'est faite suite à une recommandation de mon frère, qui m'a montré <a href="https://anotherpp.vercel.app/" target="_blank" rel="noopener">une application de poker planning</a> développée avec cette technologie. L'interface performante et la fluidité de l'expérience utilisateur m'ont convaincu d'approfondir le sujet.</p>
					
					<p>SvelteKit propose une approche innovante : compiler le code à la construction plutôt que d'embarquer un framework lourd côté client. Cette philosophie correspond parfaitement aux enjeux de performance et d'éco-conception qui me tiennent à cœur.</p>
					
					<p>Le résultat ? Un site générant du JavaScript vanilla optimisé, sans surcharge de runtime.</p>
				`
			},
			{
				type: 'text',
				title: 'Architecture et déploiement',
				underlined: true,
				content: `
					<p>L'architecture retenue s'appuie sur une génération statique avec l'adapter-static de SvelteKit. Le site devient un ensemble de fichiers HTML/CSS/JS hébergés sur un serveur Apache chez OVH, une approche qui garantit fiabilité et performances optimales.</p>
					
					<p>Cette solution présente plusieurs avantages techniques :</p>
					<ul>
						<li>Performances théoriquement excellentes grâce à l'absence de traitement serveur</li>
						<li>Sécurité renforcée par la nature statique de l'application</li>
						<li>Simplicité de déploiement et coûts d'hébergement maîtrisés</li>
						<li>Scalabilité naturelle pour la montée en charge</li>
					</ul>
					
					<p>La configuration Apache intègre l'URL rewriting pour gérer le routing côté client, tandis que Vite gère automatiquement les optimisations de build en mode production.</p>
				`
			},
			{
				type: 'text',
				title: 'Optimisations techniques et impact écologique',
				underlined: true,
				content: `
					<p>L'impact écologique constitue un enjeu majeur dans mes choix de développement pour ce site internet. J'ai implémenté plusieurs optimisations pour réduire l'empreinte carbone : conversion de toutes les images au format WebP pour diminuer leur poids, lazy loading des images avec l'attribut HTML natif, et minification automatique gérée par Vite en mode production.</p>
					
					<p>Je surveille régulièrement les scores Lighthouse et je teste l'empreinte carbone avec Website Carbon Calculator. L'objectif est d'obtenir un site qui se charge rapidement et consomme peu de ressources pour limiter son impact environnemental. Point bonus : même avec une faible connexion internet, le site aura plus de facilité à charger.</p>
					`
			},
			{
				type: 'text',
				title: 'Accessibilité et standards web',
				underlined: true,
				content: `
					<p>L'accessibilité a été intégrée dès la conception pour garantir une utilisation universelle du site. J'ai appliqué les bonnes pratiques : navigation clavier complète, contrastes optimisés, sémantique HTML correcte, et alternatives textuelles pour tous les contenus non-textuels.</p>
					
					<p>J'utilise l'extension Assistant RGAA pour Chrome pour valider la conformité aux standards WCAG. Le RGAA reprend exactement les mêmes critères que WCAG 2.1, mais avec une méthode d'évaluation française très précise et détaillée - un outil méthodique pour assurer une accessibilité de qualité.</p>
					
					<p>Cette démarche s'inscrit dans une vision inclusive du développement web, où l'accessibilité devient un facteur d'amélioration continue plutôt qu'une contrainte.</p>
				`
			},
			{
				type: 'text',
				title: 'SEO et référencement technique',
				underlined: true,
				content: `
					<p>L'optimisation pour les moteurs de recherche repose sur une approche technique structurée : génération automatique du sitemap XML, métadonnées Open Graph pour optimiser les partages sur les réseaux sociaux, configuration du robots.txt, et architecture de contenu sémantiquement cohérente.</p>
					
					<p>L'extension SiteChecker pour Chrome me permet de valider régulièrement ces optimisations et d'identifier les axes d'amélioration. Cette surveillance continue garantit le maintien des bonnes pratiques SEO.</p>
				`
			},
			{
				type: 'text',
				title: "Identité visuelle : création de l'avatar pixel art",
				underlined: true,
				content: `
					<p>L'identité visuelle du site s'appuie sur un avatar pixel art créé entièrement avec Aseprite. Ce choix esthétique apporte une originalité contrôlée tout en maintenant un niveau de professionnalisme adapté.</p>
					
					<p>Le développement technique comprend deux variantes (neutre et parlante) et une implémentation CSS optimisée avec <code>image-rendering: pixelated</code> pour garantir un rendu fidèle au style pixel art.</p>
					
					<p>Les fichiers sources Aseprite sont disponibles en téléchargement dans la section "Documents à télécharger".</p>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/portfolio/avatar_default.webp',
						alt: 'Avatar pixel art version par défaut',
						caption: 'Avatar pixel art - Version par défaut utilisée sur le site'
					},
					{
						src: '/images/projects/portfolio/avatar_speak.webp',
						alt: 'Avatar pixel art version parlante',
						caption: "Avatar pixel art - Version interactive pour dynamiser l'interface"
					},
					{
						src: '/images/projects/portfolio/avatar-og.webp',
						alt: 'Avatar optimisé pour Open Graph',
						caption: 'Version Open Graph optimisée pour les partages sur réseaux sociaux'
					}
				]
			},
			{
				type: 'text',
				title: 'Évolution continue',
				underlined: true,
				content: `
					<p>Ce portfolio constitue un projet vivant qui évolue en continu avec mes apprentissages et l'émergence de nouvelles technologies. Cette approche itérative me permet de maintenir une veille technique active tout en perfectionnant mes compétences de développement.</p>
				`
			}
		],
		sources: [
			{
				name: 'SvelteKit Documentation',
				url: 'https://kit.svelte.dev/',
				description: 'Documentation officielle du framework utilisé'
			},
			{
				name: 'WCAG Guidelines',
				url: 'https://www.w3.org/WAI/WCAG21/quickref/',
				description: "Standards d'accessibilité web respectés"
			},
			{
				name: 'Website Carbon Calculator',
				url: 'https://www.websitecarbon.com/website/neopelta-fr/',
				description: "Outil de mesure de l'empreinte carbone"
			},
			{
				name: 'SiteChecker SEO Extension',
				url: 'https://sitechecker.pro/seo-chrome-extension/',
				description: 'Outil de vérification SEO pour Chrome'
			},
			{
				name: 'Assistant RGAA',
				url: 'https://design.numerique.gouv.fr/articles/2021-10-06-assistant-rgaa/',
				description: "Extension pour valider l'accessibilité web selon le RGAA"
			},
			{
				name: 'Aseprite',
				url: 'https://www.aseprite.org/',
				description: "Logiciel utilisé pour la création de l'avatar pixel art"
			}
		],
		downloads: [
			{
				title: 'Avatar Pixel Art - Fichiers sources',
				filename: 'neopelta-avatar.zip',
				description:
					'Archive complète contenant les fichiers sources Aseprite (.ase) et tous les exports optimisés (PNG, WebP, SVG).',
				icon: '/images/logo/zip/zip-logo.svg'
			}
		]
	}
};
