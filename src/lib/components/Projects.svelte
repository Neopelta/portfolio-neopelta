<script>
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import { projects } from '$lib/data/projects.js';
	import { filterOptions } from '$lib/stores/projectsStore.js';

	$: featuredProjects = projects.filter((project) => project.featured);
	$: totalProjectsCount = projects.length;
</script>

<section id="projects" class="section">
	<div class="projects">
		<div class="projects-header">
			<h2 class="section-title">Projets récents</h2>
			<a href="/projects" class="view-all-link">
				Voir tous les projets ({totalProjectsCount}) →
			</a>
		</div>

		<ProjectsGrid
			class="projects-grid"
			projects={featuredProjects}
			emptyMessage="Aucun projet vedette pour le moment."
		/>

		<div class="projects-footer">
			<a href="/projects" class="view-all-button"> Découvrir tous mes projets </a>
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
