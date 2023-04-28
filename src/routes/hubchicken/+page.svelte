<script>
	import Hero from "$lib/Hero.svelte"
	import Switch from "$lib/Switch.svelte"
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

<Hero>
	<section>
		<h1>Hubchicken.tk</h1>
		<p>
			Welcome to hell. We have {data.videos.length} videos.
		</p>
		<button on:click={shuffle}>Next video</button>
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
<video
	preload="auto"
	src={next}
	hidden
	aria-hidden
	style="display:none"
	taborder="-1"
/>

<style>
	video {
		background: black;
		aspect-ratio: 16 / 9;
		height: 300px;
	}
</style>
