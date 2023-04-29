<script>
	import { fly } from "svelte/transition"

	/** @type {string} */
	export let title
	/** @type {string} */
	export let canonical
	/** @type {string} */
	export let description
	/** @type {Date} */
	export let published
	/** @type {string?} */
	export let hero
	/** @type {string?} */
	export let heroAlt

	/** @type {boolean?} */
	export let minimap = false
</script>

<!--
	@component

	An article layout with an especially beautiful hero image.

	@param {string} title
	@param {string} canonical
	@param {string} description
	@param {Date} published
	@param {string?} hero
	@param {string?} heroAlt
	@param {boolean?} minimap - Enable minimap (for Firefox users only, see https://www.stefanjudis.com/a-firefox-only-minimap/)
-->
<article
	class="h-entry"
	id="main"
>
	{#if hero}
		<img
			src={hero}
			alt={heroAlt}
			class="u-featured"
			loading="lazy"
		/>
	{/if}
	<hgroup>
		<h1 class="p-name">{title}</h1>
		<a
			class="u-url"
			href={canonical}
		>
			<time
				datetime={published.toISOString()}
				class="dt-published"
			>
				{published.toLocaleDateString("en-us", {
					year: "numeric",
					month: "short",
					day: "numeric",
				})}
			</time>
		</a>
		<slot name="metadata" />
		{#if description}
			<p class="p-summary">{description}</p>
		{/if}
	</hgroup>
	<div class="e-content">
		<slot />
	</div>
</article>

{#if minimap}
	<div
		aria-hidden
		class="minimap"
		transition:fly|local={{ y: -10 }}
		style="background: -moz-element(#main) no-repeat scroll top center / contain;"
	/>
{/if}

<style>
	.p-name {
		font-size: 2em;
	}
	hgroup a {
		display: contents;
		color: var(--subtext0);
	}
	/* Top of the page, then fades out */
	.u-featured {
		-webkit-mask-image: linear-gradient(to top, transparent 0%, black 40%);
		mask-image: linear-gradient(to top, transparent 0%, black 40%);
		border-radius: 1em;
		width: 100%;
		aspect-ratio: 16 / 9;
	}
	hgroup {
		text-align: center;
	}
	.p-summary {
		font-style: italic;
	}
	article {
		max-width: 65ch;
		margin: 0 auto;
	}
	.minimap {
		position: fixed;
		inset-block-start: 20px;
		inset-inline-end: 20px;
		height: 100vh;
		width: 200px;
	}
</style>
