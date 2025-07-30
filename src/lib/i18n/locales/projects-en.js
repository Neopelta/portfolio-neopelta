export const projects = [
	{
		id: 'gamfed-quiz',
		title: 'Gamfed Quiz',
		description:
			"Android application for judges of the New Aquitaine Gymnastics Federation. Developed by a team of 4, this application allows learning and reviewing concepts, symbols and rules of men's artistic gymnastics on different apparatus. The system includes interactive quizzes with scoring and progress tracking.",
		date: '2025',
		category: 'Mobile',
		featured: true,
		technologies: [
			{ name: 'Android', highlighted: true },
			{ name: 'Java', highlighted: true },
			{ name: 'Room (SQLite)', highlighted: false }
		],
		image: '/images/projects/gamfed/gamfed-project.webp',
		alt: 'Gamfed quiz interface with multiple choice questions',
		tags: ['Android', 'Mobile', 'Quiz', 'Sport']
	},
	{
		id: 'survival-quiz',
		title: 'Survival Quiz',
		description:
			"Time survival quiz on Android with PDF certificate generation. Adaptive day/night interface, multilingual support and results history via Room Database. Developed in pairs as part of the mobile HCI course.",
		date: '2025',
		category: 'Mobile',
		featured: false,
		technologies: [
			{ name: 'Android', highlighted: true },
			{ name: 'Java', highlighted: true },
			{ name: 'Room (SQLite)', highlighted: false }
		],
		git: 'https://github.com/Neopelta/survival-quiz.git',
		image: '/images/projects/survival-quiz/survival-quiz-project.webp',
		alt: 'Survival Quiz home page',
		tags: ['Android', 'Mobile', 'Quiz', 'PDF']
	},
	{
		id: 'portfolio',
		title: 'Personal Portfolio',
		description:
			'My personal portfolio developed in SvelteKit, showcasing my projects, skills and experiences.',
		date: '2025',
		category: 'Web',
		featured: false,
		technologies: [
			{ name: 'SvelteKit', highlighted: true },
			{ name: 'HTML', highlighted: false },
			{ name: 'CSS', highlighted: false },
			{ name: 'JavaScript', highlighted: false }
		],
		git: 'https://github.com/Neopelta/portfolio-neopelta.git',
		image: '/images/projects/portfolio/portfolio_home.webp',
		alt: 'Screenshot of personal portfolio with Projects, Skills and Contact sections',
		tags: ['Web', 'Portfolio', 'Responsive']
	},
	{
		id: 'skilltracker',
		title: 'SkillTracker',
		description:
			'Technical skills tracking application with customizable dashboard. Developed in React with an Express.js backend, this project allows users to track their progress.',
		date: '2025',
		category: 'Web',
		featured: true,
		technologies: [
			{ name: 'React', highlighted: true },
			{ name: 'Express.js', highlighted: true },
			{ name: 'Discord API', highlighted: false },
			{ name: 'Google Sheets API', highlighted: false }
		],
		git: 'https://github.com/Neopelta/SkillTracker.git',
		image: '/images/projects/skilltracker/skillTracker-project.webp',
		alt: 'SkillTracker dashboard with progress charts',
		tags: ['Web', 'React', 'API', 'Dashboard']
	},
	{
		id: '3d-car-configurator',
		title: '3D Car Configurator',
		description:
			"Unity application developed as part of the HCI course at the University of Poitiers. Pair project creating 3 reusable custom widgets: ColorMixer to blend and apply colors, 2D Carousel to navigate between wheels, and Rotation Joystick to control vehicle rotation. Modular architecture with Prefab conversion for reuse.",
		date: '2025',
		category: 'Game/3D',
		featured: false,
		technologies: [
			{ name: 'Unity 3D', highlighted: true },
			{ name: 'C#', highlighted: true },
			{ name: 'Blender', highlighted: false }
		],
		git: 'https://github.com/Neopelta/3D_car_configurator.git',
		image: '/images/projects/3D-car-config/3D_car_configurator-project.webp',
		alt: '3D car configurator interface with ColorMixer, Carousel and Joystick widgets',
		tags: ['Unity', '3D', 'HCI', 'Widgets']
	},
	{
		id: 'station-meteo',
		title: 'BLE Connected Weather Station',
		description: "IoT weather station based on STM32 with environmental sensors (temperature, humidity, pressure). Dual wired/Bluetooth Low Energy communication to real-time Qt graphical interface. University project integrating embedded programming, wireless protocols and HMI development.",
		date: '2025',
		category: 'Embedded',
		featured: false,
		technologies: [
			{ name: 'STM32', highlighted: true },
			{ name: 'Qt', highlighted: true },
			{ name: 'C++', highlighted: false },
			{ name: 'Bluetooth LE', highlighted: true },
			{ name: 'I2C', highlighted: false },
			{ name: 'CMake', highlighted: false }
		],
		git: 'https://github.com/Neopelta/station-meteo/tree/master',
		image: '/images/projects/station-meteo/montage_station-meteo.webp',
		alt: 'STM32 connected weather station with sensors and Qt interface displaying real-time charts',
		tags: ['STM32', 'Qt', 'C++', 'IoT', 'BLE', 'Sensors', 'Real-time', 'Embedded']
	},
	{
		id: 'kapture-game',
		title: 'Kapture Game',
		description:
			"Turn-based strategy game developed in C++. Tactical combat with 3 unit types (Scout, Shock Troop, Cannon Fodder) on varied terrain. Objective: capture the enemy flag and bring it back to base. Includes fog of war, complex combat system and terrain management with different movement costs.",
		date: '2024',
		category: 'Game/3D',
		featured: false,
		technologies: [
			{ name: 'C++', highlighted: true },
			{ name: 'CMake', highlighted: false }
		],
		git: 'https://github.com/Neopelta/kapture-game.git',
		image: '/images/projects/kapture/kapture-game.webp',
		alt: 'Screenshot of Kapture game in Linux terminal',
		tags: ['C++', 'Strategy', 'Terminal', 'Tactical']
	},
	{
		id: 'sudoku-solver',
		title: 'Sudoku Solver',
		description:
			"Sudoku solver in C combining advanced logic and backtracking. The program first applies note reduction techniques (X-Wing, k-tuples) and block analysis, then uses backtracking as a fallback solution.",
		date: '2024',
		category: 'Desktop',
		featured: true,
		technologies: [{ name: 'C', highlighted: true }],
		git: 'https://github.com/Neopelta/sudoku-solver.git',
		image: '/images/projects/sudoku/sudoku-image.webp',
		alt: 'Screenshot of a Linux terminal with a solved sudoku',
		tags: ['C', 'Algorithm', 'Logic', 'Backtracking']
	},
	{
		id: 'polysyllogism-validator',
		title: 'Polysyllogism Validator',
		description:
			'Educational tool in TypeScript to validate logical reasoning. Developed by a team of 5 over 3 months, this project allows students to verify the validity of their syllogisms.',
		date: '2024',
		category: 'Web',
		featured: true,
		technologies: [
			{ name: 'TypeScript', highlighted: true },
			{ name: 'HTML', highlighted: false },
			{ name: 'CSS', highlighted: false }
		],
		git: 'https://github.com/Neopelta/polysyllogisme.git',
		image: '/images/projects/polysyllogism/syllogisme-project(guide).webp',
		alt: 'Polysyllogism validator interface with input form',
		tags: ['TypeScript', 'Education', 'Logic', 'Team']
	},
	{
		id: 'the-cave',
		title: 'The Cave',
		description:
			"Text adventure game inspired by Colossal Cave Adventure developed in Java. The player embodies Dave, a hero trapped in a mysterious cave from which no one has ever returned alive. Tactical combat system, inventory management, dynamic merchants and random events.",
		date: '2023',
		category: 'Game/3D',
		featured: false,
		technologies: [{ name: 'Java', highlighted: true }],
		git: 'https://github.com/Neopelta/The-Cave.git',
		image: '/images/projects/the-cave/the-cave-intro.webp',
		alt: 'The Cave - Introduction with a character in a cave',
		tags: ['Java', 'Adventure', 'Text', 'RPG']
	},
	{
		id: 'towerdefend',
		title: 'TowerDefend',
		description:
			"Automatic tower defense simulation developed in C with SDL2. The player observes in real time a strategic battle between defensive towers and enemy units. Automatic unit generation, combat system with attack visualization via red lines, and dual save system (binary/sequential). Student project realized in pairs.",
		date: '2023',
		category: 'Game/3D',
		featured: false,
		technologies: [
			{ name: 'C', highlighted: true },
			{ name: 'SDL2', highlighted: false }
		],
		git: 'https://github.com/Neopelta/Towerdefends.git',
		image: '/images/projects/towerdefends/towerdefends-project.webp',
		alt: 'TowerDefend simulation with defensive towers and enemy units on a game board',
		tags: ['C', 'SDL2', 'Strategy', 'Simulation']
	},
	{
		id: 'tetris',
		title: 'Tetris',
		description:
			"Complete Tetris game developed in OCaml as part of a student project in pairs. Implementation of the 7 classic shapes with authentic rotations, complete lines system, progressive score and Game Over screen. Uses OCaml's Graphics library for the graphical interface.",
		date: '2022',
		category: 'Game/3D',
		featured: false,
		technologies: [{ name: 'OCaml', highlighted: true }],
		git: 'https://github.com/Neopelta/tetris.git',
		image: '/images/projects/tetris/tetris-gameplay.webp',
		alt: 'Tetris game in progress with different colored shapes',
		tags: ['OCaml', 'Classic', 'Puzzle', 'Graphics']
	},
	{
		id: 'dinomonie',
		title: 'Dinomonie',
		description:
			"Website presenting a collection of video games in the form of a 'video game ceremony'. University project developed in HTML/CSS/JavaScript with a focus on accessibility, including detailed game sheets, a prize and reward system, and a questionnaire form. Responsive design with Luciole font specially adapted for the visually impaired.",
		date: '2022',
		category: 'Web',
		featured: false,
		technologies: [
			{ name: 'XHTML', highlighted: true },
			{ name: 'CSS', highlighted: true },
			{ name: 'JavaScript', highlighted: true }
		],
		git: 'https://github.com/Neopelta/dinomonie.git',
		image: '/images/projects/dinomonie/La-Dinomonie-La-ceremonie-des-jeux-video.webp',
		alt: 'Dinomonie homepage - The video game ceremony',
		tags: ['Web', 'Accessibility', 'Responsive', 'Ceremony']
	}
];