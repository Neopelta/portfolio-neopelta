<script>
    import { filters, projectsActions, filterOptions } from '$lib/stores/projectsStore.js';
    
    export let showSearch = true;
    export let showCategory = true;
    export let showTechnology = true;
    export let showYear = true;
    export let showReset = true;
    export let layout = 'horizontal'; // 'horizontal' | 'vertical' | 'compact'
    export let placeholder = "Rechercher un projet...";
    
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
    
    $: activeFiltersCount = Object.entries(currentFilters)
        .filter(([key, value]) => key !== 'featuredOnly' && value !== 'all' && value !== '')
        .length;
</script>

<div class="filters-container" class:compact={layout === 'compact'} class:vertical={layout === 'vertical'}>
    {#if showSearch}
        <div class="search-section">
            <div class="search-input-wrapper">
                <input 
                    type="text" 
                    placeholder={placeholder}
                    value={currentFilters.search}
                    on:input={handleSearchInput}
                    class="search-input"
                />
                {#if currentFilters.search}
                    <button 
                        on:click={() => handleFilterChange('search', '')}
                        class="clear-search"
                        title="Effacer la recherche"
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
                    <label for="category-filter" class="filter-label">Catégorie</label>
                    <select 
                        id="category-filter"
                        value={currentFilters.category}
                        on:change={(e) => handleFilterChange('category', e.target.value)}
                        class="filter-select"
                    >
                        <option value="all">Toutes</option>
                        {#each filterOptions.categories as category}
                            <option value={category}>{category}</option>
                        {/each}
                    </select>
                </div>
            {/if}

            {#if showTechnology}
                <div class="filter-group">
                    <label for="tech-filter" class="filter-label">Technologie</label>
                    <select 
                        id="tech-filter"
                        value={currentFilters.technology}
                        on:change={(e) => handleFilterChange('technology', e.target.value)}
                        class="filter-select"
                    >
                        <option value="all">Toutes</option>
                        {#each filterOptions.technologies as tech}
                            <option value={tech}>{tech}</option>
                        {/each}
                    </select>
                </div>
            {/if}

            {#if showYear}
                <div class="filter-group">
                    <label for="year-filter" class="filter-label">Année</label>
                    <select 
                        id="year-filter"
                        value={currentFilters.year}
                        on:change={(e) => handleFilterChange('year', e.target.value)}
                        class="filter-select"
                    >
                        <option value="all">Toutes</option>
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
                        Réinitialiser
                        {#if activeFiltersCount > 0}
                            <span class="filters-count">({activeFiltersCount})</span>
                        {/if}
                    </button>
                </div>
            {/if}
        </div>

        {#if layout === 'compact' && activeFiltersCount > 0}
            <div class="active-filters">
                <span class="active-filters-label">Filtres actifs :</span>
                <div class="active-filters-tags">
                    {#if currentFilters.search}
                        <span class="filter-tag">
                            Recherche: "{currentFilters.search}"
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
    }

    .search-input:focus {
        outline: none;
        border-color: var(--color-green);
        box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.1);
    }

    .clear-search {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text-light);
        font-size: 1.2rem;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .clear-search:hover {
        background: #f0f0f0;
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
        color: var(--color-text-light);
        font-weight: 500;
    }

    .filter-select {
        padding: var(--spacing-xs) var(--spacing-sm);
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background: white;
        font-size: 0.9rem;
    }

    .filter-select:focus {
        outline: none;
        border-color: var(--color-green);
    }

    .reset-button {
        padding: var(--spacing-xs) var(--spacing-sm);
        background: var(--color-border);
        color: var(--color-text-light);
        border: none;
        border-radius: 6px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
    }

    .reset-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .reset-button.has-filters {
        background: var(--color-green);
        color: white;
    }

    .reset-button.has-filters:hover:not(:disabled) {
        background: #1ea54e;
    }

    .filters-count {
        font-size: 0.8rem;
        background: rgba(255, 255, 255, 0.2);
        padding: 2px 6px;
        border-radius: 10px;
    }

    .active-filters {
        margin-top: var(--spacing-md);
        padding-top: var(--spacing-md);
        border-top: 1px solid var(--color-border);
    }

    .active-filters-label {
        font-size: 0.85rem;
        color: var(--color-text-light);
        margin-bottom: var(--spacing-xs);
        display: block;
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
    }

    .filter-tag button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 0.8rem;
        padding: 0;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .filter-tag button:hover {
        background: rgba(255, 255, 255, 0.2);
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