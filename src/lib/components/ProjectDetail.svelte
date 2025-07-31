<script>
	import { _ } from 'svelte-i18n';

	export let title = '';
	export let content = '';
	export let contentBlocks = [];
	export let images = [];
	export let codeSnippets = [];
	export let sources = [];
	export let downloads = [];

	let currentImageIndex = 0;
	let currentImages = [];
	let isImageLoading = false;
	let previousFocusElement = null;

	function openImageModal(imageSrc, imageAlt, imagesArray = [], imageIndex = 0) {
		const modal = document.getElementById('imageModal');
		const modalImg = document.getElementById('modalImg');

		currentImages = [...imagesArray];
		currentImageIndex = imageIndex;
		isImageLoading = false;

		previousFocusElement = document.activeElement;

		modal.style.display = 'block';
		modalImg.src = imageSrc;
		modalImg.alt = imageAlt;
		setTimeout(() => modal.focus(), 100);
	}

	function closeImageModal() {
		const modal = document.getElementById('imageModal');
		modal.style.display = 'none';
		isImageLoading = false;

		if (previousFocusElement) {
			previousFocusElement.focus();
		}
	}

	function navigateToImage(direction) {
		if (currentImages.length === 0 || isImageLoading) return;

		if (direction === 'prev') {
			currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentImages.length - 1;
		} else {
			currentImageIndex = currentImageIndex < currentImages.length - 1 ? currentImageIndex + 1 : 0;
		}

		const modalImg = document.getElementById('modalImg');
		const currentImage = currentImages[currentImageIndex];

		isImageLoading = true;
		modalImg.style.opacity = '0.5';

		const newImg = new Image();
		newImg.onload = () => {
			modalImg.src = currentImage.src;
			modalImg.alt = currentImage.alt;
			modalImg.style.opacity = '1';
			isImageLoading = false;
		};
		newImg.onerror = () => {
			console.error("Erreur de chargement de l'image:", currentImage.src);
			modalImg.style.opacity = '1';
			isImageLoading = false;
		};
		newImg.src = currentImage.src;
	}

	function handleImageKeydown(event, imageSrc, imageAlt, imagesArray = [], imageIndex = 0) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			openImageModal(imageSrc, imageAlt, imagesArray, imageIndex);
		}
	}

	function handleModalKeydown(event) {
		if (event.key === 'Escape') {
			closeImageModal();
		} else if (event.key === 'ArrowLeft') {
			navigateToImage('prev');
		} else if (event.key === 'ArrowRight') {
			navigateToImage('next');
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
		<h2 class="detail-title">{title}</h2>
	{/if}

	{#if content}
		<div class="detail-content">
			{@html content}
		</div>
	{/if}

	{#if contentBlocks?.length > 0}
		<div class="modular-content">
			{#each contentBlocks as block, index}
				{#if block.type === 'text'}
					<div class="content-text">
						{#if block.title}
							<h3 class="block-title" class:underlined={block.underlined}>{block.title}</h3>
						{/if}
						{@html block.content}
					</div>
				{:else if block.type === 'images'}
					<div class="content-images">
						{#if block.title}
							<h3 class="block-title" class:underlined={block.underlined}>{block.title}</h3>
						{/if}
						<p class="click-hint">{$_('project_detail.click_hint')}</p>
						<div class="images-carousel-container">
							{#if block.images?.length > 1}
								<button
									class="carousel-btn carousel-btn-left"
									on:click={() => scrollCarousel(`carousel-${index}`, 'left')}
									aria-label={$_('project_detail.prev_image')}
								>
									‹
								</button>
							{/if}
							<div
								class="images-carousel"
								id="carousel-{index}"
								class:single-image={block.images?.length === 1}
							>
								{#each block.images as image, index}
									<div
										class="carousel-image-item"
										role="button"
										tabindex="0"
										on:click={() => {
											/* TODO: delete console.log*/
											console.log(
												'Clicked on image:',
												image.src,
												'at index:',
												index,
												'in array of length:',
												block.images.length
											);
											openImageModal(image.src, image.alt, block.images, index);
										}}
										on:keydown={(e) =>
											handleImageKeydown(e, image.src, image.alt, block.images, index)}
										aria-label="{$_('project_detail.enlarge_image')}: {image.alt}"
									>
										<img src={image.src} alt={image.alt} title={image.alt} loading="lazy" />
										{#if image.caption}
											<p class="image-caption">{image.caption}</p>
										{/if}
									</div>
								{/each}
							</div>
							{#if block.images?.length > 1}
								<button
									class="carousel-btn carousel-btn-right"
									on:click={() => scrollCarousel(`carousel-${index}`, 'right')}
									aria-label={$_('project_detail.next_image')}
								>
									›
								</button>
							{/if}
						</div>
					</div>
				{:else if block.type === 'code'}
					<div class="content-code">
						{#if block.title}
							<h3 class="block-title" class:underlined={block.underlined}>{block.title}</h3>
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

	{#if images?.length > 0}
		<div class="detail-images">
			<h3>{$_('project_detail.screenshots')}</h3>
			<p class="click-hint">{$_('project_detail.click_hint')}</p>
			<div class="images-grid">
				{#each images as image, index}
					<div
						class="image-item"
						role="button"
						tabindex="0"
						on:click={() => openImageModal(image.src, image.alt, images, index)}
						on:keydown={(e) => handleImageKeydown(e, image.src, image.alt, images, index)}
						aria-label="{$_('project_detail.enlarge_image')}: {image.alt}"
					>
						<img src={image.src} alt={image.alt} title={image.alt} loading="lazy" />
						{#if image.caption}
							<p class="image-caption">{image.caption}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if codeSnippets?.length > 0}
		<div class="detail-section">
			<h3>{$_('project_detail.code_snippets')}</h3>
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

	{#if sources?.length > 0}
		<div class="detail-section">
			<h2 class="section-title">{$_('project_detail.sources')}</h2>
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

	{#if downloads?.length > 0}
		<div class="detail-section">
			<h2 class="section-title">{$_('project_detail.downloads')}</h2>
			<div class="downloads-grid" class:single-download={downloads?.length === 1}>
				{#each downloads as download}
					<div class="download-item">
						<div class="download-header">
							<div class="download-icon">
								{#if download.icon.startsWith('/') || download.icon.startsWith('http')}
									<img
										src={download.icon}
										alt="{$_('project_detail.icon')} {download.title}"
										title="{$_('project_detail.icon')} {download.title}"
										width="24"
										height="24"
									/>
								{:else}
									<span>{download.icon}</span>
								{/if}
							</div>
							<h3 class="download-title">{download.title}</h3>
						</div>
						<p class="download-description">{download.description}</p>
						<a href="/downloads/{download.filename}" class="download-link" download>
							{$_('project_detail.download')}
							{download.filename}
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

<div
	id="imageModal"
	class="modal"
	role="dialog"
	aria-modal="true"
	aria-label={$_('project_detail.enlarged_image')}
	tabindex="-1"
	on:click={closeImageModal}
	on:keydown={handleModalKeydown}
>
	<span
		class="modal-close"
		role="button"
		tabindex="0"
		aria-label={$_('project_detail.close_image')}
		on:click={closeImageModal}
		on:keydown={handleCloseKeydown}>&times;</span
	>

	{#if currentImages.length > 1}
		<button
			class="modal-nav modal-nav-prev"
			on:click={(e) => {
				e.stopPropagation();
				navigateToImage('prev');
			}}
			aria-label={$_('project_detail.prev_image')}
		>
			‹
		</button>

		<button
			class="modal-nav modal-nav-next"
			on:click={(e) => {
				e.stopPropagation();
				navigateToImage('next');
			}}
			aria-label={$_('project_detail.next_image')}
		>
			›
		</button>

		<div class="modal-counter">
			{currentImageIndex + 1} / {currentImages.length}
		</div>
	{/if}

	<img
		class="modal-content"
		id="modalImg"
		alt=""
		title={$_('project_detail.enlarged_image_title')}
	/>
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
		opacity: 0.9;
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
		-webkit-overflow-scrolling: touch;
		scroll-snap-type: x mandatory;
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
		transition:
			color 0.2s ease,
			transform 0.1s ease;
		flex-shrink: 0;
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 40px;
		height: 60px;
	}

	.carousel-btn:hover {
		color: var(--color-green-hover);
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

	.detail-section h3 {
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

	.detail-images h3 {
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
		background: var(--color-green-hover);
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

	.modal-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.7);
		color: var(--color-green);
		border: none;
		font-size: 3rem;
		font-weight: bold;
		cursor: pointer;
		padding: 20px 15px;
		border-radius: 4px;
		transition: all 0.2s ease;
		z-index: 1002;
		user-select: none;
	}

	.modal-nav:hover,
	.modal-nav:focus {
		background: rgba(0, 0, 0, 0.9);
		opacity: 0.8;
		outline: 2px solid var(--color-green);
		outline-offset: 2px;
	}

	.modal-nav-prev {
		left: 20px;
	}

	.modal-nav-next {
		right: 20px;
	}

	.modal-counter {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.7);
		color: white;
		padding: 8px 16px;
		border-radius: 16px;
		font-size: 0.9rem;
		z-index: 1002;
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

		.modal-nav {
			font-size: 2.5rem;
			padding: 15px 12px;
		}

		.modal-nav-prev {
			left: 10px;
		}

		.modal-nav-next {
			right: 10px;
		}

		.modal-counter {
			bottom: 15px;
			font-size: 0.8rem;
			padding: 6px 12px;
		}
	}
</style>
