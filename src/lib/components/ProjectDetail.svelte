<script>
    export let title = '';
    export let content = '';
    export let contentBlocks = [];
    export let images = [];
    export let codeSnippets = [];
    export let sources = [];
    export let downloads = [];

    function openImageModal(imageSrc, imageAlt) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        modalImg.alt = imageAlt;
        setTimeout(() => modal.focus(), 100);
    }

    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none';
    }

    function handleImageKeydown(event, imageSrc, imageAlt) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openImageModal(imageSrc, imageAlt);
        }
    }

    function handleModalKeydown(event) {
        if (event.key === 'Escape') {
            closeImageModal();
        }
    }

    function handleCloseKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            closeImageModal();
        }
    }

    function scrollCarousel(containerId, direction) {
        const container = document.getElementById(containerId);
        const scrollAmount = 320;
        
        if (direction === 'left') {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    }
</script>

<div class="project-detail">
    {#if title}
        <h3 class="detail-title">{title}</h3>
    {/if}

    {#if content}
        <div class="detail-content">
            {@html content}
        </div>
    {/if}

    {#if contentBlocks.length > 0}
        <div class="modular-content">
            {#each contentBlocks as block, index}
                {#if block.type === 'text'}
                    <div class="content-text">
                        {#if block.title}
                            <h4 class="block-title" class:underlined={block.underlined}>{block.title}</h4>
                        {/if}
                        {@html block.content}
                    </div>
                {:else if block.type === 'images'}
                    <div class="content-images">
                        {#if block.title}
                            <h4 class="block-title" class:underlined={block.underlined}>{block.title}</h4>
                        {/if}
                        <p class="click-hint">💡 Cliquez sur une image pour l'agrandir</p>
                        <div class="images-carousel-container">
                            {#if block.images.length > 1}
                                <button 
                                    class="carousel-btn carousel-btn-left" 
                                    on:click={() => scrollCarousel(`carousel-${index}`, 'left')}
                                    aria-label="Image précédente"
                                >
                                    ‹
                                </button>
                            {/if}
                            <div class="images-carousel" id="carousel-{index}" class:single-image={block.images.length === 1}>
                                {#each block.images as image}
                                    <div 
                                        class="carousel-image-item" 
                                        role="button"
                                        tabindex="0"
                                        on:click={() => openImageModal(image.src, image.alt)}
                                        on:keydown={(e) => handleImageKeydown(e, image.src, image.alt)}
                                        aria-label="Agrandir l'image : {image.alt}"
                                    >
                                        <img src={image.src} alt={image.alt} loading="lazy" />
                                        {#if image.caption}
                                            <p class="image-caption">{image.caption}</p>
                                        {/if}
                                    </div>
                                {/each}
                            </div>
                            {#if block.images.length > 1}
                                <button 
                                    class="carousel-btn carousel-btn-right" 
                                    on:click={() => scrollCarousel(`carousel-${index}`, 'right')}
                                    aria-label="Image suivante"
                                >
                                    ›
                                </button>
                            {/if}
                        </div>
                    </div>
                {:else if block.type === 'code'}
                    <div class="content-code">
                        {#if block.title}
                            <h4 class="block-title" class:underlined={block.underlined}>{block.title}</h4>
                        {/if}
                        <div class="code-snippet">
                            <div class="snippet-header">
                                <span class="snippet-language">{block.language}</span>
                                {#if block.snippetTitle}
                                    <span class="snippet-title">{block.snippetTitle}</span>
                                {/if}
                            </div>
                            <pre class="snippet-code"><code>{block.code}</code></pre>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    {/if}

    {#if images.length > 0}
        <div class="detail-images">
            <h4>Captures d'écran</h4>
            <p class="click-hint">💡 Cliquez sur une image pour l'agrandir</p>
            <div class="images-grid">
                {#each images as image}
                    <div 
                        class="image-item" 
                        role="button"
                        tabindex="0"
                        on:click={() => openImageModal(image.src, image.alt)}
                        on:keydown={(e) => handleImageKeydown(e, image.src, image.alt)}
                        aria-label="Agrandir l'image : {image.alt}"
                    >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                        {#if image.caption}
                            <p class="image-caption">{image.caption}</p>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    {/if}

    {#if codeSnippets.length > 0}
        <div class="detail-section">
            <h4>Extraits de code</h4>
            {#each codeSnippets as snippet}
                <div class="code-snippet">
                    <div class="snippet-header">
                        <span class="snippet-language">{snippet.language}</span>
                        {#if snippet.title}
                            <span class="snippet-title">{snippet.title}</span>
                        {/if}
                    </div>
                    <pre class="snippet-code"><code>{snippet.code}</code></pre>
                </div>
            {/each}
        </div>
    {/if}

    {#if sources.length > 0}
        <div class="detail-section">
            <h2 class="section-title">Sources</h2>
            <div class="sources-list">
                {#each sources as source}
                    <p class="source-item">
                        <strong>{source.name}</strong> - {source.description}
                        <a href={source.url} target="_blank" rel="noopener noreferrer" class="source-url">
                            {source.url}
                        </a>
                    </p>
                {/each}
            </div>
        </div>
    {/if}

    {#if downloads.length > 0}
        <div class="detail-section">
            <h2 class="section-title">Documents à télécharger</h2>
            <div class="downloads-grid" class:single-download={downloads.length === 1}>
                {#each downloads as download}
                    <div class="download-item">
                        <div class="download-header">
                            <div class="download-icon">
                                {#if download.icon.startsWith('/') || download.icon.startsWith('http')}
                                    <img src={download.icon} alt="Icône {download.title}" width="24" height="24" />
                                {:else}
                                    <span>{download.icon}</span>
                                {/if}
                            </div>
                            <h5 class="download-title">{download.title}</h5>
                        </div>
                        <p class="download-description">{download.description}</p>
                        <a href="/downloads/{download.filename}" class="download-link" download>
                            Télécharger {download.filename}
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<!-- Modal pour agrandir les images -->
<div 
    id="imageModal" 
    class="modal" 
    role="dialog"
    aria-modal="true"
    aria-label="Image agrandie"
    tabindex="-1"
    on:click={closeImageModal}
    on:keydown={handleModalKeydown}
>
    <span 
        class="modal-close" 
        role="button"
        tabindex="0"
        aria-label="Fermer l'image agrandie"
        on:click={closeImageModal}
        on:keydown={handleCloseKeydown}
    >&times;</span>
    <img class="modal-content" id="modalImg" alt="">
</div>

<style>
    .section-title {
        color: var(--color-green);
    }
    
    .project-detail {
        max-width: 100%;
    }

    .detail-title {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: var(--spacing-md);
    }

    .detail-content {
        line-height: 1.7;
        color: var(--color-text-light);
        margin-bottom: var(--spacing-lg);
    }

    .detail-content :global(h5) {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text);
        margin: var(--spacing-md) 0 var(--spacing-sm) 0;
    }

    .detail-content :global(p) {
        margin-bottom: var(--spacing-sm);
    }

    .detail-content :global(ul) {
        margin: var(--spacing-sm) 0 var(--spacing-sm) var(--spacing-md);
        color: var(--color-text-light);
    }

    .detail-content :global(li) {
        margin-bottom: var(--spacing-xs);
    }

    .modular-content {
        margin-bottom: var(--spacing-lg);
    }

    .content-text {
        line-height: 1.7;
        color: var(--color-text-light);
        margin-bottom: var(--spacing-lg);
    }

    .content-text :global(h5) {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text);
        margin: var(--spacing-md) 0 var(--spacing-sm) 0;
    }

    .content-text :global(p) {
        margin-bottom: var(--spacing-sm);
    }

    .content-text :global(ul) {
        margin: var(--spacing-sm) 0 var(--spacing-sm) var(--spacing-md);
        color: var(--color-text-light);
    }

    .content-text :global(li) {
        margin-bottom: var(--spacing-xs);
    }

    .content-images {
        margin-bottom: var(--spacing-lg);
    }

    .block-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: var(--spacing-md);
        display: inline-block;
    }

    .block-title.underlined {
        padding-bottom: var(--spacing-xs);
        border-bottom: 2px solid var(--color-green);
    }

    .click-hint {
        font-size: 0.75rem;
        color: var(--color-text-light);
        margin-bottom: var(--spacing-xs);
        opacity: 0.7;
    }

    .images-carousel-container {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .images-carousel {
        display: flex;
        gap: var(--spacing-md);
        overflow-x: auto;
        scroll-behavior: smooth;
        padding: var(--spacing-sm) var(--spacing-sm);
        flex: 1;
        scrollbar-width: thin;
        scrollbar-color: var(--color-green) var(--color-border);
    }

    .images-carousel.single-image {
        justify-content: center;
        overflow-x: visible;
    }

    .images-carousel::-webkit-scrollbar {
        height: 8px;
    }

    .images-carousel::-webkit-scrollbar-track {
        background: var(--color-border);
        border-radius: 4px;
    }

    .images-carousel::-webkit-scrollbar-thumb {
        background: var(--color-green);
        border-radius: 4px;
    }

    .carousel-image-item {
        flex: 0 0 300px;
        border: 1px solid var(--color-border);
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease;
        cursor: pointer;
        background: var(--project-image-bg);
    }

    .carousel-image-item:hover,
    .carousel-image-item:focus {
        transform: translateY(-2px);
        outline: 2px solid var(--color-green);
        outline-offset: 2px;
    }

    .carousel-image-item img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        object-position: center;
        display: block;
        background: var(--nav-bg);
    }

    .carousel-btn {
        background: none;
        color: var(--color-green);
        border: none;
        cursor: pointer;
        font-size: 2.5rem;
        line-height: 1;
        transition: color 0.2s ease, transform 0.1s ease;
        flex-shrink: 0;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 60px;
    }

    .carousel-btn:hover {
        color: #1ea54e;
        transform: scale(1.1);
    }

    .carousel-btn:active {
        transform: scale(0.95);
    }

    .content-code {
        margin-bottom: var(--spacing-lg);
    }

    .detail-section {
        margin-bottom: var(--spacing-lg);
    }

    .detail-section h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: var(--spacing-sm);
        padding-bottom: var(--spacing-xs);
        border-bottom: 2px solid var(--color-green);
        display: inline-block;
    }

    .detail-images {
        margin-bottom: var(--spacing-lg);
    }

    .detail-images h4 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: var(--spacing-md);
    }

    .images-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-md);
    }

    .image-item {
        border: 1px solid var(--color-border);
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease;
        cursor: pointer;
        background: var(--project-image-bg);
    }

    .image-item:hover,
    .image-item:focus {
        transform: translateY(-2px);
        outline: 2px solid var(--color-green);
        outline-offset: 2px;
    }

    .image-item img {
        width: 100%;
        height: 250px;
        object-fit: contain;
        object-position: center;
        display: block;
        background: var(--nav-bg);
    }

    .image-caption {
        padding: var(--spacing-sm);
        font-size: 0.85rem;
        color: var(--color-text-light);
        background: var(--info-note-bg);
        margin: 0;
        text-align: center;
    }

    .code-snippet {
        margin-bottom: var(--spacing-md);
        border: 1px solid var(--color-border);
        border-radius: 8px;
        overflow: hidden;
    }

    .snippet-header {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm) var(--spacing-md);
        background: var(--info-note-bg);
        border-bottom: 1px solid var(--color-border);
    }

    .snippet-language {
        background: var(--color-green);
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    .snippet-title {
        font-size: 0.9rem;
        color: var(--color-text);
        font-weight: 500;
    }

    .snippet-code {
        padding: var(--spacing-md);
        background: var(--tech-tag-bg);
        margin: 0;
        overflow-x: auto;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        line-height: 1.5;
        color: var(--color-text);
    }

    /* Styles pour les sources */
    .sources-list {
        background: var(--info-note-bg);
        border-radius: 8px;
        padding: var(--spacing-md);
        border-left: 3px solid var(--color-green);
    }

    .source-item {
        margin-bottom: var(--spacing-sm);
        line-height: 1.6;
        color: var(--color-text-light);
    }

    .source-item:last-child {
        margin-bottom: 0;
    }

    .source-item strong {
        color: var(--color-text);
    }

    .source-url {
        display: block;
        color: var(--color-green);
        text-decoration: none;
        font-size: 0.9rem;
        margin-top: var(--spacing-xs);
        word-break: break-all;
    }

    .source-url:hover {
        text-decoration: underline;
    }

    /* Styles existants pour les téléchargements */
    .downloads-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-md);
    }

    .downloads-grid.single-download .download-item {
        text-align: center;
    }

    .download-item {
        border: 1px solid var(--color-border);
        border-radius: 8px;
        padding: var(--spacing-md);
        background: var(--info-note-bg);
        transition: transform 0.2s ease;
    }

    .download-item:hover {
        transform: translateY(-2px);
    }

    .download-header {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-sm);
    }

    .download-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }

    .download-icon span {
        font-size: 1.5rem;
        line-height: 1;
    }

    .download-icon img {
        object-fit: contain;
    }

    .download-title {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-text);
        margin: 0;
    }

    .download-description {
        color: var(--color-text-light);
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: var(--spacing-md);
    }

    .download-link {
        display: inline-block;
        background: var(--color-green);
        color: white;
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: background-color 0.2s ease;
    }

    .download-link:hover {
        background: #1ea54e;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        cursor: pointer;
    }

    .modal:focus {
        outline: none;
    }

    .modal-content {
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
    }

    .modal-close {
        position: absolute;
        top: 20px;
        right: 35px;
        color: var(--color-green);
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        z-index: 1001;
        border-radius: 4px;
        padding: 5px;
        transition: opacity 0.2s ease;
    }

    .modal-close:hover,
    .modal-close:focus {
        opacity: 0.7;
        outline-offset: 2px;
    }

    @media (max-width: 600px) {
        .images-grid,
        .downloads-grid {
            grid-template-columns: 1fr;
        }

        .snippet-code {
            font-size: 0.75rem;
        }

        .image-item img {
            height: 200px;
        }

        .carousel-image-item {
            flex: 0 0 250px;
        }

        .carousel-image-item img {
            height: 150px;
        }

        .images-carousel-container {
            position: relative;
            padding-bottom: 60px;
        }

        .images-carousel {
            margin-bottom: var(--spacing-md);
        }

        .carousel-btn-left {
            position: absolute;
            bottom: 0;
            left: calc(50% - 75px);
            top: auto;
            transform: none;
        }

        .carousel-btn-right {
            position: absolute;
            bottom: 0;
            right: calc(50% - 75px);
            top: auto;
            transform: none;
        }

        .carousel-btn {
            font-size: 2rem;
            min-width: 50px;
            height: 50px;
        }
    }
</style>