<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';

	export let status;
	export let message;

	$: currentLang = $page.params.lang || 'fr';
	
	const langStore = writable(currentLang);
	$: langStore.set(currentLang);
	setContext('lang', langStore);
</script>

<svelte:head>
	<title>Erreur {status} - Ronan PLUTA FONTAINE</title>
	<meta name="description" content="Page non trouvée" />
</svelte:head>

<Navigation />

<main class="container">
	<div class="error-container">
		<div class="error-content">
			<h1 class="error-status">{status}</h1>
			<h2 class="error-title">
				{#if status === 404}
					Page non trouvée
				{:else}
					Une erreur s'est produite
				{/if}
			</h2>
			<p class="error-message">
				{#if status === 404}
					La page que vous recherchez n'existe pas ou a été déplacée.
				{:else}
					{message}
				{/if}
			</p>

			<div class="error-actions">
				<a href="/{currentLang}" class="btn-home"> ← Retour à l'accueil </a>
				<a href="/{currentLang}/projects" class="btn-projects"> Voir les projets </a>
			</div>
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
		max-width: 500px;
		padding: var(--spacing-xl);
	}

	.error-status {
		font-size: 6rem;
		font-weight: 700;
		color: var(--color-green);
		margin: 0;
		line-height: 1;
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
	}

	.btn-home,
	.btn-projects {
		display: inline-block;
		padding: var(--spacing-sm) var(--spacing-md);
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.btn-home {
		background: var(--color-green);
		color: white;
	}

	.btn-home:hover {
		background: var(--color-green-hover);
	}

	.btn-projects {
		background: var(--info-note-bg);
		color: var(--color-text);
		border: 1px solid var(--color-border);
	}

	.btn-projects:hover {
		background: #e0e0e0;
		border-color: var(--color-green);
	}

	@media (max-width: 600px) {
		.error-status {
			font-size: 4rem;
		}

		.error-title {
			font-size: 1.5rem;
		}

		.error-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn-home,
		.btn-projects {
			width: 200px;
		}
	}

	@media (prefers-color-scheme: dark) {
		.btn-projects:hover {
			background: #404040;
		}
	}
</style>