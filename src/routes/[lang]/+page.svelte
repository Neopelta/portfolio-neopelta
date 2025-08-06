<script>
	import { getContext } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';

	const langStore = getContext('lang');
	$: currentLang = langStore ? $langStore : 'fr';
</script>

<svelte:head>
	<title>{$_('hero.name')} - {$_('meta.title')}</title>
	<meta name="description" content={$_('meta.description')} />
	
	<!-- Canonical and hreflang for multilingual SEO -->	
	<link rel="canonical" href="https://www.neopelta.fr/{currentLang}" />
	<link rel="alternate" hreflang="fr" href="https://www.neopelta.fr/fr" />
	<link rel="alternate" hreflang="en" href="https://www.neopelta.fr/en" />
	<link rel="alternate" hreflang="x-default" href="https://www.neopelta.fr/fr" />
	
	<!-- Open Graph for sharing on social networks -->	
	<meta property="og:title" content="{$_('hero.name')} - {$_('meta.title')}" />
	<meta property="og:description" content={$_('meta.og_description')} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.neopelta.fr/{currentLang}" />
	<meta property="og:image" content="https://www.neopelta.fr/ronan-og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content={currentLang === 'fr' ? 'fr_FR' : 'en_US'} />
	<meta property="og:locale:alternate" content={currentLang === 'fr' ? 'en_US' : 'fr_FR'} />
	
	<!-- Twitter Card for Twitter optimisation -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{$_('hero.name')} - {$_('meta.title')}" />
	<meta name="twitter:description" content={$_('meta.og_description')} />
	<meta name="twitter:image" content="https://www.neopelta.fr/ronan-og.png" />
	
	<!-- JSON-LD Schema.org for rich snippets Google -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ronan PLUTA FONTAINE",
		"url": "https://www.neopelta.fr",
		"image": "https://www.neopelta.fr/ronan-og.png",
		"jobTitle": "Software Developer & Computer Science Student",
		"worksFor": {
			"@type": "EducationalOrganization", 
			"name": "University of Poitiers"
		},
		"alumniOf": {
			"@type": "EducationalOrganization",
			"name": "University of Poitiers"
		},
		"knowsAbout": ["Java", "React", "TypeScript", "Software Development", "Big Data"],
		"email": "rplutafontaine@protonmail.com",
		"sameAs": [
			"https://linkedin.com/in/ronan-pluta-fontaine",
			"https://github.com/Neopelta"
		]
	}
	</script>`}
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