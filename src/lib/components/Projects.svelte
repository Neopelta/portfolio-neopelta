<script>
	import { onMount, getContext } from 'svelte';
	import { _ } from 'svelte-i18n';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import { getFeaturedProjectsAsync, getProjectsCountAsync } from '$lib/data/projects.js';

	let featuredProjects = [];
	let totalProjectsCount = 0;
	let loading = true;

	const langStore = getContext('lang');
	$: currentLang = langStore ? $langStore : 'fr';
	$: if (currentLang) {
		loadProjects(currentLang);
	}

	async function loadProjects(lang) {
		try {
			loading = true;
			[featuredProjects, totalProjectsCount] = await Promise.all([
				getFeaturedProjectsAsync(lang),
				getProjectsCountAsync(lang)
			]);
		} catch (error) {
			console.error('Error loading projects:', error);
			featuredProjects = [];
			totalProjectsCount = 0;
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadProjects(currentLang);
	});
</script>

<section id="projects" class="section">
	<div class="projects">
		<div class="projects-header">
			<h2 class="section-title">{$_('projects.title')}</h2>
			<a href="/{currentLang}/projects" class="view-all-link">
				{$_('projects.view_all', { values: { count: totalProjectsCount } })}
			</a>
		</div>

		<ProjectsGrid
			class="projects-grid"
			projects={featuredProjects}
			{loading}
			emptyMessage={$_('projects.no_projects')}
		/>

		<div class="projects-footer">
			<a href="/{currentLang}/projects" class="view-all-button">{$_('projects.discover_all')}</a>
		</div>
	</div>
</section>

<style>
	.projects {
		margin-bottom: var(--spacing-xl);
	}

	.projects-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: var(--spacing-lg);
	}

	.view-all-link {
		color: var(--color-green);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.view-all-link:hover {
		text-decoration: underline;
	}

	.projects-footer {
		text-align: center;
	}

	.view-all-button {
		display: inline-block;
		padding: var(--spacing-sm) var(--spacing-md);
		background: var(--color-green);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 500;
		transition: background-color 0.2s ease;
	}

	.view-all-button:hover {
		background: var(--color-green-hover);
	}

	@media (max-width: 600px) {
		.projects-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-xs);
		}
	}
</style>
