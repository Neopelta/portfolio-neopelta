<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import '../../app.css';

	export let status;
	export let message;

	$: currentLang = $page.params.lang || 'fr';
	
	const langStore = writable(currentLang);
	$: langStore.set(currentLang);
	setContext('lang', langStore);
</script>

<svelte:head>
	<title>
		{status === 404 ? $_('error.page_not_found') : $_('error.error_occurred')} - {$_('hero.name')}
	</title>
	<meta name="description" content={status === 404 ? $_('error.page_not_found_description') : $_('error.unexpected_error')} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navigation />

<main class="container">
	<div class="error-container">
		<div class="error-content">
			<div class="error-visual">
				<div class="error-icon">
					{#if status === 404}🔍{:else if status === 500}⚠️{:else}❌{/if}
				</div>
				<h1 class="error-status">{status}</h1>
			</div>
			
			<h2 class="error-title">
				{#if status === 404}
					{$_('error.page_not_found')}
				{:else}
					{$_('error.error_occurred')}
				{/if}
			</h2>
			
			<p class="error-message">
				{#if status === 404}
					{$_('error.page_not_found_description')}
				{:else}
					{message || $_('error.unexpected_error')}
				{/if}
			</p>

			<div class="error-actions">
				<a href="/{currentLang}" class="btn-home">
					{$_('error.back_home')}
				</a>
				<a href="/{currentLang}/projects" class="btn-projects">
					{$_('error.view_projects')}
				</a>
			</div>

			{#if status === 404}
				<div class="error-suggestions">
					<div class="info-note">
						<Avatar size="medium" speaking={true} />
						<div>
							<p><strong>{$_('error.suggestions_title')}</strong></p>
							<ul class="suggestions-list">
								<li><a href="/{currentLang}">{$_('sitemap.home')}</a></li>
								<li><a href="/{currentLang}/projects">{$_('sitemap.all_projects')}</a></li>
								<li><a href="/{currentLang}/sitemap">{$_('sitemap.title')}</a></li>
								<li><a href="mailto:rplutafontaine@protonmail.com">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</main>

<Footer />

<style>
	.error-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
		text-align: center;
	}

	.error-content {
		max-width: 600px;
		padding-left: var(--spacing-xl);
		padding-right: var(--spacing-xl);
	}

	.error-visual {
		margin-bottom: var(--spacing-lg);
	}

	.error-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-md);
		opacity: 0.8;
		display: block;
	}

	.error-status {
		font-size: 6rem;
		font-weight: 700;
		color: var(--color-green);
		margin: 0;
		line-height: 1;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.error-title {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text);
		margin: var(--spacing-md) 0;
	}

	.error-message {
		font-size: 1.1rem;
		color: var(--color-text-light);
		margin-bottom: var(--spacing-xl);
		line-height: 1.6;
	}

	.error-actions {
		display: flex;
		gap: var(--spacing-md);
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: var(--spacing-xl);
	}

	.btn-home,
	.btn-projects {
		display: inline-block;
		padding: var(--spacing-sm) var(--spacing-md);
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s ease;
		min-width: 180px;
	}

	.btn-home {
		background: var(--color-green);
		color: white;
	}

	.btn-home:hover {
		background: var(--color-green-hover);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(21, 128, 61, 0.3);
	}

	.btn-projects {
		background: var(--info-note-bg);
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.btn-projects:hover {
		background: var(--color-border);
		border-color: var(--color-green);
		transform: translateY(-2px);
	}

	.error-suggestions {
		margin-top: var(--spacing-xl);
		text-align: left;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.suggestions-list {
		list-style: none;
		padding: 0;
		margin: var(--spacing-sm) 0 0 0;
	}

	.suggestions-list li {
		margin-bottom: var(--spacing-xs);
	}

	.suggestions-list a {
		color: var(--color-green);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.suggestions-list a:hover {
		text-decoration: underline;
		color: var(--color-green-hover);
	}

	@media (max-width: 768px) {
		.error-status {
			font-size: 4rem;
		}

		.error-title {
			font-size: 1.7rem;
		}

		.error-icon {
			font-size: 3rem;
		}

		.error-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn-home,
		.btn-projects {
			width: 100%;
			max-width: 280px;
		}
	}

	@media (max-width: 600px) {
		.error-status {
			font-size: 3rem;
		}

		.error-title {
			font-size: 1.5rem;
		}
	}

	@media (prefers-color-scheme: dark) {
		.btn-projects:hover {
			background: #404040;
		}
	}
</style>