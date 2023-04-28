<script>
	export let href = "#"
	export let src = "https://picsum.photos/27"
</script>

<!--
	@component

	Mocha's @mention component. Use the display name.

	@param {string} href - The link to the user's profile.
	@param {string} src - The link to the user's avatar.
-->
<a {href}>
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {src} aria-hidden inert loading="lazy" />
	<slot />
</a>

<style>
	a {
		display: inline-flex;
		background: var(--surface1);
		border-radius: 1ch;
		padding-inline-end: 1ch;
		align-items: center;
		gap: 1ch;
		flex-direction: row;
		/* font-family: "Hack"; */
		overflow: visible;

		vertical-align: middle;
		box-sizing: border-box;
		text-decoration: none;
	}

	img {
		aspect-ratio: 1 / 1;
		height: 3ch;
		border-radius: 1ch;
	}
</style>
