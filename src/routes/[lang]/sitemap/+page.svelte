<script>
	import { onMount, getContext } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { getProjectsAsync, getUniqueCategoriesAsync } from '$lib/data/projects.js';
	import { base } from '$app/paths';
	import { dev } from '$app/environment';
	import '../../../app.css';

	const langStore = getContext('lang');
	$: currentLang = langStore ? $langStore : 'fr';

	let projects = [];
	let categories = [];
	let groupedProjects = {};
	let loading = true;

	$: if (currentLang) {
		loadSitemapData(currentLang);
	}

	async function loadSitemapData(lang) {
		try {
			loading = true;
			[projects, categories] = await Promise.all([
				getProjectsAsync(lang),
				getUniqueCategoriesAsync(lang)
			]);

			groupedProjects = categories.reduce((acc, category) => {
				acc[category] = projects.filter((p) => p.category === category);
				return acc;
			}, {});
		} catch (error) {
			console.error('Error loading sitemap:', error);
			projects = [];
			categories = [];
			groupedProjects = {};
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadSitemapData(currentLang);
	});
</script>

<svelte:head>
	<title>{$_('sitemap.title')} - {$_('hero.name')}</title>
	<meta name="description" content={$_('sitemap.description')} />
	<link rel="canonical" href="https://www.neopelta.fr/{currentLang}/sitemap" />
</svelte:head>

<Navigation />

<main class="container">
	<div class="sitemap-header">
		<h1>{$_('sitemap.title')}</h1>
		<p>{$_('sitemap.description')}</p>
	</div>

	{#if loading}
		<div class="loading-state">
			<div class="loading-spinner"></div>
			<p>{$_('sitemap.loading')}</p>
		</div>
	{:else}
		<div class="sitemap-content">
			<section class="sitemap-section">
				<h2>{$_('sitemap.main_pages')}</h2>
				<ul class="sitemap-list">
					<li><a href="/{currentLang}">{$_('sitemap.home')}</a></li>
					<li><a href="/{currentLang}/projects">{$_('sitemap.all_projects')}</a></li>
					<li><a href="/{currentLang}/sitemap">{$_('sitemap.title')}</a></li>
				</ul>
			</section>

			<section class="sitemap-section">
				<h2>{$_('sitemap.projects_by_category')}</h2>
				{#each categories as category}
					<div class="category-group">
						<h3>
							{category} ({$_('sitemap.projects_count', {
								values: { count: groupedProjects[category].length }
							})})
						</h3>
						<ul class="sitemap-list projects-list">
							{#each groupedProjects[category] as project}
								<li>
									<a href="/{currentLang}/projects/{project.id}">{project.title}</a>
									<span class="project-meta">
										{project.date}
										{#if project.featured}<span class="featured-badge">★</span>{/if}
									</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</section>

			<section class="sitemap-section">
				<h2>{$_('sitemap.useful_links')}</h2>
				<ul class="sitemap-list">
					{#if dev}
						<li><a href="http://localhost:5173/sitemap.xml" target="_blank" rel="noopener">Sitemap XML</a></li>
					{:else}
						<li><a href="{base}/sitemap.xml" target="_blank" rel="noopener">Sitemap XML</a></li>
					{/if}
					<li><a href="mailto:rplutafontaine@protonmail.com">{$_('sitemap.contact_email')}</a></li>
					<li>
						<a
							href="https://linkedin.com/in/ronan-pluta-fontaine"
							target="_blank"
							rel="noopener noreferrer">LinkedIn</a
						>
					</li>
					<li>
						<a href="https://github.com/Neopelta" target="_blank" rel="noopener noreferrer"
							>GitHub</a
						>
					</li>
				</ul>
			</section>
		</div>
	{/if}

	<div class="back-home">
		<a href="/{currentLang}" class="back-link">{$_('sitemap.back_home')}</a>
	</div>
</main>

<Footer />

<style>
	.sitemap-header {
		text-align: center;
		margin: var(--spacing-xl) 0;
	}

	.sitemap-header h1 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.sitemap-header p {
		font-size: 1.1rem;
		color: var(--color-text-light);
		max-width: 500px;
		margin: 0 auto;
	}

	.loading-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-xl);
		color: var(--color-text-light);
	}

	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid var(--color-border);
		border-top: 3px solid var(--color-green);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: var(--spacing-md);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.sitemap-section {
		margin-bottom: var(--spacing-xl);
		padding-bottom: var(--spacing-lg);
		border-bottom: 1px solid var(--color-border);
	}

	.sitemap-section:last-child {
		border-bottom: none;
	}

	.sitemap-section h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-green);
		margin-bottom: var(--spacing-md);
		padding-bottom: var(--spacing-xs);
		border-bottom: 2px solid var(--color-green);
		display: inline-block;
	}

	.sitemap-section h3 {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--color-text);
		margin: var(--spacing-lg) 0 var(--spacing-sm) 0;
	}

	.sitemap-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sitemap-list li {
		margin-bottom: var(--spacing-sm);
		padding: var(--spacing-sm);
		background: var(--info-note-bg);
		border-radius: 6px;
		border-left: 3px solid var(--color-green);
	}

	.sitemap-list a {
		color: var(--color-green);
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
	}

	.sitemap-list a:hover {
		text-decoration: underline;
	}

	.projects-list li {
		margin-bottom: var(--spacing-md);
	}

	.project-meta {
		font-size: 0.9rem;
		color: var(--color-text-light);
		margin-left: var(--spacing-sm);
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-xs);
	}

	.featured-badge {
		background: var(--color-green);
		color: white;
		padding: 0.2rem 0.4rem;
		border-radius: 12px;
		font-size: 0.7rem;
		font-weight: 600;
	}

	.category-group {
		margin-bottom: var(--spacing-lg);
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

	@media (max-width: 600px) {
		.sitemap-header h1 {
			font-size: 2rem;
		}
	}
</style>
