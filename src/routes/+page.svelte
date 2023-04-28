<script>
	import { Mention } from "$lib"
	import Article from "$lib/Article.svelte"
	import Loading from "$lib/Loading.svelte"
	import Switch from "$lib/Switch.svelte"
	let minimap = false
</script>

<Article
	title="Mocha demo"
	canonical="http://localhost:5173/"
	description="See all the components Mocha has to offer!"
	published={new Date()}
	hero="https://picsum.photos/585/329"
	heroAlt="A random image from picsum.photos"
	{minimap}
>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<p>
		Hello! I am <Mention href="https://wetdry.world/@j">j@wetdry.world</Mention> on the Fediverse.
	</p>
	<p>
		<Loading /> Trolling... When using Loading, makes sure to
		<code>{'aria-live="polite" aria-busy={loading}'}</code>.
	</p>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<fieldset>
		<legend>Article</legend>
		<label>
			<Switch bind:toggled={minimap} />
			<span>Minimap (Firefox only!)</span>
		</label>
	</fieldset>
</Article>

<style>
	label {
		user-select: none;
		display: flex;
		align-items: center;
		gap: 1ch;
		flex-direction: row;
	}
</style>
