<script>
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';
</script>

<svelte:head>
	<title>{$_('hero.name')} - {$_('meta.title')}</title>
	<meta name="description" content={$_('meta.description')} />
	<link rel="canonical" href="https://www.neopelta.fr" />
	<meta property="og:title" content="{$_('hero.name')} - {$_('meta.title')}" />
	<meta property="og:description" content={$_('meta.og_description')} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.neopelta.fr/ronan-og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<Navigation />

<main class="container">
	<Hero />
	<About />
	<Projects />
	<Skills />
	<Contact />
</main>

<Footer />