<script>
	import { Mention } from "$lib"
	import Article from "$lib/Article.svelte"
	import Hero from "$lib/Hero.svelte"
	import Install from "$lib/Install.svelte"
	import Loading from "$lib/Loading.svelte"
	import Switch from "$lib/Switch.svelte"
	let minimap = false
	let rtl = false
	$: if (rtl) {
		document.body.dir = "rtl"
	} else if (typeof document !== "undefined") {
		document.body.dir = "ltr"
	}
</script>
<svelte:head>
	<title>Mocha Design System - Demo</title>
	<meta name="description" content="Etcetera's design system, powered by Svelte and Catppuccin. 🐱☕">
</svelte:head>

<Hero>
	<section>
		<h1>Mocha</h1>
		<p>Etcetera's design system, powered by Svelte and Catppuccin.</p>
		<Install>pnpm i @moller/mocha</Install>
	</section>
	<section>
		<span>🤯</span>
	</section>
</Hero>
<Article
	title="Mocha demo"
	canonical="http://localhost:5173/"
	description="See all the components Mocha has to offer!"
	published={new Date()}
	hero="https://picsum.photos/585/329"
	heroAlt="A random image from picsum.photos"
	{minimap}
>
	<span slot="metadata">| 5 minute read</span>
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
		<label>
			<Switch bind:toggled={rtl} />
			<span>Yusof mode</span>
		</label>
	</fieldset>
	<blockquote>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sit amet esse sint ab totam
		odit dignissimos enim odio. Amet vel voluptates inventore dolorem iusto dignissimos earum
		perspiciatis aliquid iste.
	</blockquote>
</Article>
