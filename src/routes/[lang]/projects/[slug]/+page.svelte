<script>
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';
	import { getProjectDetails } from '$lib/data/projectDetails.js';
	import '../../../../app.css';

	export let data;

	$: ({ project, prevProject, nextProject, similarProjects } = data);
	$: currentLang = data.lang;

	afterNavigate(({ from, to }) => {
		if (from && to && from.route.id === '/[lang]/projects/[slug]' && to.route.id === '/[lang]/projects/[slug]') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});
</script>

<svelte:head>
	<title>{project.title} - {$_('hero.name')}</title>
	<meta name="description" content={project.description} />
	<link rel="canonical" href="https://www.neopelta.fr/{currentLang}/projects/{project.id}" />
	<meta property="og:title" content="{project.title} - {$_('hero.name')}" />
	<meta property="og:description" content={project.description} />
	<meta property="og:image" content={project.image} />
</svelte:head>

<Navigation />

<main class="container">
	<nav class="breadcrumb">
		<a href="/{currentLang}">Accueil</a>
		<span class="separator">→</span>
		<a href="/{currentLang}/projects">{$_('projects.all_projects_nav')}</a>
		<span class="separator">→</span>
		<span class="current">{project.title}</span>
	</nav>

	<header class="project-header">
		<div class="project-image-container">
			{#if project.image}
				<img 
					src={project.image} 
					alt={project.alt || project.title} 
					title={project.title}
					class="project-image" />
			{:else}
				<div class="project-image-placeholder">
					<Avatar size="large" />
				</div>
			{/if}
		</div>

		<div class="project-info">
			<div class="project-meta">
				<span class="project-category">{project.category}</span>
				<span class="project-date">{project.date}</span>
			</div>

			<h1 class="project-title">{project.title}</h1>

			<div class="project-technologies">
				{#each project.technologies as tech}
					<span class="tech-tag" class:highlighted={tech.highlighted}>
						{tech.name}
					</span>
				{/each}
			</div>

			<div class="project-tags">
				{#each project.tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>

			<div class="project-actions">
				{#if project.git}
					<a href={project.git} class="btn-github" target="_blank" rel="noopener noreferrer">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
							/>
						</svg>
						Voir sur GitHub
					</a>
				{/if}
			</div>
		</div>
	</header>

	<section class="project-description">
		<div class="info-note">
			<Avatar size="medium" speaking={true} />
			<div>
				<p><strong>{$_('projects.about_project')}</strong></p>
				<p>{project.description}</p>
			</div>
		</div>
	</section>

	<section class="project-content">
		<h2 class="section-title">{$_('projects.project_details')}</h2>

		{#if getProjectDetails(project.id)}
			<ProjectDetail projectId={project.id} {...getProjectDetails(project.id)} />
		{:else}
			<div class="content-placeholder">
				<p>Cette section sera complétée prochainement avec le contenu détaillé de ce projet.</p>
				<p>Vous pourrez bientôt voir :</p>
				<ul>
					<li>Captures d'écran</li>
					<li>Explication des fonctionnalités</li>
					<li>Défis techniques rencontrés</li>
					<li>Apprentissages et retours d'expérience</li>
					<li>Code snippets importants</li>
					<li>Sources</li>
					<li>Documents à télécharger</li>
				</ul>
			</div>
		{/if}
	</section>
	
	<nav class="project-navigation">
		<div class="nav-item">
			{#if prevProject}
				<a href="/{currentLang}/projects/{prevProject.id}" class="nav-link prev">
					<span class="nav-direction">{$_('projects.prev_project')}</span>
					<span class="nav-title">{prevProject.title}</span>
				</a>
			{/if}
		</div>

		<div class="nav-item">
			<a href="/{currentLang}/projects" class="nav-link center">
				<span class="nav-direction">{$_('projects.all_projects_nav')}</span>
			</a>
		</div>

		<div class="nav-item">
			{#if nextProject}
				<a href="/{currentLang}/projects/{nextProject.id}" class="nav-link next">
					<span class="nav-direction">{$_('projects.next_project')}</span>
					<span class="nav-title">{nextProject.title}</span>
				</a>
			{/if}
		</div>
	</nav>

	{#if similarProjects.length > 0}
		<section class="similar-projects">
			<h2 class="section-title">{$_('projects.similar_projects')}</h2>
			<div class="projects-grid">
				{#each similarProjects as similarProject}
					<ProjectCard {...similarProject} />
				{/each}
			</div>
		</section>
	{/if}
</main>

<Footer />

<style>
	.breadcrumb {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		margin: var(--spacing-md) 0;
		font-size: 0.9rem;
	}

	.breadcrumb a {
		color: var(--color-green);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.separator {
		color: var(--color-text-light);
	}

	.current {
		color: var(--color-text);
		font-weight: 500;
	}

	.project-header {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-xl);
		align-items: start;
		margin: var(--spacing-xl) 0;
	}

	.project-image-container {
		position: relative;
	}

	.project-image {
		width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: top;
		border-radius: 8px;
		border: 1px solid var(--color-border);
	}

	.project-image-placeholder {
		width: 100%;
		height: 400px;
		background: var(--project-image-bg);
		border-radius: 8px;
		border: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
	}

	.project-category {
		background: var(--color-green);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.project-date {
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	.project-title {
		font-size: 2.5rem;
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 var(--spacing-md) 0;
		line-height: 1.2;
	}

	.project-technologies {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		margin-bottom: var(--spacing-md);
	}

	.tech-tag {
		background: var(--tech-tag-bg);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.8rem;
		color: var(--color-text-light);
	}

	.tech-tag.highlighted {
		background: var(--color-green);
		color: white;
		font-weight: 500;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		margin-bottom: var(--spacing-md);
	}

	.tag {
		background: var(--info-note-bg);
		color: var(--color-text-light);
		padding: 0.25rem 0.5rem;
		border-radius: 16px;
		font-size: 0.75rem;
		border: 1px solid var(--color-border);
	}

	.project-actions {
		margin-top: var(--spacing-md);
		text-align: left;
	}

	.project-meta {
		justify-content: left;
	}

	.project-technologies {
		justify-content: left;
	}

	.project-tags {
		justify-content: left;
	}

	.btn-github {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-md);
		background: #24292e;
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 500;
		font-size: 0.9rem;
		transition: background-color 0.2s ease;
	}

	.btn-github:hover {
		background: #1b1f23;
	}

	.btn-github svg {
		width: 20px;
		height: 20px;
		fill: currentColor;
	}

	.project-description {
		margin: var(--spacing-xl) 0;
	}

	.project-content {
		margin: var(--spacing-xl) 0;
	}

	.content-placeholder {
		background: var(--info-note-bg);
		padding: var(--spacing-lg);
		border-radius: 8px;
		border-left: 3px solid var(--color-green);
	}

	.content-placeholder ul {
		margin: var(--spacing-sm) 0 0 var(--spacing-md);
		color: var(--color-text-light);
	}

	.content-placeholder li {
		margin-bottom: var(--spacing-xs);
	}

	.project-navigation {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: var(--spacing-md);
		margin: var(--spacing-xl) 0;
		padding: var(--spacing-lg) 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		align-items: center;
	}

	.nav-item {
		display: flex;
	}

	.nav-item:first-child {
		justify-content: flex-start;
	}

	.nav-item:last-child {
		justify-content: flex-end;
	}

	.nav-item:nth-child(2) {
		justify-content: center;
	}

	.nav-link {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		padding: var(--spacing-sm);
		border-radius: 6px;
		transition: background-color 0.2s ease;
		max-width: 200px;
	}

	.nav-link:hover {
		background: var(--info-note-bg);
	}

	.nav-link.center {
		background: var(--color-green);
		color: white;
	}

	.nav-link.center:hover {
		background: var(--color-green);
	}

	.section-title {
		color: var(--color-green);
	}

	.nav-direction {
		font-size: 0.8rem;
		color: var(--color-text-light);
		margin-bottom: var(--spacing-xs);
	}

	.nav-link.center .nav-direction {
		color: white;
	}

	.nav-title {
		font-size: 0.9rem;
		color: var(--color-text);
		font-weight: 500;
		line-height: 1.3;
	}

	.similar-projects {
		margin: var(--spacing-xl) 0;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--spacing-lg);
	}

	@media (prefers-color-scheme: dark) {
		.btn-github {
			background: #f0f6fc;
			color: #24292f;
		}

		.btn-github:hover {
			background: #d0d7de;
		}
	}

	@media (max-width: 768px) {
		.project-header {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
		}

		.project-title {
			text-align: center;
		}

		.project-actions {
			text-align: center;
		}

		.project-meta {
			justify-content: center;
		}

		.project-technologies {
			justify-content: center;
		}

		.project-tags {
			justify-content: center;
		}

		.project-title {
			font-size: 2rem;
		}

		.project-navigation {
			grid-template-columns: 1fr;
			gap: var(--spacing-sm);
		}

		.nav-item {
			justify-content: center !important;
		}

		.nav-link {
			max-width: none;
			width: 100%;
			text-align: center;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.project-title {
			font-size: 1.7rem;
		}

		.project-image,
		.project-image-placeholder {
			height: 250px;
		}

		.breadcrumb {
			flex-wrap: wrap;
		}
	}
</style>