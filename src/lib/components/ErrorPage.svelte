<script>
	import Avatar from '$lib/components/Avatar.svelte';

	export let status;
	export let message = '';
	export let lang = 'fr';
	export let useI18n = false;
	
	export let i18nMessages = {};
	
	const hardcodedMessages = {
		fr: {
			pageNotFound: 'Page non trouvée',
			errorOccurred: 'Une erreur s\'est produite',
			pageNotFoundDesc: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
			unexpectedError: 'Une erreur inattendue s\'est produite.',
			backHome: '← Retour à l\'accueil',
			viewProjects: 'Voir les projets',
			suggestionsTitle: 'Vous cherchez peut-être :',
			home: 'Accueil',
			allProjects: 'Tous les projets',
			sitemap: 'Plan du site'
		},
		en: {
			pageNotFound: 'Page not found',
			errorOccurred: 'An error occurred',
			pageNotFoundDesc: 'The page you are looking for does not exist or has been moved.',
			unexpectedError: 'An unexpected error occurred.',
			backHome: '← Back home',
			viewProjects: 'View projects',
			suggestionsTitle: 'You might be looking for:',
			home: 'Home',
			allProjects: 'All projects',
			sitemap: 'Sitemap'
		}
	};

	$: messages = useI18n ? i18nMessages : (hardcodedMessages[lang] || hardcodedMessages.fr);
</script>

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
				{messages.pageNotFound}
			{:else}
				{messages.errorOccurred}
			{/if}
		</h2>

		<p class="error-message">
			{#if status === 404}
				{messages.pageNotFoundDesc}
			{:else}
				{message || messages.unexpectedError}
			{/if}
		</p>

		<div class="error-actions">
			<a href="/{lang}" class="btn-home">
				{messages.backHome}
			</a>
			<a href="/{lang}/projects" class="btn-projects">
				{messages.viewProjects}
			</a>
		</div>

		{#if status === 404}
			<div class="error-suggestions">
				<div class="info-note">
					{#if useI18n}
						<Avatar size="medium" speaking={true} />
					{:else}
						<img
							src="/images/logo/ronan-px/ronan_speak.svg"
							alt="Ronan avatar"
							width="64"
							height="64"
							class="avatar-medium"
						/>
					{/if}
					<div>
						<p><strong>{messages.suggestionsTitle}</strong></p>
						<ul class="suggestions-list">
							<li><a href="/{lang}">{messages.home}</a></li>
							<li><a href="/{lang}/projects">{messages.allProjects}</a></li>
							<li><a href="/{lang}/sitemap">{messages.sitemap}</a></li>
							<li><a href="mailto:rplutafontaine@protonmail.com">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

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

	.info-note {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-sm);
		margin: var(--spacing-md) 0;
		padding: var(--spacing-md);
		background: var(--info-note-bg);
		border-radius: 8px;
		border-left: 3px solid var(--color-green);
	}

	.info-note p {
		margin: 0;
		font-size: 0.9rem;
	}

	.avatar-medium {
		width: 64px;
		height: 64px;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
		flex-shrink: 0;
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