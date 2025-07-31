<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	const langStore = writable(data.lang);
	$: langStore.set(data.lang);

	setContext('lang', langStore);
</script>

<slot />