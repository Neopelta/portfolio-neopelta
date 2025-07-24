<script>
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ to }) => {
		/* TODO: delete console.log*/
		console.log('Navigué vers :', to.url.pathname);
	});
</script>

<slot />
