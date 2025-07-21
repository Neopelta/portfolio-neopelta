<script>
	export let size = 'medium'; // 'small', 'medium', 'large', 'extra-large'
	export let speaking = false; // To display ronan_speak.svg

	const sizes = {
		small: 32,
		medium: 64,
		large: 128,
		'extra-large': 256
	};

	$: avatarSrc = speaking
		? '/images/logo/ronan-px/ronan_speak.svg'
		: '/images/logo/ronan-px/ronan_default.svg';
	$: avatarSize = sizes[size];
</script>

<img
	src={avatarSrc}
	alt="Ronan avatar"
	width={avatarSize}
	height={avatarSize}
	class="avatar avatar-{size}"
/>

<style>
	.avatar {
		display: block;
		flex-shrink: 0;
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
	}

	.avatar-small {
		width: 32px;
		height: 32px;
	}

	.avatar-medium {
		width: 64px;
		height: 64px;
	}

	.avatar-large {
		width: 128px;
		height: 128px;
	}

	.avatar-extra-large {
		width: 256px;
		height: 256px;
	}
</style>