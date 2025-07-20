<script>
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<section id="contact" class="contact">
	<div class="contact-wrapper">
		<div class="contact-hero">
			<div class="hero-content">
				<h2>Démarrons un projet ensemble</h2>
				<p>
					Je recherche une alternance qui me permettra de contribuer à des projets innovants tout en
					continuant mon apprentissage.
				</p>
			</div>
			<div class="hero-avatar">
				<Avatar size="large" speaking={true} />
			</div>
		</div>

		<div class="info-note">
			<div>
				<p>
					<strong>Recherche alternance</strong> de 12 mois à partir de septembre 2025 en Développement
					Logiciel & Big Data.
				</p>
				<p>Basé à Poitiers • Mobile sur Paris et Montpellier</p>
			</div>
		</div>

		<div class="contact-methods">
			<a href="mailto:rplutafontaine@protonmail.com" class="contact-link email">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>
				Email
			</a>
			<a
				href="https://linkedin.com/in/ronan-pluta-fontaine"
				class="contact-link linkedin"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/images/logo/linkedin/LinkedIn-logo.svg" alt="LinkedIn" width="20" height="20" />
				LinkedIn
			</a>
			<a
				href="https://github.com/Neopelta"
				class="contact-link github"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src="/images/logo/github/github-logo.svg" alt="GitHub" width="20" height="20" />
				GitHub
			</a>
		</div>
	</div>
</section>

<style>
	.contact {
		padding: var(--spacing-xl) 0;
		background: white;
		border-top: 1px solid var(--color-border);
	}

	.contact-wrapper {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	.contact-hero {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--spacing-lg);
		gap: var(--spacing-lg);
	}

	.hero-content {
		flex: 1;
	}

	.hero-content h2 {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--spacing-sm);
		line-height: 1.2;
	}

	.hero-content p {
		font-size: 1.1rem;
		color: var(--color-text-light);
		line-height: 1.6;
		margin: 0;
	}

	.hero-avatar {
		flex-shrink: 0;
	}

	.contact-methods {
		display: flex;
		gap: var(--spacing-lg);
		justify-content: center;
		flex-wrap: wrap;
	}

	.contact-link {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		color: var(--color-green);
		text-decoration: none;
		font-size: 1rem;
		font-weight: 500;
		transition: opacity 0.2s ease;
	}

	.contact-link:hover {
		text-decoration: underline;
		opacity: 0.8;
	}

	.contact-link svg,
	.contact-link img {
		flex-shrink: 0;
	}

	.contact-link.email svg {
		stroke: currentColor;
		fill: none;
	}

	.contact-link.linkedin img {
		filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
			brightness(118%) contrast(119%);
	}

	.contact-link.github img {
		filter: brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
			brightness(118%) contrast(119%);
	}

	@media (prefers-color-scheme: dark) {
		.contact-link.linkedin img,
		.contact-link.github img {
			filter: brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(1204%) hue-rotate(89deg)
				brightness(96%) contrast(86%);
		}
	}

	@media (max-width: 768px) {
		.contact-hero {
			flex-direction: column;
			text-align: center;
		}

		.hero-content h2 {
			font-size: 1.7rem;
		}

		.contact-methods {
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-md);
		}
	}

	@media (max-width: 600px) {
		.hero-content h2 {
			font-size: 1.5rem;
		}
	}

	@media (prefers-color-scheme: dark) {
		.contact {
			background: var(--body-bg);
			border-top-color: var(--color-border);
		}
	}
</style>
