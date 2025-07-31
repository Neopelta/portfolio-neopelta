import { getProjectsAsync } from '$lib/data/projects.js';
import { getProjectDetailsAsync } from '$lib/data/projectDetails.js';
import { supportedLocales, setupI18n, defaultLocale } from '$lib/i18n';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params, url }) {
	const { slug, lang } = params;

	if (!supportedLocales.includes(lang)) {
		const correctPath = url.pathname.replace(`/${lang}`, `/${defaultLocale}`);
		throw redirect(302, correctPath);
	}

	const projects = await getProjectsAsync(lang);

	const project = projects.find((p) => p.id === slug);
	if (!project) {
		throw error(404, 'Project not found');
	}

	await setupI18n(lang);

	const currentIndex = projects.findIndex((p) => p.id === slug);
	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

	const candidateSimilarProjects = projects
		.filter((p) => p.id !== slug)
		.filter(
			(p) =>
				p.category === project.category ||
				p.technologies.some((tech) =>
					project.technologies.some((pTech) => pTech.name === tech.name)
				)
		);

	let similarProjects = [];
	if (candidateSimilarProjects.length <= 2) {
		similarProjects = candidateSimilarProjects;
	} else {
		const shuffled = [...candidateSimilarProjects].sort(() => 0.5 - Math.random());
		similarProjects = shuffled.slice(0, 2);
	}

	// Charger les détails du projet avec gestion d'erreur
	let projectDetails = null;
	try {
		projectDetails = await getProjectDetailsAsync(slug, lang);

		// S'assurer que toutes les propriétés sont des tableaux par défaut
		if (projectDetails) {
			projectDetails = {
				title: projectDetails.title || '',
				content: projectDetails.content || '',
				contentBlocks: projectDetails.contentBlocks || [],
				images: projectDetails.images || [],
				codeSnippets: projectDetails.codeSnippets || [],
				sources: projectDetails.sources || [],
				downloads: projectDetails.downloads || []
			};
		}
	} catch (detailsError) {
		console.warn(`Failed to load project details for ${slug}:`, detailsError);
		// Continuer sans les détails plutôt que de planter
		projectDetails = null;
	}

	return {
		project,
		prevProject,
		nextProject,
		similarProjects,
		projectDetails,
		lang
	};
}

export async function entries() {
	const projectEntries = [];

	for (const lang of supportedLocales) {
		try {
			const projects = await getProjectsAsync(lang);
			for (const project of projects) {
				projectEntries.push({ lang, slug: project.id });
			}
		} catch (error) {
			console.warn(`Failed to load projects for ${lang}:`, error);
		}
	}

	return projectEntries;
}

export const prerender = true;
export const trailingSlash = 'never';
