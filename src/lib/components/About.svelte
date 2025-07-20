<script>
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<section class="section">
	<div class="about">
		<p>
			Actuellement en Master 1 Informatique à l'Université de Poitiers (spécialisation Développement
			Logiciel & Big Data), je recherche une alternance de 12 mois à partir de septembre 2025.
			Passionné par l'agilité, l'automatisation et la qualité logicielle, je mets en pratique mes
			compétences en Java, React et développement d'APIs REST.
		</p>

		<div class="info-note">
			<Avatar size="medium" speaking={true} />
			<div>
				<p>
					Mon expérience chez Axelor m'a permis de développer des compétences en automatisation de
					processus et intégration d'APIs.
				</p>
			</div>
		</div>

		<p>
			Basé à Poitiers, je suis mobile sur Paris et Montpellier. Mon profil technique allie des
			compétences backend (Java, APIs, Base de donnée) et frontend (React, TypeScript) avec une
			approche méthodique des projets logiciels.
		</p>
	</div>
</section>

<style>
	.about {
		margin-bottom: var(--spacing-xl);
		line-height: 1.7;
		color: var(--color-text-light);
	}
</style>
