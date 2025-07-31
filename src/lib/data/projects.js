export async function getProjectsAsync(lang = 'fr') {
	try {
		const module = await import(`../i18n/locales/projects-${lang}.js`);
		return module.projects;
	} catch (error) {
		console.warn(`Failed to load projects for language: ${lang}, falling back to French`);
		const fallbackModule = await import('../i18n/locales/projects-fr.js');
		return fallbackModule.projects;
	}
}

export async function getFeaturedProjectsAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.filter((project) => project.featured);
}

export async function getProjectsByCategoryAsync(category, lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.filter((project) => project.category === category);
}

export async function getProjectsByYearAsync(year, lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.filter((project) => project.date === year);
}

export async function getProjectsByTechnologyAsync(tech, lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.filter((project) => project.technologies.some((t) => t.name === tech));
}

export async function searchProjectsAsync(searchTerm, lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	const term = searchTerm.toLowerCase();
	return projects.filter(
		(project) =>
			project.title.toLowerCase().includes(term) ||
			project.description.toLowerCase().includes(term) ||
			project.tags.some((tag) => tag.toLowerCase().includes(term))
	);
}

export async function getUniqueYearsAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return [...new Set(projects.map((p) => p.date))].sort().reverse();
}

export async function getUniqueTechnologiesAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return [...new Set(projects.flatMap((p) => p.technologies.map((t) => t.name)))].sort();
}

export async function getUniqueCategoriesAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return [...new Set(projects.map((p) => p.category))].sort();
}

export async function getProjectsCountAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.length;
}

export async function getFeaturedProjectsCountAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.filter((p) => p.featured).length;
}

export async function getProjectsStatsAsync(lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	const categories = await getUniqueCategoriesAsync(lang);
	const years = await getUniqueYearsAsync(lang);
	const technologies = await getUniqueTechnologiesAsync(lang);

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

export async function getProjectByIdAsync(id, lang = 'fr') {
	const projects = await getProjectsAsync(lang);
	return projects.find(p => p.id === id);
}