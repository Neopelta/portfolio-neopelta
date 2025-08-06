<script>
	import { page } from '$app/stores';
	import { getLanguagePreference, supportedLocales } from '$lib/i18n';
	import ErrorPage from '$lib/components/ErrorPage.svelte';
	import '../app.css';

	export let status;
	export let message;

	$: urlSegments = $page.url.pathname.split('/').filter(Boolean);
	$: detectedLang = urlSegments[0] && supportedLocales.includes(urlSegments[0]) 
		? urlSegments[0] 
		: getLanguagePreference();
</script>

<svelte:head>
	<title>
		{status === 404 ? 'Page non trouvée' : 'Une erreur s\'est produite'} - Ronan PLUTA FONTAINE
	</title>
	<meta
		name="description"
		content={status === 404 
			? 'La page que vous recherchez n\'existe pas ou a été déplacée.' 
			: 'Une erreur inattendue s\'est produite.'}
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<nav class="nav">
	<div class="container">
		<div class="nav-content">
			<a href="/{detectedLang}" class="nav-brand">
				<img
					src="/images/logo/ronan-px/ronan_default.svg"
					alt="Ronan avatar"
					width="32"
					height="32"
					class="avatar"
				/>
				<span>Ronan PLUTA FONTAINE</span>
			</a>
		</div>
	</div>
</nav>

<main class="container">
	<ErrorPage 
		{status} 
		{message} 
		lang={detectedLang}
		useI18n={false}
	/>
</main>

<!-- Footer simple -->
<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-left">
				<p>© {new Date().getFullYear()} Ronan PLUTA FONTAINE</p>
				<span class="location">
					{detectedLang === 'fr' ? 'Disponible pour alternance' : 'Available for apprenticeship'}
				</span>
			</div>
			<div class="footer-right">
				<a href="mailto:rplutafontaine@protonmail.com" class="contact-link">
					rplutafontaine@protonmail.com
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.nav {
		padding: var(--spacing-md) 0;
		border-bottom: 1px solid var(--color-border);
		background: var(--nav-bg);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		font-weight: 600;
		color: var(--color-text);
		text-decoration: none;
	}

	.avatar {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}

	.footer {
		background: var(--nav-bg);
		border-top: 1px solid var(--color-border);
		margin-top: var(--spacing-xl);
		padding: var(--spacing-lg) 0;
	}

	.footer-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-md);
	}

	.footer-left p {
		margin: 0 0 var(--spacing-xs) 0;
		font-size: 0.9rem;
		color: var(--color-text);
		font-weight: 500;
	}

	.location {
		font-size: 0.8rem;
		color: var(--color-text-light);
		font-weight: 500;
	}

	.footer-right {
		text-align: right;
	}

	.contact-link {
		color: var(--color-green);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.contact-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 600px) {
		.footer-content {
			flex-direction: column;
			text-align: center;
			gap: var(--spacing-sm);
		}

		.footer-right {
			text-align: center;
		}
	}
</style>