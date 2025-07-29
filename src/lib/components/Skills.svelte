<script>
	import { _ } from 'svelte-i18n';
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<section id="competences" class="section">
	<div class="skills">
		<h2 class="section-title">{$_('skills.title')}</h2>

		<div class="skills-content">
			<div class="skill-group">
				<h3>{$_('skills.mastered_tech')}</h3>
				<p>{$_('skills.mastered_tech_list')}</p>
			</div>

			<div class="skill-group">
				<h3>{$_('skills.methodologies')}</h3>
				<p>{$_('skills.methodologies_list')}</p>
			</div>

			<div class="skill-group">
				<h3>{$_('skills.domains')}</h3>
				<p>{$_('skills.domains_list')}</p>
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