<script>
	import { setContext } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { writable } from 'svelte/store';

	export let data;

	const langStore = writable(data.lang);
	$: langStore.set(data.lang);

	setContext('lang', langStore);

	afterNavigate(({ to }) => {
		console.log('Navigated to:', to.url.pathname);
	});
</script>

<slot />
