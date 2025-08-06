<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ErrorPage from '$lib/components/ErrorPage.svelte';
	import '../../app.css';

	export let status;
	export let message;

	$: currentLang = $page.params.lang || 'fr';

	const langStore = writable(currentLang);
	$: langStore.set(currentLang);
	setContext('lang', langStore);

	$: i18nMessages = {
		pageNotFound: $_('error.page_not_found'),
		errorOccurred: $_('error.error_occurred'),
		pageNotFoundDesc: $_('error.page_not_found_description'),
		unexpectedError: $_('error.unexpected_error'),
		backHome: $_('error.back_home'),
		viewProjects: $_('error.view_projects'),
		suggestionsTitle: $_('error.suggestions_title'),
		home: $_('sitemap.home'),
		allProjects: $_('sitemap.all_projects'),
		sitemap: $_('sitemap.title')
	};
</script>

<svelte:head>
	<title>
		{status === 404 ? $_('error.page_not_found') : $_('error.error_occurred')} - {$_('hero.name')}
	</title>
	<meta
		name="description"
		content={status === 404 ? $_('error.page_not_found_description') : $_('error.unexpected_error')}
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Navigation />

<main class="container">
	<ErrorPage 
		{status} 
		{message} 
		lang={currentLang}
		useI18n={true}
		{i18nMessages}
	/>
</main>

<Footer />