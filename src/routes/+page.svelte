<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getLanguagePreference } from '$lib/i18n';

	onMount(() => {
		const preferredLang = getLanguagePreference();
		goto(`/${preferredLang}`);
	});
</script>