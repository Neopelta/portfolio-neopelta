<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Avatar from '$lib/components/Avatar.svelte';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';

	$: isHomePage = $page.route.id === '/[lang]';

	const langStore = getContext('lang');
	$: currentLang = langStore ? $langStore : 'fr';

	let mobileMenuOpen = false;

	async function handleNavClick(event, anchor) {
		event.preventDefault();
		mobileMenuOpen = false;

		if (isHomePage) {
			const element = document.getElementById(anchor);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			await goto(`/${currentLang}`);
			setTimeout(() => {
				const element = document.getElementById(anchor);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	afterNavigate(() => {
		mobileMenuOpen = false;
		if ($page.url.hash) {
			setTimeout(() => {
				const anchor = $page.url.hash.substring(1);
				const element = document.getElementById(anchor);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	});
</script>

<nav class="nav">
	<div class="container">
		<div class="nav-content">
			<a href="/{currentLang}" class="nav-brand">
				<Avatar size="small" />
				<span>Ronan PLUTA FONTAINE</span>
			</a>

			<ul class="nav-links">
				<li>
					<a href="/{currentLang}#projects" on:click={(e) => handleNavClick(e, 'projects')}>
						{$_('nav.projects')}
					</a>
				</li>
				<li>
					<a href="/{currentLang}#competences" on:click={(e) => handleNavClick(e, 'competences')}>
						{$_('nav.skills')}
					</a>
				</li>
				<li>
					<a href="/{currentLang}#contact" on:click={(e) => handleNavClick(e, 'contact')}>
						{$_('nav.contact')}
					</a>
				</li>
			</ul>

			<LanguageSwitch />

			<button
				class="mobile-menu-button"
				class:active={mobileMenuOpen}
				on:click={toggleMobileMenu}
				aria-label="Menu de navigation"
				aria-expanded={mobileMenuOpen}
			>
				<span class="burger-line"></span>
				<span class="burger-line"></span>
				<span class="burger-line"></span>
			</button>
		</div>

		<div class="mobile-menu" class:open={mobileMenuOpen}>
			<ul class="mobile-nav-links">
				<li>
					<a href="/{currentLang}#projects" on:click={(e) => handleNavClick(e, 'projects')}>
						{$_('nav.projects')}
					</a>
				</li>
				<li>
					<a href="/{currentLang}#competences" on:click={(e) => handleNavClick(e, 'competences')}>
						{$_('nav.skills')}
					</a>
				</li>
				<li>
					<a href="/{currentLang}#contact" on:click={(e) => handleNavClick(e, 'contact')}>
						{$_('nav.contact')}
					</a>
				</li>
			</ul>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div
			class="mobile-menu-overlay"
			on:click={closeMobileMenu}
			on:keydown={(e) => {
				if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					closeMobileMenu();
				}
			}}
			role="button"
			tabindex="0"
			aria-label="Fermer le menu de navigation"
		></div>
	{/if}
</nav>

<style>
	.nav {
		padding: var(--spacing-md) 0;
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		background: white;
		z-index: 10;
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

	.nav-links {
		display: flex;
		gap: var(--spacing-md);
		list-style: none;
	}

	.nav-links a {
		color: var(--color-text);
		text-decoration: none;
		font-size: 0.9rem;
		cursor: pointer;
		font-weight: 500;
	}

	.nav-links a:hover {
		color: var(--color-green);
	}

	.mobile-menu-button {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 44px;
		height: 44px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		position: relative;
		z-index: 1001;
	}

	.burger-line {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--color-text);
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.burger-line:not(:last-child) {
		margin-bottom: 4px;
	}

	.mobile-menu-button.active .burger-line:nth-child(1) {
		transform: rotate(45deg) translate(4px, 4px);
	}

	.mobile-menu-button.active .burger-line:nth-child(2) {
		opacity: 0;
		transform: scale(0);
	}

	.mobile-menu-button.active .burger-line:nth-child(3) {
		transform: rotate(-45deg) translate(4px, -4px);
	}

	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: var(--nav-bg);
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
		z-index: 1000;
		transform: translateY(-20px);
		opacity: 0;
		transition: all 0.3s ease;
		pointer-events: none;
		visibility: hidden;
	}

	.mobile-menu.open {
		transform: translateY(0);
		opacity: 1;
		pointer-events: auto;
		visibility: visible;
	}

	.mobile-nav-links {
		list-style: none;
		padding: var(--spacing-md) 0;
		margin: 0;
	}

	.mobile-nav-links li {
		border-bottom: 1px solid var(--color-border);
	}

	.mobile-nav-links li:last-child {
		border-bottom: none;
	}

	.mobile-nav-links a {
		display: block;
		color: var(--color-text);
		text-decoration: none;
		font-size: 1.1rem;
		font-weight: 500;
		padding: var(--spacing-md) var(--spacing-md);
		transition: all 0.2s ease;
	}

	.mobile-nav-links a:hover {
		color: var(--color-green);
		background: var(--info-note-bg);
	}

	.mobile-menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	@media (max-width: 600px) {
		.nav-links {
			display: none;
		}

		.mobile-menu-button {
			display: flex;
		}

		.mobile-menu {
			display: block;
		}
	}

	@media (prefers-color-scheme: dark) {
		.nav {
			background: black;
			border-bottom-color: var(--color-border);
		}

		.mobile-menu {
			background: var(--nav-bg);
		}

		.burger-line {
			background: var(--color-text);
		}
	}
</style>
