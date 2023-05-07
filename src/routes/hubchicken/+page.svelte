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
	<meta
		name="description"
		content="Hubchicken remade in Mocha"
	/>
	<meta
		name="robots"
		content="noindex"
	/>
</svelte:head>

<Hero>
	<section>
		<h1>Mochachicken</h1>
		<p>Welcome to hell. We have thousands of videos for you to watch.</p>
		<Button on:click={shuffle}>Next video</Button>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			<Switch bind:toggled={autoplay} />
			Autoplay next video
		</label>
	</section>
	<!-- svelte-ignore a11y-media-has-caption -->
	<figure>
		{#if video}
			<figcaption>
				{video.split("/").pop().split(".")[0].replaceAll("_", " ").replaceAll("-", " ")}
			</figcaption>
		{/if}
		<video
			controls
			src={video}
			on:ended={() => autoplay && shuffle()}
			loop={!autoplay}
			autoplay
		/>
	</figure>
</Hero>
<section class="vids">
	<h1>All {data.videos.length} videos</h1>
	{#each data.videos as video}
		<a
			download
			href={video}
		>
			{video.split("/").pop().split(".")[0].replaceAll("_", " ").replaceAll("-", " ")}
		</a>
	{/each}
</section>
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
	.vids {
		max-width: 800px;
		margin: 0 auto;
	}
	a {
		display: block;
		word-wrap: break-word;
	}
	figcaption {
		font-family: Futura, sans-serif;
		font-size: 1.5em;
		text-align: center;
		background: var(--surface0);
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom: 1px solid var(--surface1);
	}
	video {
		background: black;
		aspect-ratio: 16 / 9;
		height: 300px;
	}
	@font-face {
		font-family: "Futura";
		font-display: swap;
		src: url("./caption.otf");
	}
</style>
