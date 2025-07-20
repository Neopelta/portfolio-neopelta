<script>
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<section class="section-hero">
	<div class="hero">
		<div class="hero-avatar">
			<Avatar size="large" />
		</div>
		<h1>Bonjour, je suis Ronan PLUTA FONTAINE</h1>
		<p>
			Étudiant en Master Informatique | Développeur logiciel en recherche d'alternance (septembre
			2025)
		</p>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		margin-bottom: var(--spacing-lg);
	}

	.hero-avatar {
		margin: 0 auto var(--spacing-md) auto;
		display: flex;
		justify-content: center;
	}

	.hero h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.hero p {
		font-size: 1.1rem;
		color: var(--color-text-light);
		max-width: 500px;
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		.hero h1 {
			font-size: 1.7rem;
		}
	}
</style>
