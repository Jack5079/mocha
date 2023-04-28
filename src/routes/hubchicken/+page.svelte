<script>
	import { Hero, Switch, Button } from "$lib"
	export let data
	let video
	let autoplay
	let next
	/** @type {<Type>(arr: Type[]) => Type} */
	const random = arr => arr[Math.floor(Math.random() * arr.length)]
	function shuffle() {
		if (!next) {
			video = random(data.videos)
			next = random(data.videos)
		} else {
			video = next
			next = random(data.videos)
		}
	}
</script>

<svelte:head>
	<title>Mochachicken</title>
	<meta name="description" content="Hubchicken remade in Mocha" />
	<meta name="robots" content="noindex" />
</svelte:head>

<Hero>
	<section>
		<h1>Mochachicken</h1>
		<p>
			Welcome to hell. We have {data.videos.length} videos.
		</p>
		<Button on:click={shuffle}>Next video</Button>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			<Switch bind:toggled={autoplay} />
			Autoplay next video
		</label>
	</section>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video controls src={video} on:ended={() => autoplay && shuffle()} loop={!autoplay} autoplay />
</Hero>
<!-- svelte-ignore a11y-media-has-caption -->
<video preload="auto" src={next} hidden aria-hidden style="display:none" taborder="-1" />

<style>
	video {
		background: black;
		aspect-ratio: 16 / 9;
		height: 300px;
	}
</style>
