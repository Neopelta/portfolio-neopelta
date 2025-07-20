<script>
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<section id="competences" class="section">
	<div class="skills">
		<h2 class="section-title">Compétences</h2>

		<div class="skills-content">
			<div class="skill-group">
				<h3>Technologies maîtrisées</h3>
				<p>Java • React • TypeScript • APIs REST • Git • SQL • Python</p>
			</div>

			<div class="skill-group">
				<h3>Méthodologies & Outils</h3>
				<p>Make • Agile/Scrum • Clean Code • Tests unitaires • Documentation technique</p>
			</div>

			<div class="skill-group">
				<h3>Domaines d'application</h3>
				<p>Développement logiciel • Big Data • Visualisation de données • Automatisation</p>
			</div>
		</div>
	</div>
</section>

<style>
	.skills {
		margin-bottom: var(--spacing-xl);
	}

	.skills-content {
		margin-bottom: var(--spacing-xl);
	}

	.skill-group {
		margin-bottom: var(--spacing-lg);
	}

	.skill-group:last-child {
		margin-bottom: 0;
	}

	.skill-group h3 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--spacing-xs);
	}

	.skill-group p {
		font-size: 0.95rem;
		color: var(--color-text-light);
		line-height: 1.6;
		margin: 0;
	}
</style>
