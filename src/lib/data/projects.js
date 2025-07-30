export async function getProjects(lang = 'fr') {
	try {
		const module = await import(`./projects-${lang}.js`);
		return module.projects;
	} catch (error) {
		console.warn(`Failed to load projects for language: ${lang}, falling back to French`);
		const fallbackModule = await import('./projects-fr.js');
		return fallbackModule.projects;
	}
}

export async function getFeaturedProjects(lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.filter((project) => project.featured);
}

export async function getProjectsByCategory(category, lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.filter((project) => project.category === category);
}

export async function getProjectsByYear(year, lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.filter((project) => project.date === year);
}

export async function getProjectsByTechnology(tech, lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.filter((project) => project.technologies.some((t) => t.name === tech));
}

export async function searchProjects(searchTerm, lang = 'fr') {
	const projects = await getProjects(lang);
	const term = searchTerm.toLowerCase();
	return projects.filter(
		(project) =>
			project.title.toLowerCase().includes(term) ||
			project.description.toLowerCase().includes(term) ||
			project.tags.some((tag) => tag.toLowerCase().includes(term))
	);
}

export async function getUniqueYears(lang = 'fr') {
	const projects = await getProjects(lang);
	return [...new Set(projects.map((p) => p.date))].sort().reverse();
}

export async function getUniqueTechnologies(lang = 'fr') {
	const projects = await getProjects(lang);
	return [...new Set(projects.flatMap((p) => p.technologies.map((t) => t.name)))].sort();
}

export async function getUniqueCategories(lang = 'fr') {
	const projects = await getProjects(lang);
	return [...new Set(projects.map((p) => p.category))].sort();
}

export async function getProjectsCount(lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.length;
}

export async function getFeaturedProjectsCount(lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.filter((p) => p.featured).length;
}

export async function getProjectsStats(lang = 'fr') {
	const projects = await getProjects(lang);
	const categories = await getUniqueCategories(lang);
	const years = await getUniqueYears(lang);
	const technologies = await getUniqueTechnologies(lang);

	return {
		total: projects.length,
		featured: projects.filter((p) => p.featured).length,
		byCategory: categories.reduce((acc, cat) => {
			acc[cat] = projects.filter((p) => p.category === cat).length;
			return acc;
		}, {}),
		byYear: years.reduce((acc, year) => {
			acc[year] = projects.filter((p) => p.date === year).length;
			return acc;
		}, {}),
		technologies: technologies.reduce((acc, tech) => {
			acc[tech] = projects.filter((p) => p.technologies.some((t) => t.name === tech)).length;
			return acc;
		}, {})
	};
}

export async function getProjectById(id, lang = 'fr') {
	const projects = await getProjects(lang);
	return projects.find(p => p.id === id);
}