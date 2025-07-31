<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getContext } from 'svelte';
	import { supportedLocales, saveLanguagePreference } from '$lib/i18n';

	const langStore = getContext('lang');
	$: currentLang = langStore ? $langStore : 'fr';

	let isSwitching = false;

	async function switchLanguage(newLang) {
		if (newLang === currentLang || isSwitching) return;

		isSwitching = true;
		saveLanguagePreference(newLang);

		const currentPath = $page.url.pathname;
		let newPath;

		const langMatch = currentPath.match(/^\/([a-z]{2})(\/.*)?$/);

		if (langMatch) {
			const pathWithoutLang = langMatch[2] || '';
			newPath = `/${newLang}${pathWithoutLang}`;
		} else {
			newPath = `/${newLang}${currentPath === '/' ? '' : currentPath}`;
		}

		// Debugging output
		//console.log('Switching from', currentPath, 'to', newPath);

		try {
			await goto(newPath);
		} catch (error) {
			console.error('Error switching language:', error);
		} finally {
			isSwitching = false;
		}
	}
</script>

<div class="language-switch">
	{#each supportedLocales as lang}
		<button
			class="lang-btn"
			class:active={lang === currentLang}
			on:click={() => switchLanguage(lang)}
			disabled={lang === currentLang || isSwitching}
		>
			{lang.toUpperCase()}
		</button>
	{/each}
</div>

<style>
	.language-switch {
		display: flex;
		gap: var(--spacing-xs);
	}

	.lang-btn {
		padding: var(--spacing-xs) var(--spacing-sm);
		border: 1px solid var(--color-border);
		background: white;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.8rem;
		font-weight: 500;
		transition: all 0.2s ease;
		color: var(--color-text);
	}

	.lang-btn:disabled {
		cursor: default;
	}

	.lang-btn.active {
		background: var(--color-green) !important;
		color: white !important;
		border-color: var(--color-green) !important;
	}

	.lang-btn:hover:not(.active):not(:disabled) {
		border-color: var(--color-green);
	}

	@media (prefers-color-scheme: dark) {
		.lang-btn:not(.active) {
			background: var(--nav-bg);
			color: var(--color-text);
		}
	}
</style>
