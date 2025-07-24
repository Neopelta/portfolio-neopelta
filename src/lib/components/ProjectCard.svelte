<script>
	import Avatar from '$lib/components/Avatar.svelte';

	export let title = '';
	export let description = '';
	export let technologies = [];
	export let link = '#';
	export let image = null;
	export let alt = '';
	export let date = '';

	function truncateDescription(text, maxLength = 120) {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength).trim() + '[...]';
	}

	$: truncatedDescription = truncateDescription(description);
</script>

<article class="project">
	<div class="project-image">
		{#if image}
			<img src={image} alt={alt || title} loading="lazy" />
		{:else}
			<Avatar size="large" />
		{/if}
	</div>
	<div class="project-content">
		<div class="project-header">
			<h3>{title}</h3>
			{#if date}
				<span class="project-date">{date}</span>
			{/if}
		</div>

		<p class="project-description">{truncatedDescription}</p>
		<div class="project-tech">
			{#each technologies as tech}
				<span class="tech-tag" class:highlighted={tech.highlighted}>
					{tech.name}
				</span>
			{/each}
		</div>
		<div class="project-links">
			<a href={link} class="project-link"> Voir le projet → </a>
		</div>
	</div>
</article>

<style>
	.project {
		border: 1px solid var(--color-border);
		border-radius: 8px;
		overflow: hidden;
		transition: border-color 0.2s ease;
		display: flex;
		flex-direction: column;
		height: 480px;
	}

	.project:hover {
		border-color: var(--color-green);
	}

	.project-image {
		height: 200px;
		background: white;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		border-bottom: 1px solid var(--color-border);
		overflow: hidden;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}

	.project-content {
		padding: var(--spacing-md);
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.project-header {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--spacing-sm);
		gap: 0.25rem;
	}

	.project-date {
		font-size: 0.875rem;
		color: var(--color-text-light);
		font-style: normal;
		font-weight: 500;
	}

	.project h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: var(--spacing-xs);
		color: var(--color-text);
	}

	.project-description {
		color: var(--color-text-light);
		font-size: 0.9rem;
		margin-bottom: var(--spacing-sm);
		line-height: 1.5;
		flex: 1;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		margin-bottom: var(--spacing-sm);
	}

	.tech-tag {
		background: #e5e5e5;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		color: var(--color-text);
		transition: all 0.2s ease;
		font-weight: 500;
	}

	.tech-tag.highlighted {
		background: var(--color-green);
		color: white;
		font-weight: 600;
	}

	.project-links {
		display: flex;
		gap: var(--spacing-sm);
		align-items: center;
		flex-wrap: wrap;
	}

	.project-link {
		color: var(--color-green);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 600;
	}

	.project-link:hover {
		text-decoration: underline;
	}

	/*
	.git-link {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		color: var(--color-text-light);
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.git-link:hover {
		color: var(--color-green-hover);
	}

	.git-link svg {
		width: 16px;
		height: 16px;
		fill: currentColor;
	}
    */

	@media (prefers-color-scheme: dark) {
		.project-image {
			background: #1a1a1a;
			border-bottom-color: var(--color-border);
		}

		.tech-tag:not(.highlighted) {
			background: #404040;
			color: var(--color-text-light);
		}

		.project-date {
			color: var(--color-text-light);
		}
	}
</style>