<script>
	import { onMount, getContext } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import ProjectsFilters from '$lib/components/ProjectsFilters.svelte';
	import ProjectsPagination from '$lib/components/ProjectsPagination.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import {
		filteredProjects,
		paginatedProjects,
		projectsMetadata,
		projectsActions
	} from '$lib/stores/projectsStore.js';
	import '../../../app.css';

	const langStore = getContext('lang');
	$: currentLang = langStore ? $langStore : 'fr';

	let loading = true;

	$: if (currentLang) {
		loadProjectsForLanguage(currentLang);
	}

	async function loadProjectsForLanguage(lang) {
		loading = true;
		await projectsActions.loadProjects(lang);
		loading = false;
	}

	onMount(async () => {
		await loadProjectsForLanguage(currentLang);

		if (browser) {
			const urlParams = new URLSearchParams($page.url.search);

			if (urlParams.get('category')) {
				projectsActions.setFilter('category', urlParams.get('category'));
			}
			if (urlParams.get('technology')) {
				projectsActions.setFilter('technology', urlParams.get('technology'));
			}
			if (urlParams.get('year')) {
				projectsActions.setFilter('year', urlParams.get('year'));
			}
			if (urlParams.get('search')) {
				projectsActions.setFilter('search', urlParams.get('search'));
			}
		}
	});

	$: if (browser && $projectsMetadata.currentPage) {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>{$_('projects.all_projects')} - {$_('hero.name')}</title>
	<meta name="description" content={$_('projects.all_projects_subtitle')} />
	<link rel="canonical" href="https://www.neopelta.fr/{currentLang}/projects" />
</svelte:head>

<Navigation />

<main class="container">
	<div class="page-header">
		<h1>{$_('projects.all_projects')}</h1>
		<h2>{$_('projects.all_projects_subtitle')}</h2>
	</div>

	<ProjectsFilters />

	<div class="results-info">
		<p>{$_('projects.projects_found', { values: { count: $filteredProjects.length } })}</p>
	</div>

	<ProjectsGrid
		projects={$paginatedProjects}
		{loading}
		emptyMessage={$_('projects.no_projects')}
		emptyAction={projectsActions.resetFilters}
		emptyActionText={$_('projects.reset_filters')}
	/>

	<ProjectsPagination />

	<div class="back-home">
		<a href="/{currentLang}" class="back-link">{$_('projects.back_home')}</a>
	</div>
</main>

<Footer />

<style>
	.page-header {
		text-align: center;
		margin: var(--spacing-xl) 0;
	}

	.page-header h1 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.results-info {
		margin-bottom: var(--spacing-md);
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	.back-home {
		text-align: center;
		margin: var(--spacing-xl) 0;
		padding-top: var(--spacing-xl);
		border-top: 1px solid var(--color-border);
	}

	.back-link {
		color: var(--color-green);
		text-decoration: none;
		font-weight: 500;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.page-header h2 {
		font-weight: normal;
	}

	@media (max-width: 600px) {
		.page-header h1 {
			font-size: 2rem;
		}
	}
</style>
