<script>
	import { afterNavigate } from '$app/navigation';

	afterNavigate(({ to }) => {
		console.log('Navigué vers :', to.url.pathname);
	});
</script>

<slot />
