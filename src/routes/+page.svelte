<script>
    import Navigation from '$lib/components/Navigation.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
</script>

<svelte:head>
    <title>Ronan PLUTA FONTAINE - Portfolio</title>
    <meta name="description" content="Étudiant en Master 2 Informatique à Poitiers, spécialisé dans le développement web écoresponsable." />
    <meta property="og:title" content="Ronan PLUTA FONTAINE - Portfolio" />
    <meta property="og:description" content="Développeur web spécialisé en éco-conception" />
    <meta property="og:type" content="website" />
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

<style>
</style>