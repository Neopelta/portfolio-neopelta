<script>
	import { _ } from 'svelte-i18n';
	import Avatar from '$lib/components/Avatar.svelte';
</script>

<section class="section">
	<div class="about">
		<p>
			{$_('about.currently')}
		</p>

		<div class="info-note">
			<Avatar size="medium" speaking={true} />
			<div>
				<p>
					{$_('about.experience')}
				</p>
			</div>
		</div>

		<p>
			{$_('about.location')}
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
