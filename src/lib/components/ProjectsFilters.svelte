<script>
	import { _ } from 'svelte-i18n';
	import { filters, projectsActions, filterOptions } from '$lib/stores/projectsStore.js';

	export let showSearch = true;
	export let showCategory = true;
	export let showTechnology = true;
	export let showYear = true;
	export let showReset = true;
	export let layout = 'horizontal'; // 'horizontal' | 'vertical' | 'compact'
	export let placeholder = '';

	$: searchPlaceholder = placeholder || $_('projects_filters.search_placeholder');
	$: currentFilters = $filters;

	function handleSearchInput(event) {
		projectsActions.setFilter('search', event.target.value);
	}

	function handleFilterChange(key, value) {
		projectsActions.setFilter(key, value);
	}

	function resetAllFilters() {
		projectsActions.resetFilters();
	}

	$: activeFiltersCount = Object.entries(currentFilters).filter(
		([key, value]) => key !== 'featuredOnly' && value !== 'all' && value !== ''
	).length;
</script>

<div
	class="filters-container"
	class:compact={layout === 'compact'}
	class:vertical={layout === 'vertical'}
>
	{#if showSearch}
		<div class="search-section">
			<div class="search-input-wrapper">
				<input
					type="text"
					placeholder={searchPlaceholder}
					value={currentFilters.search}
					on:input={handleSearchInput}
					class="search-input"
				/>
				{#if currentFilters.search}
					<button
						on:click={() => handleFilterChange('search', '')}
						class="clear-search"
						title={$_('projects_filters.clear_search')}
					>
						✕
					</button>
				{/if}
			</div>
		</div>
	{/if}

	<div class="filters-section">
		<div class="filters-row">
			{#if showCategory}
				<div class="filter-group">
					<label for="category-filter" class="filter-label">{$_('projects_filters.category')}</label>
					<select
						id="category-filter"
						value={currentFilters.category}
						on:change={(e) => handleFilterChange('category', e.target.value)}
						class="filter-select"
					>
						<option value="all">{$_('projects_filters.all')}</option>
						{#each filterOptions.categories as category}
							<option value={category}>{category}</option>
						{/each}
					</select>
				</div>
			{/if}

			{#if showTechnology}
				<div class="filter-group">
					<label for="tech-filter" class="filter-label">{$_('projects_filters.technology')}</label>
					<select
						id="tech-filter"
						value={currentFilters.technology}
						on:change={(e) => handleFilterChange('technology', e.target.value)}
						class="filter-select"
					>
						<option value="all">{$_('projects_filters.all')}</option>
						{#each filterOptions.technologies as tech}
							<option value={tech}>{tech}</option>
						{/each}
					</select>
				</div>
			{/if}

			{#if showYear}
				<div class="filter-group">
					<label for="year-filter" class="filter-label">{$_('projects_filters.year')}</label>
					<select
						id="year-filter"
						value={currentFilters.year}
						on:change={(e) => handleFilterChange('year', e.target.value)}
						class="filter-select"
					>
						<option value="all">{$_('projects_filters.all')}</option>
						{#each filterOptions.years as year}
							<option value={year}>{year}</option>
						{/each}
					</select>
				</div>
			{/if}

			{#if showReset}
				<div class="filter-group">
					<button
						on:click={resetAllFilters}
						class="reset-button"
						class:has-filters={activeFiltersCount > 0}
						disabled={activeFiltersCount === 0}
					>
						{$_('projects_filters.reset')}
						{#if activeFiltersCount > 0}
							<span class="filters-count">({activeFiltersCount})</span>
						{/if}
					</button>
				</div>
			{/if}
		</div>

		{#if layout === 'compact' && activeFiltersCount > 0}
			<div class="active-filters">
				<span class="active-filters-label">{$_('projects_filters.active_filters')} :</span>
				<div class="active-filters-tags">
					{#if currentFilters.search}
						<span class="filter-tag">
							{$_('projects_filters.search')}: "{currentFilters.search}"
							<button on:click={() => handleFilterChange('search', '')}>✕</button>
						</span>
					{/if}
					{#if currentFilters.category !== 'all'}
						<span class="filter-tag">
							{currentFilters.category}
							<button on:click={() => handleFilterChange('category', 'all')}>✕</button>
						</span>
					{/if}
					{#if currentFilters.technology !== 'all'}
						<span class="filter-tag">
							{currentFilters.technology}
							<button on:click={() => handleFilterChange('technology', 'all')}>✕</button>
						</span>
					{/if}
					{#if currentFilters.year !== 'all'}
						<span class="filter-tag">
							{currentFilters.year}
							<button on:click={() => handleFilterChange('year', 'all')}>✕</button>
						</span>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.filters-container {
		background: var(--info-note-bg);
		border-radius: 8px;
		padding: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
	}

	.search-section {
		margin-bottom: var(--spacing-md);
	}

	.search-input-wrapper {
		position: relative;
		width: 100%;
	}

	.search-input {
		width: 100%;
		padding: var(--spacing-sm);
		padding-right: 40px;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		font-size: 1rem;
		background: white;
		color: var(--color-text);
	}

	.search-input:focus {
		outline: none;
		border-color: var(--color-green);
		box-shadow: 0 0 0 2px rgba(22, 163, 74, 0.1);
	}

	.clear-search {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text);
		font-size: 1.2rem;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-weight: 600;
	}

	.clear-search:hover {
		background: #e0e0e0;
		color: var(--color-text);
	}

	.filters-row {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
		align-items: end;
	}

	.filter-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		min-width: 120px;
	}

	.filter-label {
		font-size: 0.85rem;
		color: var(--color-text);
		font-weight: 600;
	}

	.filter-select {
		padding: var(--spacing-xs) var(--spacing-sm);
		border: 1px solid var(--color-border);
		border-radius: 6px;
		background: white;
		font-size: 0.9rem;
		color: var(--color-text);
	}

	.filter-select:focus {
		outline: none;
		border-color: var(--color-green);
	}

	.reset-button {
		padding: var(--spacing-xs) var(--spacing-sm);
		background: #d0d0d0;
		color: var(--color-text);
		border: none;
		border-radius: 6px;
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		font-weight: 600;
	}

	.reset-button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		color: var(--color-text);
	}

	.reset-button.has-filters {
		background: var(--color-green);
		color: white;
	}

	.reset-button.has-filters:hover:not(:disabled) {
		background: var(--color-green-hover);
	}

	.filters-count {
		font-size: 0.8rem;
		background: rgba(255, 255, 255, 0.3);
		padding: 2px 6px;
		border-radius: 10px;
		font-weight: 700;
	}

	.active-filters {
		margin-top: var(--spacing-md);
		padding-top: var(--spacing-md);
		border-top: 1px solid var(--color-border);
	}

	.active-filters-label {
		font-size: 0.85rem;
		color: var(--color-text);
		margin-bottom: var(--spacing-xs);
		display: block;
		font-weight: 600;
	}

	.active-filters-tags {
		display: flex;
		gap: var(--spacing-xs);
		flex-wrap: wrap;
	}

	.filter-tag {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-xs) var(--spacing-sm);
		background: var(--color-green);
		color: white;
		border-radius: 16px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.filter-tag button {
		background: none;
		border: none;
		color: white;
		cursor: pointer;
		font-size: 0.9rem;
		padding: 0;
		width: 18px;
		height: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-weight: 700;
	}

	.filter-tag button:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	.filters-container.vertical .filters-row {
		flex-direction: column;
		align-items: stretch;
	}

	.filters-container.vertical .filter-group {
		min-width: auto;
	}

	.filters-container.compact {
		padding: var(--spacing-sm);
	}

	.filters-container.compact .search-section {
		margin-bottom: var(--spacing-sm);
	}

	@media (prefers-color-scheme: dark) {
		.search-input,
		.filter-select {
			background: var(--nav-bg);
			color: var(--color-text);
			border-color: var(--color-border);
		}

		.clear-search:hover {
			background: #404040;
		}

		.reset-button:not(.has-filters) {
			background: #404040;
		}
	}

	@media (max-width: 600px) {
		.filters-row {
			flex-direction: column;
			align-items: stretch;
		}

		.filter-group {
			min-width: auto;
			width: 100%;
		}

		.reset-button {
			align-self: stretch;
			justify-content: center;
		}
	}
</style>