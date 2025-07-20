<script>
	import Avatar from '$lib/components/Avatar.svelte';

	export let title = '';
	export let description = '';
	export let technologies = [];
	export let link = '#';
	//export let git = null;
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
			<a href={link} class="project-link" target="_blank" rel="noopener noreferrer">
				Voir le projet →
			</a>
			<!--
            {#if git}
                <a href={git} class="git-link" target="_blank" rel="noopener noreferrer" title="Voir le code source sur GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                </a>
            {/if}
            -->
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
		font-weight: 400;
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
		background: #f0f0f0;
		padding: 0.2rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		color: var(--color-text-light);
		transition: all 0.2s ease;
	}

	.tech-tag.highlighted {
		background: var(--color-green);
		color: white;
		font-weight: 500;
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
		font-weight: 500;
	}

	.project-link:hover {
		text-decoration: underline;
	}

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

	@media (prefers-color-scheme: dark) {
		.project-image {
			background: #1a1a1a;
			border-bottom-color: var(--color-border);
		}

		.tech-tag:not(.highlighted) {
			background: #2a2a2a;
		}

		.project-date {
			background: #2a2a2a;
		}
	}
</style>
