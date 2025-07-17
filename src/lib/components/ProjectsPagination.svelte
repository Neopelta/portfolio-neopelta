<script>
    import { projectsMetadata, projectsActions } from '$lib/stores/projectsStore.js';
    
    export let showInfo = true;
    export let showJumper = true;
    export let maxVisiblePages = 5;
    export let size = 'normal'; // 'small' | 'normal' | 'large'
    
    $: metadata = $projectsMetadata;
    
    $: visiblePages = calculateVisiblePages(metadata.currentPage, metadata.totalPages, maxVisiblePages);
    
    function calculateVisiblePages(current, total, max) {
        if (total <= max) {
            return Array.from({ length: total }, (_, i) => i + 1);
        }
        
        const half = Math.floor(max / 2);
        let start = Math.max(1, current - half);
        let end = Math.min(total, start + max - 1);
        
        if (end - start + 1 < max) {
            start = Math.max(1, end - max + 1);
        }
        
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
    
    function goToPage(page) {
        if (page >= 1 && page <= metadata.totalPages) {
            projectsActions.setPage(page);
        }
    }
    
    function handleJumperInput(event) {
        if (event.key === 'Enter') {
            const page = parseInt(event.target.value);
            if (!isNaN(page)) {
                goToPage(page);
                event.target.value = '';
            }
        }
    }
</script>

{#if metadata.totalPages > 1}
    <div class="pagination-container" class:small={size === 'small'} class:large={size === 'large'}>
        {#if showInfo}
            <div class="pagination-info">
                <span class="results-text">
                    Affichage de {(metadata.currentPage - 1) * metadata.itemsPerPage + 1}-{Math.min(metadata.currentPage * metadata.itemsPerPage, metadata.total)} 
                    sur {metadata.total} projets
                </span>
            </div>
        {/if}

        <div class="pagination-controls">
            {#if metadata.currentPage > 1 && visiblePages[0] > 1}
                <button 
                    on:click={() => goToPage(1)}
                    class="pagination-btn page-btn"
                    title="Première page"
                >
                    1
                </button>
                {#if visiblePages[0] > 2}
                    <span class="pagination-ellipsis">...</span>
                {/if}
            {/if}

            <button 
                on:click={() => projectsActions.prevPage()}
                disabled={metadata.currentPage === 1}
                class="pagination-btn nav-btn"
                title="Page précédente"
            >
                ← Précédent
            </button>

            <div class="page-numbers">
                {#each visiblePages as page}
                    <button 
                        on:click={() => goToPage(page)}
                        class="pagination-btn page-btn"
                        class:active={page === metadata.currentPage}
                        title="Page {page}"
                    >
                        {page}
                    </button>
                {/each}
            </div>

            <button 
                on:click={() => projectsActions.nextPage()}
                disabled={metadata.currentPage === metadata.totalPages}
                class="pagination-btn nav-btn"
                title="Page suivante"
            >
                Suivant →
            </button>

            {#if metadata.currentPage < metadata.totalPages && visiblePages[visiblePages.length - 1] < metadata.totalPages}
                {#if visiblePages[visiblePages.length - 1] < metadata.totalPages - 1}
                    <span class="pagination-ellipsis">...</span>
                {/if}
                <button 
                    on:click={() => goToPage(metadata.totalPages)}
                    class="pagination-btn page-btn"
                    title="Dernière page"
                >
                    {metadata.totalPages}
                </button>
            {/if}
        </div>

        {#if showJumper && metadata.totalPages > maxVisiblePages}
            <div class="page-jumper">
                <label for="page-input" class="jumper-label">Aller à la page :</label>
                <input 
                    id="page-input"
                    type="number" 
                    min="1" 
                    max={metadata.totalPages}
                    placeholder={metadata.currentPage}
                    on:keydown={handleJumperInput}
                    class="jumper-input"
                />
            </div>
        {/if}
    </div>
{/if}

<style>
    .pagination-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        align-items: center;
        margin: var(--spacing-xl) 0;
    }

    .pagination-info {
        text-align: center;
    }

    .results-text {
        color: var(--color-text-light);
        font-size: 0.9rem;
    }

    .pagination-controls {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        flex-wrap: wrap;
        justify-content: center;
    }

    .page-numbers {
        display: flex;
        gap: var(--spacing-xs);
    }

    .pagination-btn {
        padding: var(--spacing-sm) var(--spacing-md);
        border: 1px solid var(--color-border);
        background: white;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.2s ease;
        min-width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination-btn:not(:disabled):hover {
        background: var(--color-green);
        color: white;
        border-color: var(--color-green);
    }

    .page-btn.active {
        background: var(--color-green);
        color: white;
        border-color: var(--color-green);
        font-weight: 600;
    }

    .nav-btn {
        padding: var(--spacing-sm) var(--spacing-md);
        min-width: auto;
    }

    .pagination-ellipsis {
        padding: var(--spacing-sm);
        color: var(--color-text-light);
        font-size: 0.9rem;
    }

    .page-jumper {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: 0.9rem;
    }

    .jumper-label {
        color: var(--color-text-light);
    }

    .jumper-input {
        width: 60px;
        padding: var(--spacing-xs);
        border: 1px solid var(--color-border);
        border-radius: 4px;
        text-align: center;
        font-size: 0.9rem;
    }

    .jumper-input:focus {
        outline: none;
        border-color: var(--color-green);
    }

    .pagination-container.small {
        margin: var(--spacing-md) 0;
    }

    .pagination-container.small .pagination-btn {
        padding: var(--spacing-xs) var(--spacing-sm);
        font-size: 0.8rem;
        min-width: 32px;
    }

    .pagination-container.small .results-text {
        font-size: 0.8rem;
    }

    .pagination-container.large .pagination-btn {
        padding: var(--spacing-md) var(--spacing-lg);
        font-size: 1rem;
        min-width: 48px;
    }

    @media (max-width: 600px) {
        .pagination-container {
            gap: var(--spacing-sm);
        }

        .pagination-controls {
            flex-direction: column;
            gap: var(--spacing-sm);
        }

        .page-numbers {
            order: -1;
        }

        .nav-btn {
            flex: 1;
            min-width: 120px;
        }

        .page-jumper {
            margin-top: var(--spacing-sm);
        }
    }

    @media (max-width: 400px) {
        .page-numbers {
            max-width: 100%;
            overflow-x: auto;
            padding: var(--spacing-xs);
        }

        .pagination-btn {
            min-width: 36px;
            padding: var(--spacing-xs) var(--spacing-sm);
        }
    }
</style>