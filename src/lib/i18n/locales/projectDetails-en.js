export const projectDetails = {
	'gamfed-quiz': {
		title: 'Android Application for the New Aquitaine Gymnastics Federation',
		contentBlocks: [
			{
				type: 'text',
				content: `
                    <p>Native Android application developed by a team of 4 students for the New Aquitaine Gymnastics Federation. The objective was to modernize the learning and assessment of knowledge for men's artistic gymnastics judges.</p>
                `
			},
			{
				type: 'text',
				title: 'Main Features',
				underlined: true,
				content: `
                    <p>The application offers a complete system of interactive quizzes allowing judges to learn and review:</p>
                    <ul>
                        <li>Personalized quizzes with dynamic question generation (7 different types)</li>
                        <li>Scoring and detailed progress tracking system</li>
                        <li>Multidimensional statistics with 4 analysis views</li>
                        <li>Database of over 600 gymnastics elements</li>
                        <li>Interface adapted to judges' specific needs</li>
                    </ul>
                `
			},
			{
				type: 'images',
				title: "Application Interface",
				underlined: true,
				images: [
					{
						src: '/images/projects/gamfed/app-home.webp',
						alt: "Application home screen with quiz options",
						caption: "Home screen with personalized quiz options"
					},
					{
						src: '/images/projects/gamfed/app-selectoption.webp',
						alt: 'Quiz configuration options screen',
						caption: 'Quiz settings configuration (apparatus, level, question types)'
					},
					{
						src: '/images/projects/gamfed/app-question4.webp',
						alt: 'Quiz screen with multiple choice question',
						caption: 'Quiz question with pictogram and answer options'
					},
					{
						src: '/images/projects/gamfed/app-result.webp',
						alt: 'Results screen with score',
						caption: 'Detailed results with percentage and recommendations'
					}
				]
			},
			{
				type: 'text',
				title: 'Context and Domain Complexity',
				underlined: true,
				content: `
                    <p>Men's artistic gymnastics comprises 6 distinct apparatus (Floor Exercise, Vault, Parallel Bars, Pommel Horse, High Bar, Still Rings). Each gymnastics element has precise technical characteristics: detailed pictogram, simplified symbol, value according to level, group membership and recognition rules. Judges must master over 600 elements with their specificities.</p>
                `
			},
			{
				type: 'images',
				title: 'The 6 apparatus of men\'s artistic gymnastics',
				underlined: true,
				images: [
					{
						src: '/images/projects/gamfed/sol.webp',
						alt: 'Floor Exercise apparatus',
						caption: 'Floor Exercise: acrobatics and choreographed figures'
					},
					{
						src: '/images/projects/gamfed/saut.webp',
						alt: "Vault apparatus",
						caption: 'Vault: propulsion and aerial figures'
					},
					{
						src: '/images/projects/gamfed/paralleles.webp',
						alt: 'Parallel Bars apparatus',
						caption: 'Parallel Bars: strength and balance'
					},
					{
						src: '/images/projects/gamfed/arcons.webp',
						alt: "Pommel Horse apparatus",
						caption: "Pommel Horse: rotations and scissors"
					},
					{
						src: '/images/projects/gamfed/fixe.webp',
						alt: 'High Bar apparatus',
						caption: 'High Bar: swings and rotations'
					},
					{
						src: '/images/projects/gamfed/anneaux.webp',
						alt: 'Still Rings apparatus',
						caption: 'Still Rings: pure strength and holds'
					}
				]
			},
			{
				type: 'text',
				title: 'Global Technical Architecture',
				underlined: true,
				content: `
                    <p>The application relies on Room Database for persistence, RxJava for reactive programming, and a complex dynamic question generation system. The modular architecture allows managing 7 different question types with an advanced relational database.</p>
                    <p>The database comprises two distinct parts: official FFGym data (read-only) and user statistics (preserved between updates). The system uses metadata to manage versioning and migrations.</p>
                `
			},
			{
				type: 'text',
				title: 'My Main Contributions',
				underlined: true,
				content: `
                    <h4>1. Multidimensional Statistics System</h4>
                    <p>Complete development of the statistics system with 4 analysis views: quiz history, performance by apparatus, by question type and by qualification level. The system uses an optimized LRU cache for quiz details and offers dynamic temporal filters.</p>
                `
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/gamfed/app-stats1.webp',
						alt: "Quiz history screen with scores",
						caption: 'Chronological history with quiz deletion'
					},
					{
						src: '/images/projects/gamfed/app-stats2.webp',
						alt: 'Performance analysis by apparatus',
						caption: 'Statistics by apparatus with expandable details'
					},
					{
						src: '/images/projects/gamfed/app-stats3.webp',
						alt: 'Performance by question types',
						caption: 'Analysis by question types (pictograms, values, etc.)'
					},
					{
						src: '/images/projects/gamfed/app-stats4.webp',
						alt: 'Performance by qualification level',
						caption: 'Analysis by qualification level (Federal, National)'
					}
				]
			},
			{
				type: 'text',
				content: `
                    <h4>2. PDF Data Extraction Pipeline</h4>
                    <p>Design of an automated extraction pipeline to process official PDF documents from FFGym. The project involved two approaches:</p>
                    
                    <p><strong>Manual approach</strong>: Manual data extraction from PDFs to Excel files, then processing by the Java Populator tool. This method was used for the final version due to its reliability.</p>
                    
                    <p><strong>Automated OCR approach</strong>: Development of a Python pipeline with OpenCV for automatic rectangular zone detection, PDF to PNG conversion, and OCR extraction. Although not finalized, this approach lays the foundation for future complete automation.</p>
                    
                    <p><strong>Technical challenges</strong>: Automated extraction proved complex because documents are not structured in reading order, images are scattered and sometimes fragmented. Automatic table detection requires complex preprocessing and business logic to identify headers and group elements.</p>
                `
			},
			{
				type: 'text',
				content: `
                    <h4>3. Design and Figma Templates</h4>
                    <p>Creation of the entire application design system with Figma. Definition of the graphic charter. The templates represent the main screens of the application.</p>
                `
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/gamfed/figma-advanced-quiz.webp',
						alt: 'Advanced quiz with customization options',
						caption: 'Advanced quiz interface with customization options'
					},
					{
						src: '/images/projects/gamfed/figma-question1.webp',
						alt: 'Multiple choice question interface',
						caption: 'Multiple choice questions design'
					},
					{
						src: '/images/projects/gamfed/figma-question2.webp',
						alt: 'Alternative question interface',
						caption: "Question display variant"
					},
					{
						src: '/images/projects/gamfed/figma-question3.webp',
						alt: 'Interactive question interface',
						caption: 'Interactive question with visual elements'
					},
					{
						src: '/images/projects/gamfed/figma-question10.webp',
						alt: 'Milestone question interface',
						caption: 'Special question with reward'
					},
					{
						src: '/images/projects/gamfed/figma-result.webp',
						alt: 'Results and final score screen',
						caption: 'Results display with analytics'
					},
					{
						src: '/images/projects/gamfed/figma-result-question1.webp',
						alt: 'Detailed results by question',
						caption: 'Answers visualization by question'
					},
					{
						src: '/images/projects/gamfed/figma-stats.webp',
						alt: 'User statistics dashboard',
						caption: 'Dashboard with performance metrics'
					}
				]
			},
			{
				type: 'text',
				content: `
                    <h4>4. Database Modeling</h4>
                    <p>Participation in Room Database schema design with metadata management, versioning and migrations. The database comprises two distinct parts: official FFGym data (read-only) and user statistics (preserved between updates).</p>
                `
			}
		],
		sources: [
			{
				name: 'University of Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Academic context and project supervision'
			},
			{
				name: 'La Renaissance Gymnastique',
				url: 'http://www.larenaissancegymnastique.fr',
				description: 'Images of men\'s artistic gymnastics apparatus'
			},
			{
				name: 'French Gymnastics Federation',
				url: 'https://www.ffgym.com',
				description: 'Official technical regulations and documentation'
			}
		],
		downloads: [
			{
				title: 'Figma Templates',
				filename: 'GamFed - Ronan (Neopelta) PLUTA FONTAINE.fig',
				description:
					"Figma file containing all mockups, components and design system of the application.",
				icon: '/images/logo/figma/figma-logo.svg'
			}
		]
	},
	skilltracker: {
		title: 'Skills Tracking Web Platform with Discord Ecosystem',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Complete skills management and visualization platform developed by a team of 3 Master 1 Computer Science students at the University of Poitiers. This project offers a complete ecosystem combining web application, Discord bot and Google API to allow students to track and improve their skills.</p>
				`
			},
			{
				type: 'text',
				title: 'Complete System Architecture',
				underlined: true,
				content: `
					<p>The SkillTracker project consists of several interconnected main components:</p>
					<ul>
						<li><strong>React Web Application</strong>: Modern interface with Discord OAuth2 authentication</li>
						<li><strong>Discord Bot</strong>: Direct interaction via commands to consult and modify skills</li>
						<li><strong>Express.js API</strong>: Robust backend with session management and Google Sheets interface</li>
						<li><strong>Database</strong>: Google Sheets as storage system with dedicated API</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: "Web application interfaces",
				underlined: true,
				images: [
					{
						src: '/images/projects/skilltracker/skillTracker-project.webp',
						alt: "SkillTracker homepage with feature presentation",
						caption: "Homepage with description of web and Discord features"
					},
					{
						src: '/images/projects/skilltracker/skillTracker-project(skills).webp',
						alt: 'Skills table with all students',
						caption: 'Complete table view with horizontal navigation and search'
					},
					{
						src: '/images/projects/skilltracker/skillTracker-project(connect).webp',
						alt: 'Discord OAuth2 login page',
						caption: 'Secure login interface via Discord'
					},
					{
						src: '/images/projects/skilltracker/skillTracker-project(fiche).webp',
						alt: 'Individual profile with skills editing',
						caption: 'Personal profile with real-time modification system'
					}
				]
			},
			{
				type: 'text',
				title: 'Main Features',
				underlined: true,
				content: `
					<h4>Web Application</h4>
					<ul>
						<li>Secure authentication via Discord OAuth2</li>
						<li>Interactive dashboard with all student skills</li>
						<li>Search and filtering by student name</li>
						<li>Permission system (administrator/user)</li>
						<li>Responsive interface adapted for mobile and desktop</li>
					</ul>
					
					<h4>Discord Bot</h4>
					<ul>
						<li>Prefix commands <code>mpf!</code> for all interactions</li>
						<li>Skills consultation via <code>mpf!skills</code></li>
						<li>Specific profile visualization with <code>mpf!skill @user</code></li>
						<li>Quick modification with <code>mpf!updateskill [SKILL] [Value]</code></li>
						<li>Pagination system for large lists</li>
						<li>Error handling and data validation</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Advanced Technical Architecture',
				underlined: true,
				content: `
					<p>The project architecture follows a modular approach with clear separation of responsibilities:</p>
					
					<h4>Frontend (React + Vite)</h4>
					<p>User interface developed with React and Vite build tool for optimal performance. Uses React Router for navigation, and Lucide React for icons. The application manages authentication state globally and provides a smooth user experience.</p>
					
					<h4>Backend (Express.js + Passport)</h4>
					<p>Robust API server using Express.js with Passport middleware for Discord authentication. Secure session management, token validation and Google Sheets API interface. RESTful architecture with separate endpoints for different functionalities.</p>
					
					<h4>Discord Bot (Discord.js)</h4>
					<p>Autonomous bot developed with Discord.js v14, modular command system and event management. Shares the same database as the web application to ensure data consistency.</p>
				`
			},
			{
				type: 'images',
				title: 'Administrative interface',
				underlined: true,
				images: [
					{
						src: '/images/projects/skilltracker/skillTracker-project(admin).webp',
						alt: 'Administrator panel for connected users management',
						caption: 'Admin interface with session management and forced logout'
					}
				]
			},
			{
				type: 'text',
				title: 'My Main Contributions',
				underlined: true,
				content: `
					<h4>1. React Frontend Development</h4>
					<p>Complete design and development of the user interface with React. Creation of reusable components (Header, Footer, Template) in atomic design, routing setup with React Router, and development of main pages (Home, Skills Table, Individual Profiles). Implementation of real-time search and filtering system.</p>
					
					<h4>2. Permissions and Roles System</h4>
					<p>Implementation of complex permission system allowing administrators to modify all profiles (except other admins) and users to modify only their own profile. Session token management and client and server-side validation.</p>
					
					<h4>3. Responsive Interface and UX</h4>
					<p>Design of a fully responsive interface adapted to mobile and desktop devices. Table display optimization with horizontal scrolling for narrow screens, addition of contextual instructions and general accessibility improvement.</p>
				`
			},
			{
				type: 'text',
				title: 'Technical Challenges and Solutions',
				underlined: true,
				content: `
					<h4>Distributed Session Management</h4>
					<p>The main complexity resided in synchronizing sessions between the web application and Discord bot. Implemented solution: centralized MySQL database for sessions with automatic expiration system and real-time token validation.</p>
					
					<h4>Granular Permissions</h4>
					<p>Implementation of a complex permission system allowing different access levels. Administrators can manage all users but cannot modify other administrator accounts, ensuring hierarchical security.</p>
					
					<h4>Google Sheets Interface</h4>
					<p>Integration with Google Sheets API requiring service credentials management, OAuth2 authentication and real-time data synchronization between the application and shared spreadsheet.</p>
				`
			},
			{
				type: 'text',
				title: 'Technologies and Tools Used',
				underlined: true,
				content: `
					<h4>Frontend</h4>
					<ul>
						<li><strong>React 18</strong>: Main framework with modern hooks</li>
						<li><strong>Vite</strong>: Build tool for rapid development</li>
						<li><strong>React Router</strong>: Navigation and routing</li>
						<li><strong>Lucide React</strong>: Optimized SVG icons</li>
						<li><strong>Native CSS</strong>: Custom styles without framework</li>
					</ul>
					
					<h4>Backend</h4>
					<ul>
						<li><strong>Express.js</strong>: Node.js web framework</li>
						<li><strong>Passport.js</strong>: Authentication middleware</li>
						<li><strong>MySQL2</strong>: Database driver</li>
						<li><strong>Google APIs</strong>: Google Sheets interface</li>
						<li><strong>Discord.js v14</strong>: Discord API wrapper</li>
					</ul>
					
					<h4>Tools and Infrastructure</h4>
					<ul>
						<li><strong>Google Cloud Console</strong>: APIs management</li>
						<li><strong>Discord Developer Portal</strong>: Bot configuration</li>
						<li><strong>ESLint</strong>: Linting and code quality</li>
						<li><strong>Dotenv</strong>: Environment variables management</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Collaboration and Methodology',
				underlined: true,
				content: `
					<p>Project developed by a team of 3 people with clear distribution of responsibilities:</p>
					<ul>
						<li><strong>Maxime M.</strong>: Backend API, server infrastructure and database</li>
						<li><strong>Ronan PLUTA FONTAINE</strong>: React frontend, API integration and UX/UI design</li>
						<li><strong>Victor F.</strong>: Discord bot, commands and database integration</li>
					</ul>
					
					<p>Agile methodology with short development cycles, continuous testing and progressive feature integration. Use of Git for versioning with feature branches and collective code reviews.</p>
				`
			}
		],
		sources: [
			{
				name: 'University of Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Academic context and project supervision'
			},
			{
				name: 'Discord Developer Portal',
				url: 'https://discord.com/developers/applications',
				description: 'OAuth2 and Discord bot configuration'
			},
			{
				name: 'Google Cloud Console',
				url: 'https://console.cloud.google.com',
				description: 'Google Sheets API and service accounts configuration'
			},
			{
				name: 'SkillTracker Website',
				url: 'https://aaw.univportfolio.info',
				description: 'Web application online publicly accessible'
			}
		]
	},
	'polysyllogism-validator': {
		title: 'Educational Tool for Logical Reasoning Validation',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Educational Web application developed by a team of 5 Master 1 Computer Science students at the University of Poitiers. This project aims to modernize formal logic learning by providing an interactive tool to validate syllogisms and polysyllogisms, primarily intended for first-year university students.</p>
				`
			},
			{
				type: 'text',
				title: 'Architecture and Main Features',
				underlined: true,
				content: `
					<p>The application offers a comprehensive pedagogical approach for syllogism learning:</p>
					<ul>
						<li><strong>Guided Mode</strong>: Step-by-step interface to build classic two-premise syllogisms</li>
						<li><strong>Free Mode</strong>: Creation of complex polysyllogisms with dynamic premise addition</li>
						<li><strong>Validation System</strong>: Verification based on 8 fundamental logical rules</li>
						<li><strong>Quantifier Editor</strong>: Customization of logical quantifiers with persistence</li>
						<li><strong>Exhaustive Generator</strong>: Calculation and display of 256 possible syllogism combinations</li>
						<li><strong>Multilingual Support</strong>: Interface available in French and English</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Validation mode interfaces',
				underlined: true,
				images: [
					{
						src: '/images/projects/polysyllogism/syllogisme-project(guide).webp',
						alt: 'Guided mode with step-by-step syllogism construction',
						caption: 'Guided mode: progressive construction with contextual help'
					},
					{
						src: '/images/projects/polysyllogism/syllogisme-project(libre).webp',
						alt: 'Free mode for complex polysyllogisms',
						caption: 'Free mode: polysyllogism creation with multiple premises'
					},
					{
						src: '/images/projects/polysyllogism/syllogisme-project(edit).webp',
						alt: 'Custom quantifier editor',
						caption: 'Editor: quantifier management by logical category'
					},
					{
						src: '/images/projects/polysyllogism/syllogisme-project(gen).webp',
						alt: 'Generator of 256 syllogism combinations',
						caption: 'Generator: exhaustive table with rule-by-rule validation'
					}
				]
			},
			{
				type: 'text',
				title: 'Theoretical Foundations and Logical Rules',
				underlined: true,
				content: `
					<p>The application implements a validation system based on the 8 fundamental rules of syllogistic logic:</p>
					
					<h4>Structural Rules</h4>
					<ul>
						<li><strong>Rmt (Middle Term Rule)</strong>: The middle term must be distributed at least once</li>
						<li><strong>Rp (Premise Rule)</strong>: Premise consistency validation</li>
						<li><strong>Rlh (Hypothesis Linking Rule)</strong>: The conclusion cannot exceed the premises</li>
					</ul>
					
					<h4>Quality Rules</h4>
					<ul>
						<li><strong>Rnn (Non-Negativity Rule)</strong>: Prohibition of two negative premises</li>
						<li><strong>Rn (Negativity Rule)</strong>: Negativity propagation to conclusion</li>
						<li><strong>Rpp (Positive Premise Rule)</strong>: Positive conclusion consistency</li>
					</ul>
					
					<h4>Quantity Rules</h4>
					<ul>
						<li><strong>Raa (Affirmation-Affirmation Rule)</strong>: Particular premise limitation</li>
						<li><strong>Ruu (Hypothesis of Existence)</strong>: Term existence verification</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Technical Architecture and Implementation',
				underlined: true,
				content: `
					<p>The project relies on a modular TypeScript architecture favoring separation of concerns:</p>
					
					<h4>Business Logic Layer</h4>
					<p>Implementation of <code>Type</code>, <code>Proposition</code> and <code>Polysyllogism</code> classes to model logical structures. The type system guarantees proposition consistency (A, E, I, O) according to Aristotelian classification.</p>
					
					<h4>Validation Engine</h4>
					<p>The <code>ValidityChecker</code> class orchestrates logical rule application in a configurable manner. Each rule can be individually activated/deactivated for specific pedagogical scenarios.</p>
					
					<h4>Adaptive User Interface</h4>
					<p>Dynamic form system with on-the-fly premise generation, term relationship management and real-time validation. Dark mode support and complete internationalization.</p>
				`
			},
			{
				type: 'text',
				title: 'My Main Contributions',
				underlined: true,
				content: `
					<h4>1. Interactive Front-end Development</h4>
					<p>Complete design and implementation of interactive forms for both usage modes. Development of dynamic premise creation system in Free Mode, with logical term relationship management and responsive interface.</p>
					
					<h4>2. Polysyllogism Parsing Logic</h4>
					<p>Implementation of polysyllogism structural validation algorithm in the <code>checkStructure()</code> method. This function verifies term consistency, detects logical relationships and automatically reorganizes propositions in canonical order.</p>
					
					<h4>3. Quantifier Management System</h4>
					<p>Complete development of custom quantifier editor with localStorage persistence, categorization by logical type (universal/existential, positive/negative) and seamless integration in main forms.</p>
					
					<h4>4. Combination Visualization Interface</h4>
					<p>In team, creation of exhaustive generator displaying 256 possible syllogism combinations with rule-by-rule validation. Tabular interface with color coding to quickly identify valid/invalid syllogisms according to selected rules.</p>
				`
			},
			{
				type: 'text',
				title: 'Technical Challenges and Solutions',
				underlined: true,
				content: `
					<h4>Complex State Management</h4>
					<p>The Free Mode interface required sophisticated state management with interdependent dynamic forms. Implementation of bi-directional binding system between user selections and available options.</p>
				`
			},
			{
				type: 'text',
				title: 'Methodology and Collaboration',
				underlined: true,
				content: `
					<p>Project developed by a team of 5 people over 3 months with an agile approach:</p>
					<ul>
						<li><strong>Modular Architecture</strong>: Clear separation between business logic, validation and interface</li>
						<li><strong>Automated Testing</strong>: Jest test suite covering 256 test cases with Excel reference file</li>
						<li><strong>Technical Documentation</strong>: Automatic generation with TypeDoc</li>
					</ul>
					
					<p>My main contribution focused on user interface and parsing logic, in close collaboration with the team to ensure overall architecture consistency.</p>
				`
			}
		],
		sources: [
			{
				name: 'University of Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Academic context and project supervision'
			},
			{
				name: 'GitHub Repository',
				url: 'https://github.com/Neopelta/polysyllogisme.git',
				description: 'Complete source code with technical documentation'
			},
			{
				name: 'Wikipedia - Syllogism',
				url: 'https://en.wikipedia.org/wiki/Syllogism',
				description: 'Definition and theory of syllogisms'
			},
			{
				name: 'Wikipedia - Polysyllogism',
				url: 'https://en.wikipedia.org/wiki/Polysyllogism',
				description: 'Definition and theory of polysyllogisms'
			}
		]
	},
	'sudoku-solver': {
		title: 'Advanced Sudoku Solver with Human Resolution Techniques',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Sudoku solver developed in C language as part of a Bachelor 3 Computer Science academic project at the University of Poitiers. Designed by a team of 4 students, this project combines pedagogical approach and advanced algorithmic resolution techniques.</p>
				`
			},
			{
				type: 'text',
				title: 'Objective and Academic Context',
				underlined: true,
				content: `
					<p>The project is part of the pre-professionalization module aimed at developing skills in teamwork, project management and advanced programming. The main objective was to create a solver capable of automatically solving Sudoku grids of different sizes (9x9, 16x16, 25x25) by applying human resolution techniques before resorting to backtracking.</p>
					
					<p><strong>Technical constraints:</strong></p>
					<ul>
						<li>Implementation in C language to optimize performance</li>
						<li>Modular architecture with clear separation of responsibilities</li>
						<li>Support for variable-sized grids</li>
						<li>Respect for minimum 17 pre-filled cells to guarantee unique solution for 9x9 grid</li>
					</ul>
				`
			},
			{
				type: 'text',
				title: 'Optimized Data Structures',
				underlined: true,
				content: `
					<p>Each Sudoku cell is represented by a structure containing its value and an integer representing possible notes via binary manipulation. This approach allows efficient memory management and operations on candidates.</p>
				`
			},
			{
				type: 'text',
				title: 'Implemented Resolution Techniques',
				underlined: true,
				content: `
					<p>The solver implements a hierarchy of resolution techniques, from simplest to most complex:</p>
					
					<h4>1. Singleton Method</h4>
					<p>Automatic detection of cells having only one possible candidate. This basic technique allows quickly solving obvious parts of the puzzle.</p>
					
					<h4>2. Generalized K-tuples (Naked and Hidden Subsets)</h4>
					<p>Unified algorithm covering pairs, triplets and k-tuples up to 9 elements. Automatically detects groups of cells sharing the same candidate set to eliminate possibilities elsewhere.</p>
					
					<h4>3. Line/Column/Block Intersections (Pointing and Claiming)</h4>
					<p>Analysis of intersections between blocks and lines/columns to identify candidates constrained to certain positions, allowing candidate elimination in adjacent zones.</p>
					
					<h4>4. X-Wing Pattern</h4>
					<p>Detection of X-Wing pattern on two parallel lines or columns, creating a diagonal pattern that allows eliminating candidates in concerned columns or lines.</p>
					
					<h4>5. Backtracking</h4>
					<p>Last resort algorithm using exhaustive exploration with backtracking for grids that human techniques cannot completely solve.</p>
				`
			},
			{
				type: 'text',
				title: 'Orchestration and Main Algorithm',
				underlined: true,
				content: `
					<p>The solver follows an optimized execution flow applying techniques in increasing complexity order:</p>
					
					<h4><strong>1. Note Initialization</strong></h4> 
					<p>Calculation of possible candidates for each empty cell</p>

					<h4><strong>2. Singleton Method</strong></h4> 
					<p>Resolution of obvious cells</p>

					<h4><strong>3. K-tuples Loop</strong></h4> 
					<p>Application of k-tuples for k=1 to 9</p>

					<h4><strong>4. Intersection Reductions</strong></h4> 
					<p>Analysis of block/line/column constraints</p>

					<h4><strong>5. X-Wing</strong></h4> 
					<p>Search for advanced patterns</p>

					<h4><strong>6. Backtracking</strong></h4> 
					<p>Last resort solution if no human technique progresses</p>
					
					<p>This approach guarantees efficient resolution: fast techniques solve most cases, and backtracking only intervenes for the most complex grids.</p>
				`
			},
			{
				type: 'text',
				title: 'My Main Contributions',
				underlined: true,
				content: `
					<h4>1. Modular Architecture and Project Structure</h4>
					<p>Design of general project architecture with clear separation of responsibilities. Interface definition between modules and coding convention standardization to facilitate teamwork.</p>
					
					<h4>2. Optimized Note Management System</h4>
					<p>Implementation of binary manipulation system for candidates allowing fast operations on notes. Development of basic functions (setnote, getnote) and pre-calculated bit counting system to optimize performance.</p>
					
					<h4>3. Generalized K-tuples Algorithms</h4>
					<p>Design and implementation of unified algorithm to detect naked and hidden k-tuples. Use of combination generation and binomial coefficient to systematically explore all possible groups.</p>
					
					<h4>4. Utility Functions and Debugging</h4>
					<p>Development of display and debugging tools allowing note state visualization and algorithm progress tracking. These tools were essential for validating complex technique proper functioning.</p>
				`
			},
			{
				type: 'text',
				title: 'Technical Challenges and Optimizations',
				underlined: true,
				content: `
					<h4>Advanced Binary Manipulation</h4>
					<p>Using integers to represent notes required mastery of bit-wise operations. We developed a pre-calculation system for bit counts and optimized functions for frequent operations.</p>
					
					<h4>Resolution Technique Integration</h4>
					<p>The main difficulty was creating an architecture allowing easy addition of new techniques while maintaining efficiency. We opted for a modular approach where each technique returns the number of modifications made.</p>
					`
			},
			{
				type: 'text',
				title: "Team Methodology and Organization",
				underlined: true,
				content: `
					<p>The project was conducted according to an agile methodology adapted to academic context:</p>
					
					<h4>Team Organization</h4>
					<ul>
						<li><strong>Maxime MARCHIVE</strong>: Complex algorithms</li>
						<li><strong>Ronan PLUTA FONTAINE</strong>: Team leader, technical architecture and k-tuples</li>
						<li><strong>Raphaël SIMON</strong>: Basic algorithms</li>
						<li><strong>Diewertje VAN DAM</strong>: Basic algorithms</li>
					</ul>
					
					<h4>Tools and Processes</h4>
					<ul>
						<li><strong>Version Control</strong>: Git</li>
						<li><strong>Documentation</strong>: LaTeX writing for professional rendering</li>
						<li><strong>Iterative Cycles</strong>: Sprint development with functional deliverables</li>
						<li><strong>Continuous Testing</strong>: Validation on reference grids at each iteration</li>
					</ul>
					
					<h4>Project Milestones</h4>
					<p>The project ran from September 2023 to April 2024 with clear milestones: requirements specification (November), progress report (January), and final presentation in English (March-April).</p>
				`
			},
			{
				type: 'text',
				title: 'Results and Performance',
				underlined: true,
				content: `
					<p>The final solver presents excellent performance on all tested grid sizes:</p>
					
					<h4>Technique Efficiency</h4>
					<ul>
						<li><strong>Easy to medium grids (9x9)</strong>: Solved only by human techniques in < 1ms</li>
						<li><strong>Difficult grids</strong>: Combination of techniques + limited backtracking</li>
						<li><strong>16x16 and 25x25 grids</strong>: Efficient management thanks to algorithmic optimizations</li>
					</ul>
					
					<h4>Robustness and Reliability</h4>
					<p>Validation on known reference grids, and respect for validity constraints (minimum 17 cells for 9x9 grids).</p>
					
					<h4>Extensibility</h4>
					<p>Modular architecture allowing easy addition of new techniques (Swordfish, Y-Wing, etc.) without modifying existing code. Solid foundation for future extensions.</p>
				`
			}
		],
		sources: [
			{
				name: 'University of Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Academic context and project supervision'
			},
			{
				name: 'GitHub Repository',
				url: 'https://github.com/Neopelta/sudoku-solver.git',
				description: 'Complete project source code with documentation'
			},
			{
				name: 'Sudoku.com Rules',
				url: 'https://sudoku.com/sudoku-rules',
				description: 'Reference for Sudoku rules and resolution techniques'
			},
			{
				name: 'Gordon Royle Research',
				url: 'https://staffhome.ecm.uwa.edu.au/~00013890/sudoku.html',
				description: 'Research on minimum 17 cells for 9x9 grids'
			}
		],
		downloads: [
			{
				title: 'Sudoku Resolution Method',
                // TODO: Update of the file to translate it into English
				filename: 'FR_SUDOKU_methods.pdf',
				description: 'PDF document detailing possible Sudoku resolution methods.',
				icon: '/images/logo/pdf/pdf-logo.svg'
			}
		]
	},
	'station-meteo': {
		title: 'BLE Connected Weather Station - Embedded IoT System',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>Complete IoT weather station developed in pairs as part of a BLE & Sensors project at the University of Poitiers. This embedded system acquires, processes and transmits environmental data (temperature, humidity, atmospheric pressure) via two communication modes: USB serial link and Bluetooth Low Energy to a real-time Qt graphical interface.</p>
				`
			},
			{
				type: 'text',
				title: 'System Architecture',
				underlined: true,
				content: `
					<p>The system relies on a modular architecture combining hardware and software with optimized data flow:</p>
					<ul>
						<li><strong>Sensor Layer</strong>: Environmental measurement acquisition via I2C protocol</li>
						<li><strong>Processing Layer</strong>: STM32L476RG for real-time processing and data formatting</li>
						<li><strong>Communication Layer</strong>: Dual serial (USB) and wireless (BLE) transmission</li>
						<li><strong>Visualization Layer</strong>: Qt application with real-time graphics and responsive interface</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Architecture and data flow',
				underlined: true,
				images: [
					{
						src: '/images/projects/station-meteo/flux_donnees.webp',
						alt: 'System data flow diagram',
						caption: 'Complete architecture: from sensors to visualization interface'
					},
					{
						src: '/images/projects/station-meteo/schema_pressure.webp',
						alt: 'LPS22HH pressure sensor technical diagram',
						caption: 'Detailed electronic diagram of pressure sensor'
					},
					{
						src: '/images/projects/station-meteo/schema_humidity_temp.webp',
						alt: 'HTS221 temperature/humidity sensor technical diagram',
						caption: 'Internal architecture of temperature and humidity sensors'
					}
				]
			},
			{
				type: 'text',
				title: 'Hardware and Technical Components',
				underlined: true,
				content: `
					<p>The project relies on a STMicroelectronics ecosystem:</p>
					
					<h4>Main Microcontroller</h4>
					<ul>
						<li><strong>STM32L476RG Nucleo</strong>: Cortex-M4 80MHz, 1MB Flash, 128KB SRAM</li>
						<li>Integrated peripherals: I2C, SPI, UART, Timer, EXTI</li>
						<li>Optimized for low-consumption IoT applications</li>
					</ul>
					
					<h4>Environmental Sensor Shield</h4>
					<ul>
						<li><strong>X-NUCLEO-IKS01A3</strong>: Multi-sensor MEMS platform</li>
						<li><strong>HTS221</strong>: Temperature (-40°C/+85°C) and relative humidity (0-100%)</li>
						<li><strong>LPS22HH</strong>: Barometric pressure (260-1260 hPa)</li>
						<li>I2C communication with automatic addressing</li>
					</ul>
					
					<h4>Wireless Communication Module</h4>
					<ul>
						<li><strong>X-NUCLEO-BNRG2A1</strong>: Bluetooth Low Energy BlueNRG-2 module</li>
						<li>GATT/ATT protocol for structured transmission</li>
						<li>10m range, optimized consumption</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'System hardware components',
				underlined: true,
				images: [
					{
						src: '/images/projects/station-meteo/L476RG.webp',
						alt: 'STM32L476RG Nucleo board with ARM microcontroller',
						caption: 'STM32L476RG Nucleo: embedded system core'
					},
					{
						src: '/images/projects/station-meteo/IKS01A3.webp',
						alt: 'X-NUCLEO-IKS01A3 shield with MEMS sensors',
						caption: 'X-NUCLEO-IKS01A3: environmental sensor platform'
					},
					{
						src: '/images/projects/station-meteo/BNRG2A1.webp',
						alt: 'X-NUCLEO-BNRG2A1 Bluetooth Low Energy module',
						caption: 'X-NUCLEO-BNRG2A1: professional BLE communication'
					}
				]
			},
			{
				type: 'text',
				title: 'Technical Challenges and Assembly Solutions',
				underlined: true,
				content: `
					<p>The project presented a major hardware incompatibility challenge between X-NUCLEO-IKS01A3 and X-NUCLEO-BNRG2A1 shields, designed to be stacked but presenting electrical conflicts.</p>
					
					<h4>Identified Problem</h4>
					<ul>
						<li>Pin conflicts between the two expansion shields</li>
						<li>Electrical incompatibilities at control signal level</li>
						<li>Impossibility of direct stacking according to documentation</li>
					</ul>
					
					<h4>Implemented Technical Solution</h4>
					<ul>
						<li><strong>Hybrid Assembly</strong>: Stacked BLE shield + sensors in wired connection</li>
						<li><strong>Electrical Isolation</strong>: Precise control of active connections</li>
						<li><strong>Manual Routing</strong>: Point-to-point wiring of critical I2C signals</li>
						<li><strong>Electrical Validation</strong>: Continuity tests and absence of short circuits</li>
					</ul>
				`
			},
			{
				type: 'images',
				title: 'Final assembly and technical solutions',
				underlined: true,
				images: [
					{
						src: '/images/projects/station-meteo/montage_station-meteo.webp',
						alt: 'Assembled weather station with hybrid board assembly',
						caption: 'Final assembly: hybrid solution to resolve incompatibilities'
					},
					{
						src: '/images/projects/station-meteo/montage_fils_1.webp',
						alt: 'Detail of wired connections between shields',
						caption: 'Wired connections on "X-NUCLEO-IKS01A3" board to isolate electrical conflicts'
					},
					{
						src: '/images/projects/station-meteo/montage_fils_2.webp',
						alt: 'Overview of manual wiring performed',
						caption: 'Manual routing on the "shield", itself on the "STM32L476RG Nucleo", for I2C signals and power supply'
					}
				]
			},
			{
				type: 'text',
				title: 'STM32 Embedded Development',
				underlined: true,
				content: `
					<p>The embedded part constitutes the technical core of the project, developed with STM32CubeIDE and HAL libraries:</p>
					
					<h4>Modular Software Architecture</h4>
					<ul>
						<li><strong>Hardware Abstraction Layer</strong>: HAL drivers for peripherals</li>
						<li><strong>Sensor Manager</strong>: Abstraction of specific I2C protocols</li>
						<li><strong>Communication Module</strong>: Unified serial and BLE routines</li>
						<li><strong>Real-time Scheduler</strong>: System timer for periodic acquisition (10s)</li>
					</ul>
					
					<h4>Optimized BLE Communication Protocol</h4>
					<p>Implementation of custom GATT protocol for efficient transmission:</p>
					<ul>
						<li><strong>Compact Data Structure</strong>: 10 bytes (timestamp 2B + pressure 4B + temperature 2B + humidity 2B)</li>
						<li><strong>Managed Endianness</strong>: Automatic conversion for multi-platform compatibility</li>
						<li><strong>Dedicated GATT Service</strong>: Environmental characteristic with notification</li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/activation_bits.webp',
						alt: 'Diagram of transmitted BLE data structure',
						caption: 'Optimized BLE data structure: 10 bytes for maximum efficiency'
					}
				]
			},
			{
				type: 'text',
				title: 'Qt Application: Professional User Interface',
				underlined: true,
				content: `
					<p>Modern desktop interface developed with Qt 6.8.3 and MVC architecture:</p>
					
					<h4>Qt Software Architecture</h4>
					<ul>
						<li><strong>CMake Build System</strong>: Cross-platform compilation</li>
						<li><strong>Specialized Qt Modules</strong>: SerialPort, Bluetooth, Widgets</li>
						<li><strong>QCustomPlot</strong>: Real-time graphics library</li>
						<li><strong>Reactive State Management</strong>: Automatic view updates</li>
					</ul>
					
					<h4>User Interface Features</h4>
					<ul>
						<li><strong>Dual Connection Mode</strong>: Serial port (USB) and Bluetooth LE by choice</li>
						<li><strong>Real-time Visualization</strong>: Animated graphics with history</li>
						<li><strong>Textual Dashboard</strong>: Precise digital display with units</li>
						<li><strong>Advanced Configuration</strong>: BLE scan, COM port selection</li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/qt_donnees_textuelles.webp',
						alt: 'Qt interface displaying real-time numerical data',
						caption: 'Textual data tab: instantaneous values with physical units'
					},
					{
						src: '/images/projects/station-meteo/qt_graphique.webp',
						alt: 'Real-time graphs of three environmental parameters',
						caption: 'Graphical visualization: temporal evolution of measurements'
					},
					{
						src: '/images/projects/station-meteo/qt_config_port_serie.webp',
						alt: 'Serial port connection configuration',
						caption: 'Serial configuration: automatic selection of available ports'
					},
					{
						src: '/images/projects/station-meteo/qt_config_bluetooth.webp',
						alt: 'Bluetooth configuration with BLE device scan',
						caption: 'Bluetooth configuration: automatic scan and BLE connection'
					}
				]
			},
			{
				type: 'text',
				title: 'My Main Technical Contributions',
				underlined: true,
				content: `
					<h4>1. System Architecture and Global Design</h4>
					<p>Definition of complete project architecture with my partner, from communication protocol specification to final user interface.</p>
					
					<h4>2. Hardware Incompatibility Resolution</h4>
					<p>Analysis of shield conflicts and hybrid assembly solution design. Identification of critical signals, manual wiring design and complete electrical validation of the system.</p>
					
					<h4>3. Advanced Qt Interface Development</h4>
					<p>Complete desktop application implementation with my partner, managing both communication modes. Development of real-time graphics system with QCustomPlot, responsive interface and communication error handling.</p>
				`
			},
			{
				type: 'text',
				title: 'Validation and Testing',
				underlined: true,
				content: `
					<p>System validation with official STMicroelectronics tools:</p>
					
					<h4>ST BLE Sensor Application</h4>
					<ul>
						<li><strong>Automatic Recognition</strong>: The system is detected</li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/app_STBLE_sensor_classic.webp',
						alt: 'ST BLE Sensor mobile app displaying our data',
						caption: "Assembly recognition in ST BLE Sensor app: environmental data display"
					}
				]
			},
			{
				type: 'text',
				title: 'Development Technologies and Tools',
				underlined: true,
				content: `
					<h4>Embedded Part</h4>
					<ul>
						<li><strong>STM32CubeIDE</strong>: Eclipse-based integrated development environment</li>
						<li><strong>STM32CubeMX</strong>: Graphical peripheral configurator</li>
						<li><strong>HAL Libraries</strong>: STMicroelectronics hardware abstraction</li>
					</ul>
					
					<h4>Desktop Application</h4>
					<ul>
						<li><strong>Qt 6.8.3</strong>: Cross-platform framework</li>
						<li><strong>CMake</strong>: Build system</li>
						<li><strong>QCustomPlot</strong>: Graphics library</li>
						<li><strong>QtBluetooth & QtSerialPort</strong>: Communication modules</li>
					</ul>
					
					<h4>Tools and Methodology</h4>
					<ul>
						<li><strong>Git</strong>: Version control with feature branches</li>
						<li><strong>Qt Creator 16</strong></li>
					</ul>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/station-meteo/logo_qt.webp',
						alt: 'Qt Framework logo',
						caption: 'Qt 6.8.3: Modern framework for desktop interface'
					},
					{
						src: '/images/projects/station-meteo/logo_st.webp',
						alt: 'STMicroelectronics logo',
						caption: 'STMicroelectronics: Professional embedded ecosystem'
					}
				]
			},
			{
				type: 'text',
				title: 'Results and Educational Impact',
				underlined: true,
				content: `
					<p>This project represents a complete technical achievement combining hardware, embedded software and user interface:</p>
					
					<h4>Technical Achievements</h4>
					<ul>
						<li><strong>Functional IoT System</strong>: Real-time acquisition, processing and transmission</li>
						<li><strong>Dual-mode Communication</strong>: Usage flexibility serial and wireless</li>
						<li><strong>Interface</strong>: Desktop application with real-time graphics</li>
					</ul>
					
					<h4>Developed Skills</h4>
					<ul>
						<li><strong>Embedded Programming</strong>: STM32, I2C/SPI protocols, real-time</li>
						<li><strong>Interface Development</strong>: Qt, MVC, user experience</li>
						<li><strong>Problem Solving</strong>: Hardware debugging, conflict analysis</li>
					</ul>
					
					<h4>Evolution Perspective</h4>
					<p>Solid foundation for future extensions: sensor addition, data storage, web interfaces, or deployment in distributed sensor networks.</p>
				`
			}
		],
		sources: [
			{
				name: 'University of Poitiers',
				url: 'https://www.univ-poitiers.fr',
				description: 'Academic context - BLE & Sensors Project Master 1'
			},
			{
				name: 'STMicroelectronics Developer Zone',
				url: 'https://www.st.com/en/development-tools.html',
				description: 'STM32 and X-NUCLEO shields technical documentation'
			},
			{
				name: 'Qt Documentation',
				url: 'https://doc.qt.io/',
				description: 'Official Qt 6.8.3 and modules documentation'
			},
			{
				name: 'GitHub Repository',
				url: 'https://github.com/Neopelta/station-meteo',
				description: 'Complete source code with technical documentation'
			},
			{
				name: 'ST BLE Sensor App',
				url: 'https://www.st.com/en/embedded-software/stblesensor.html',
				description: 'Official Bluetooth LE validation application'
			}
		]
	},
	portfolio: {
		title: 'Personal Portfolio - Modern and Performant Website',
		contentBlocks: [
			{
				type: 'text',
				content: `
					<p>This portfolio addresses a concrete need: having a professional showcase that presents my projects. Rather than using an existing solution, I chose to develop my own site - an approach that allows demonstrating my web development skills.</p>
					
					<p>The project evolves constantly, allowing me to experiment with new technologies and refine my development practices as I learn.</p>
				`
			},
			{
				type: 'text',
				title: 'Technical Choice: SvelteKit',
				underlined: true,
				content: `
					<p>The discovery of SvelteKit came following a recommendation from my brother, who showed me <a href="https://anotherpp.vercel.app/" target="_blank" rel="noopener">a poker planning application</a> developed with this technology. The performant interface and fluidity of the user experience convinced me to deepen the subject.</p>
					
					<p>SvelteKit offers an innovative approach: compiling code at build time rather than embedding a heavy client-side framework. This philosophy perfectly matches the performance and eco-design issues that matter to me.</p>
					
					<p>The result? A site generating optimized vanilla JavaScript, without runtime overhead.</p>
				`
			},
			{
				type: 'text',
				title: 'Architecture and Deployment',
				underlined: true,
				content: `
					<p>The chosen architecture relies on static generation with SvelteKit's adapter-static. The site becomes a set of HTML/CSS/JS files hosted on an Apache server at OVH, an approach that guarantees reliability and optimal performance.</p>
					
					<p>This solution presents several technical advantages:</p>
					<ul>
						<li>Theoretically excellent performance thanks to absence of server processing</li>
						<li>Reinforced security due to application's static nature</li>
						<li>Deployment simplicity and controlled hosting costs</li>
						<li>Natural scalability for load increases</li>
					</ul>
					
					<p>Apache configuration integrates URL rewriting to handle client-side routing, while Vite automatically manages build optimizations in production mode.</p>
				`
			},
			{
				type: 'text',
				title: 'Technical Optimizations and Ecological Impact',
				underlined: true,
				content: `
					<p>Ecological impact constitutes a major issue in my development choices for this website. I implemented several optimizations to reduce carbon footprint: conversion of all images to WebP format to reduce their weight, lazy loading of images with native HTML attribute, and automatic minification managed by Vite in production mode.</p>
					
					<p>I regularly monitor Lighthouse scores and test carbon footprint with Website Carbon Calculator. The objective is to obtain a site that loads quickly and consumes few resources to limit its environmental impact. Bonus point: even with a weak internet connection, the site will have more ease loading.</p>
					`
			},
			{
				type: 'text',
				title: 'Accessibility and Web Standards',
				underlined: true,
				content: `
					<p>Accessibility was integrated from design to guarantee universal site usage. I applied good practices: complete keyboard navigation, optimized contrasts, correct HTML semantics, and textual alternatives for all non-textual content.</p>
					
					<p>I use the RGAA Assistant extension for Chrome to validate compliance with WCAG standards. RGAA takes exactly the same criteria as WCAG 2.1, but with a very precise and detailed French evaluation method - a methodical tool to ensure quality accessibility.</p>
					
					<p>This approach is part of an inclusive vision of web development, where accessibility becomes a factor of continuous improvement rather than a constraint.</p>
				`
			},
			{
				type: 'text',
				title: 'SEO and Technical Referencing',
				underlined: true,
				content: `
					<p>Search engine optimization relies on a structured technical approach: automatic XML sitemap generation, Open Graph metadata to optimize social media sharing, robots.txt configuration, and semantically coherent content architecture.</p>
					
					<p>The SiteChecker extension for Chrome allows me to regularly validate these optimizations and identify improvement areas. This continuous monitoring guarantees maintenance of SEO good practices.</p>
				`
			},
			{
				type: 'text',
				title: 'Visual Identity: Creating the Pixel Art Avatar',
				underlined: true,
				content: `
					<p>The site's visual identity relies on a pixel art avatar created entirely with Aseprite. This aesthetic choice brings controlled originality while maintaining a suitable level of professionalism.</p>
					
					<p>Technical development includes two variants (neutral and speaking) and optimized CSS implementation with <code>image-rendering: pixelated</code> to guarantee faithful rendering to pixel art style.</p>
					
					<p>Aseprite source files are available for download in the "Documents to Download" section.</p>
				`
			},
			{
				type: 'images',
				images: [
					{
						src: '/images/projects/portfolio/avatar_default.webp',
						alt: 'Default pixel art avatar version',
						caption: 'Pixel art avatar - Default version used on site'
					},
					{
						src: '/images/projects/portfolio/avatar_speak.webp',
						alt: 'Speaking pixel art avatar version',
						caption: 'Pixel art avatar - Interactive version to dynamize interface'
					},
					{
						src: '/images/projects/portfolio/avatar-og.webp',
						alt: 'Avatar optimized for Open Graph',
						caption: 'Open Graph version optimized for social media sharing'
					}
				]
			},
			{
				type: 'text',
				title: 'Continuous Evolution',
				underlined: true,
				content: `
					<p>This portfolio constitutes a living project that continuously evolves with my learning and emergence of new technologies. This iterative approach allows me to maintain active technical watch while perfecting my development skills.</p>
				`
			}
		],
		sources: [
			{
				name: 'SvelteKit Documentation',
				url: 'https://kit.svelte.dev/',
				description: 'Official documentation of used framework'
			},
			{
				name: 'WCAG Guidelines',
				url: 'https://www.w3.org/WAI/WCAG21/quickref/',
				description: 'Respected web accessibility standards'
			},
			{
				name: 'Website Carbon Calculator',
				url: 'https://www.websitecarbon.com/website/neopelta-fr/',
				description: 'Carbon footprint measurement tool'
			},
			{
				name: 'SiteChecker SEO Extension',
				url: 'https://sitechecker.pro/seo-chrome-extension/',
				description: 'SEO verification tool for Chrome'
			},
			{
				name: 'RGAA Assistant',
				url: 'https://design.numerique.gouv.fr/articles/2021-10-06-assistant-rgaa/',
				description: 'Extension to validate web accessibility according to RGAA'
			},
			{
				name: 'Aseprite',
				url: 'https://www.aseprite.org/',
				description: 'Software used for pixel art avatar creation'
			}
		],
		downloads: [
			{
				title: 'Pixel Art Avatar - Source Files',
				filename: 'neopelta-avatar.zip',
				description: 'Complete archive containing Aseprite source files (.ase) and all optimized exports (PNG, WebP, SVG).',
				icon: '/images/logo/zip/zip-logo.svg'
			}
		]
	}
};