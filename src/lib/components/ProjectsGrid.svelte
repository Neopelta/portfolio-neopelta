<script>
	import { _ } from 'svelte-i18n';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let projects = [];
	export let loading = false;
	export let emptyMessage = '';
	export let emptyAction = null;
	export let emptyActionText = '';
	export let columns = 'repeat(auto-fit, minmax(300px, 1fr))';
	export let gap = 'var(--spacing-lg)';

	$: finalEmptyMessage = emptyMessage || $_('projects_grid.no_projects_found');
	$: finalEmptyActionText = emptyActionText || $_('projects_grid.reset_filters');
</script>

<div class="projects-grid-container">
	{#if loading}
		<div class="loading-state">
			<div class="loading-spinner"></div>
			<p>{$_('projects_grid.loading')}</p>
		</div>
	{:else if projects.length > 0}
		<div class="projects-grid" style="--grid-columns: {columns}; --grid-gap: {gap};">
			{#each projects as project, index}
				<div class="project-item" style="animation-delay: {index * 100}ms">
					<ProjectCard {...project} />
				</div>
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<div class="empty-icon">📁</div>
			<h3>{$_('projects_grid.no_projects_title')}</h3>
			<p>{finalEmptyMessage}</p>
			{#if emptyAction}
				<button on:click={emptyAction} class="empty-action">
					{finalEmptyActionText}
				</button>
			{/if}
		</div>
	{/if}
</div>

<style>
	.projects-grid-container {
		width: 100%;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: var(--grid-columns);
		gap: var(--grid-gap);
		margin-bottom: var(--spacing-lg);
	}

	.project-item {
		opacity: 0;
		transform: translateY(20px);
		animation: fadeInUp 0.6s ease forwards;
	}

	@keyframes fadeInUp {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.loading-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-xl);
		color: var(--color-text-light);
	}

	.loading-spinner {
		width: 40px;
		height: 40px;
		border: 3px solid var(--color-border);
		border-top: 3px solid var(--color-green);
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: var(--spacing-md);
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.empty-state {
		text-align: center;
		padding: var(--spacing-xl) var(--spacing-md);
		color: var(--color-text-light);
	}

	.empty-icon {
		font-size: 4rem;
		margin-bottom: var(--spacing-md);
		opacity: 0.5;
	}

	.empty-state h3 {
		margin: 0 0 var(--spacing-sm) 0;
		color: var(--color-text);
		font-size: 1.2rem;
	}

	.empty-state p {
		margin: 0 0 var(--spacing-md) 0;
		font-size: 0.9rem;
	}

	.empty-action {
		padding: var(--spacing-sm) var(--spacing-md);
		background: var(--color-green);
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: background-color 0.2s ease;
	}

	.empty-action:hover {
		background: var(--color-green-hover);
	}

	@media (max-width: 600px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}

	:global(.projects-grid--compact) {
		--grid-columns: repeat(auto-fit, minmax(250px, 1fr));
		--grid-gap: var(--spacing-md);
	}

	:global(.projects-grid--large) {
		--grid-columns: repeat(auto-fit, minmax(350px, 1fr));
		--grid-gap: var(--spacing-xl);
	}
</style>
