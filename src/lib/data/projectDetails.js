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
						alt: "Agrès Saut - gymnaste s'élançant sur le cheval de saut",
						caption: 'Saut : impulsion et figures aériennes'
					},
					{
						src: '/images/projects/gamfed/paralleles.webp',
						alt: 'Barres parallèles - gymnaste en équilibre',
						caption: 'Barres parallèles : force et équilibre'
					},
					{
						src: '/images/projects/gamfed/arcons.webp',
						alt: "Cheval d'arçons - rotation des jambes",
						caption: "Cheval d'arçons : rotations et cisseaux"
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
                    <h5>4. Modélisation de la base de données</h5>
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
					<p>Le projet SkillTracker se compose de trois composants principaux interconnectés :</p>
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
					<h5>Application Web</h5>
					<ul>
						<li>Authentification sécurisée via Discord OAuth2</li>
						<li>Tableau de bord interactif avec toutes les compétences étudiantes</li>
						<li>Recherche et filtrage par nom d'étudiant</li>
						<li>Profils individuels détaillés avec graphiques de progression</li>
						<li>Système de permissions (administrateur/utilisateur)</li>
						<li>Interface responsive adaptée mobile et desktop</li>
					</ul>
					
					<h5>Bot Discord</h5>
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
					
					<h5>Frontend (React + Vite)</h5>
					<p>Interface utilisateur développée avec React et build tool Vite pour des performances optimales. Utilisation de React Router pour la navigation, et Lucide React pour les icônes. L'application gère l'état d'authentification de manière globale et propose une expérience utilisateur fluide.</p>
					
					<h5>Backend (Express.js + Passport)</h5>
					<p>Serveur API robuste utilisant Express.js avec middleware Passport pour l'authentification Discord. Gestion des sessions sécurisées, validation des tokens et interface avec Google Sheets API. Architecture RESTful avec endpoints séparés pour les différentes fonctionnalités.</p>
					
					<h5>Bot Discord (Discord.js)</h5>
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
					<h5>1. Développement Frontend React</h5>
					<p>Conception et développement complet de l'interface utilisateur avec React. Création des composants réutilisables (Header, Footer, Template) et en atomic design, mise en place du routing avec React Router, et développement des pages principales (Accueil, Tableau des compétences, Profils individuels). Implémentation du système de recherche et filtrage en temps réel.</p>
					
					<h5>2. Système de Permissions et Rôles</h5>
					<p>Implémentation du système de permissions complexe permettant aux administrateurs de modifier toutes les fiches (sauf autres admins) et aux utilisateurs de modifier uniquement leur propre profil. Gestion des tokens de session et validation côté client et serveur.</p>
					
					<h5>3. Interface Responsive et UX</h5>
					<p>Conception d'une interface entièrement responsive adaptée aux appareils mobiles et desktop. Optimisation de l'affichage du tableau avec défilement horizontal pour les écrans étroits, ajout d'instructions contextuelles et amélioration de l'accessibilité générale.</p>
				`
			},
			{
				type: 'text',
				title: 'Défis techniques et solutions',
				underlined: true,
				content: `
					<h5>Gestion des Sessions Distribuées</h5>
					<p>La complexité principale résidait dans la synchronisation des sessions entre l'application web et le bot Discord. Solution implémentée : base de données MySQL centralisée pour les sessions avec système d'expiration automatique et validation des tokens en temps réel.</p>
					
					<h5>Permissions Granulaires</h5>
					<p>Mise en place d'un système de permissions complexe permettant différents niveaux d'accès. Les administrateurs peuvent gérer tous les utilisateurs mais ne peuvent pas modifier les comptes d'autres administrateurs, assurant ainsi une sécurité hiérarchique.</p>
					
					<h5>Interface Google Sheets</h5>
					<p>Intégration avec Google Sheets API nécessitant la gestion des credentials de service, authentification OAuth2 et synchronisation des données en temps réel entre l'application et la feuille de calcul partagée.</p>
				`
			},
			{
				type: 'text',
				title: 'Technologies et outils utilisés',
				underlined: true,
				content: `
					<h5>Frontend</h5>
					<ul>
						<li><strong>React 18</strong> : Framework principal avec hooks modernes</li>
						<li><strong>Vite</strong> : Build tool pour développement rapide</li>
						<li><strong>React Router</strong> : Navigation et routing</li>
						<li><strong>Lucide React</strong> : Icônes SVG optimisées</li>
						<li><strong>CSS natif</strong> : Styles personnalisés sans framework</li>
					</ul>
					
					<h5>Backend</h5>
					<ul>
						<li><strong>Express.js</strong> : Framework web Node.js</li>
						<li><strong>Passport.js</strong> : Middleware d'authentification</li>
						<li><strong>MySQL2</strong> : Driver base de données</li>
						<li><strong>Google APIs</strong> : Interface Google Sheets</li>
						<li><strong>Discord.js v14</strong> : Wrapper API Discord</li>
					</ul>
					
					<h5>Outils et Infrastructure</h5>
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
						<li><strong>Système de validation</strong> : Vérification automatique basée sur 8 règles logiques fondamentales</li>
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
					<p>L'application implémente un système de validation rigoureux basé sur les 8 règles fondamentales de la logique syllogistique :</p>
					
					<h5>Règles structurelles</h5>
					<ul>
						<li><strong>Rmt (Middle Term Rule)</strong> : Le moyen terme doit être distribué au moins une fois</li>
						<li><strong>Rp (Premise Rule)</strong> : Validation de la cohérence des prémisses</li>
						<li><strong>Rlh (Hypothesis Linking Rule)</strong> : La conclusion ne peut excéder les prémisses</li>
					</ul>
					
					<h5>Règles de qualité</h5>
					<ul>
						<li><strong>Rnn (Non-Negativity Rule)</strong> : Interdiction de deux prémisses négatives</li>
						<li><strong>Rn (Negativity Rule)</strong> : Propagation de la négativité vers la conclusion</li>
						<li><strong>Rpp (Positive Premise Rule)</strong> : Cohérence des conclusions positives</li>
					</ul>
					
					<h5>Règles de quantité</h5>
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
					
					<h5>Couche logique métier</h5>
					<p>Implémentation des classes <code>Type</code>, <code>Proposition</code> et <code>Polysyllogism</code> pour modéliser les structures logiques. Le système de types garantit la cohérence des propositions (A, E, I, O) selon la classification aristotélicienne.</p>
					
					<h5>Moteur de validation</h5>
					<p>La classe <code>ValidityChecker</code> orchestre l'application des règles logiques de manière configurable. Chaque règle peut être activée/désactivée individuellement pour des scénarios pédagogiques spécifiques.</p>
					
					<h5>Interface utilisateur adaptive</h5>
					<p>Système de formulaires dynamiques avec génération de prémisses à la volée, gestion des relations entre termes et validation en temps réel. Support du mode sombre et internationalisation complète.</p>
				`
			},
			{
				type: 'text',
				title: 'Mes contributions principales',
				underlined: true,
				content: `
					<h5>1. Développement du front-end interactif</h5>
					<p>Conception et implémentation complète des formulaires interactifs pour les deux modes d'utilisation. Développement du système de création dynamique de prémisses en Mode Libre, avec gestion des relations logiques entre termes et interface responsive.</p>
					
					<h5>2. Logique de parsing des polysyllogismes</h5>
					<p>Implémentation de l'algorithme de validation structurelle des polysyllogismes dans la méthode <code>checkStructure()</code>. Cette fonction vérifie la cohérence des termes, détecte les relations logiques et réorganise automatiquement les propositions dans l'ordre canonique.</p>
					
					<h5>3. Système de gestion des quantificateurs</h5>
					<p>Développement complet de l'éditeur de quantificateurs personnalisés avec persistance localStorage, catégorisation par type logique (universel/existentiel, positif/négatif) et intégration seamless dans les formulaires principaux.</p>
					
					<h5>4. Interface de visualisation des combinaisons</h5>
					<p>En équipe, création du générateur exhaustif affichant les 256 combinaisons possibles de syllogismes avec validation règle par règle. Interface tabulaire avec codage couleur pour identifier rapidement les syllogismes valides/invalides selon les règles sélectionnées.</p>
				`
			},
			{
				type: 'text',
				title: 'Défis techniques et solutions',
				underlined: true,
				content: `
					<h5>Gestion des états complexes</h5>
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
			},
			{
				type: 'text',
				title: 'Impact pédagogique et résultats',
				underlined: true,
				content: `
					<p>L'application répond à un besoin réel d'outils pédagogiques modernes pour l'enseignement de la logique formelle. Les fonctionnalités développées permettent :</p>
					<ul>
						<li><strong>Apprentissage progressif</strong> : Du mode guidé vers la construction libre de raisonnements complexes</li>
						<li><strong>Exploration exhaustive</strong> : Visualisation complète de l'espace des possibles via le générateur</li>
						<li><strong>Personnalisation</strong> : Adaptation aux spécificités linguistiques via l'éditeur de quantificateurs</li>
					</ul>
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
				title: 'Architecture technique modulaire',
				underlined: true,
				content: `
					<p>Le projet suit une architecture modulaire rigoureuse avec séparation claire des responsabilités :</p>
					
					<h5>Structure des fichiers</h5>
					<ul>
						<li><strong>main.c</strong> : Point d'entrée, orchestration des algorithmes de résolution</li>
						<li><strong>sudoku.c/h</strong> : Cœur des algorithmes de résolution (singleton, k-uplets, X-Wing, backtracking)</li>
						<li><strong>access.c/h</strong> : Gestion des cellules, notes de candidats et voisinages</li>
						<li><strong>utils.c/h</strong> : Fonctions utilitaires d'affichage et validation</li>
						<li><strong>types.c/h</strong> : Définitions des structures de données et constantes</li>
					</ul>
					
					<h5>Structures de données optimisées</h5>
					<p>Chaque cellule du Sudoku est représentée par une structure contenant sa valeur et un entier représentant les notes possibles via manipulation binaire. Cette approche permet une gestion efficace de la mémoire et des opérations sur les candidats.</p>
				`
			},
			{
				type: 'text',
				title: 'Techniques de résolution implémentées',
				underlined: true,
				content: `
					<p>Le solveur implémente une hiérarchie de techniques de résolution, des plus simples aux plus complexes :</p>
					
					<h5>1. Méthode des Singletons</h5>
					<p>Détection automatique des cellules ne possédant qu'un seul candidat possible. Cette technique de base permet de résoudre rapidement les parties évidentes du puzzle.</p>
					
					<h5>2. K-uplets généralisés (Naked et Hidden Subsets)</h5>
					<p>Algorithme unifié couvrant les paires, triplets et k-uplets jusqu'à 9 éléments. Détecte automatiquement les groupes de cellules partageant le même ensemble de candidats pour éliminer les possibilités ailleurs.</p>
					
					<h5>3. Intersections lignes/colonnes/blocs (Pointing et Claiming)</h5>
					<p>Analyse des intersections entre blocs et lignes/colonnes pour identifier les candidats contraints à certaines positions, permettant l'élimination de candidats dans les zones adjacentes.</p>
					
					<h5>4. Pattern X-Wing</h5>
					<p>Détection du motif X-Wing sur deux lignes ou colonnes parallèles, créant un pattern en diagonale qui permet d'éliminer les candidats dans les colonnes ou lignes concernées.</p>
					
					<h5>5. Backtracking</h5>
					<p>Algorithme de derniers recours utilisant l'exploration exhaustive avec retour en arrière pour les grilles que les techniques humaines ne peuvent résoudre complètement.</p>
				`
			},
			{
				type: 'text',
				title: 'Orchestration et algorithme principal',
				underlined: true,
				content: `
					<p>Le solveur suit un flux d'exécution optimisé appliquant les techniques dans l'ordre de complexité croissante :</p>
					
					<ol>
						<li><strong>Initialisation des notes</strong> : Calcul des candidats possibles pour chaque cellule vide</li>
						<li><strong>Singleton Method</strong> : Résolution des cellules évidentes</li>
						<li><strong>Boucle K-uplets</strong> : Application des k-uplets pour k=1 à 9</li>
						<li><strong>Réductions d'intersections</strong> : Analyse des contraintes bloc/ligne/colonne</li>
						<li><strong>X-Wing</strong> : Recherche de patterns avancés</li>
						<li><strong>Backtracking</strong> : Solution de dernier recours si aucune technique humaine ne progresse</li>
					</ol>
					
					<p>Cette approche garantit une résolution efficace : les techniques rapides résolvent la majorité des cas, et le backtracking n'intervient que pour les grilles les plus complexes.</p>
				`
			},
			{
				type: 'text',
				title: 'Mes contributions principales',
				underlined: true,
				content: `
					<h5>1. Architecture modulaire et structure du projet</h5>
					<p>Conception de l'architecture générale du projet avec séparation claire des responsabilités. Définition des interfaces entre modules et standardisation des conventions de codage pour faciliter le travail en équipe.</p>
					
					<h5>2. Système de gestion des notes optimisé</h5>
					<p>Implémentation du système de manipulation binaire des candidats permettant des opérations rapides sur les notes. Développement des fonctions de base (setnote, getnote) et du système de comptage pré-calculé des bits pour optimiser les performances.</p>
					
					<h5>3. Algorithmes k-uplets généralisés</h5>
					<p>Conception et implémentation de l'algorithme unifié pour détecter les k-uplets nus et cachés. Utilisation de la génération de combinaisons et du coefficient binomial pour explorer systématiquement tous les groupes possibles.</p>
					
					<h5>4. Fonctions utilitaires et débogage</h5>
					<p>Développement des outils d'affichage et de débogage permettant de visualiser l'état des notes et de suivre la progression des algorithmes. Ces outils ont été essentiels pour valider le bon fonctionnement des techniques complexes.</p>
				`
			},
			{
				type: 'text',
				title: 'Défis techniques et optimisations',
				underlined: true,
				content: `
					<h5>Manipulation binaire avancée</h5>
					<p>L'utilisation d'entiers pour représenter les notes nécessitait une maîtrise des opérations bit-à-bit. Nous avons développé un système de pré-calcul des comptages de bits et des fonctions optimisées pour les opérations fréquentes.</p>
					
					<h5>Intégration des techniques de résolution</h5>
					<p>La difficulté principale était de créer une architecture permettant l'ajout facile de nouvelles techniques tout en maintenant l'efficacité. Nous avons opté pour une approche modulaire où chaque technique retourne le nombre de modifications effectuées.</p>
					`
			},
			{
				type: 'text',
				title: "Méthodologie et organisation d'équipe",
				underlined: true,
				content: `
					<p>Le projet a été mené selon une méthodologie agile adaptée au contexte académique :</p>
					
					<h5>Organisation de l'équipe</h5>
					<ul>
						<li><strong>Maxime MARCHIVE</strong> : Coordinateur projet et liaison équipe académique</li>
						<li><strong>Ronan PLUTA FONTAINE</strong> : Chef d'équipe, architecture technique et k-uplets</li>
						<li><strong>Raphaël SIMON</strong> : Algorithmes de base et validation</li>
						<li><strong>Diewertje VAN DAM</strong> : Techniques avancées et optimisations</li>
					</ul>
					
					<h5>Outils et processus</h5>
					<ul>
						<li><strong>Contrôle de version</strong> : Git </li>
						<li><strong>Documentation</strong> : Rédaction en LaTeX pour un rendu professionnel</li>
						<li><strong>Cycles itératifs</strong> : Développement par sprints avec livrables fonctionnels</li>
						<li><strong>Tests continus</strong> : Validation sur grilles de référence à chaque itération</li>
					</ul>
					
					<h5>Jalons du projet</h5>
					<p>Le projet s'est déroulé de septembre 2023 à avril 2024 avec des jalons clairs : cahier des charges (novembre), rapport d'avancement (janvier), et soutenance finale en anglais (mars-avril).</p>
				`
			},
			{
				type: 'text',
				title: 'Résultats et performances',
				underlined: true,
				content: `
					<p>Le solveur final présente d'excellentes performances sur l'ensemble des tailles de grilles testées :</p>
					
					<h5>Efficacité des techniques</h5>
					<ul>
						<li><strong>Grilles faciles à moyennes (9x9)</strong> : Résolues uniquement par les techniques humaines en < 1ms</li>
						<li><strong>Grilles difficiles</strong> : Combinaison techniques + backtracking limité</li>
						<li><strong>Grilles 16x16 et 25x25</strong> : Gestion efficace grâce aux optimisations algorithmiques</li>
					</ul>
					
					<h5>Robustesse et fiabilité</h5>
					<p>Tests extensifs sur plus de 1000 grilles générées automatiquement, validation sur grilles de référence connues, et respect des contraintes de validité (minimum 17 cases pour grilles 9x9).</p>
					
					<h5>Extensibilité</h5>
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
	}
};

export function getProjectDetails(projectId) {
	return projectDetails[projectId] || null;
}
