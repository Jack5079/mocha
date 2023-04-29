<script>
	export let href
	export let suggested = false
</script>

<!--
	@component
	
	Mocha's button and link.

	@param {string?} href - turn it into a link and have it go here
	@param {boolean?} suggested - should it be rosewater?
-->
{#if href}
	<a
		{href}
		{...$$props}
		class="button"
		class:suggested
	>
		<slot />
	</a>
{:else}
	<button
		{...$$props}
		class="button"
		class:suggested
		on:click
		on:dblclick
	>
		<slot />
	</button>
{/if}

<style>
	.button {
		background-color: var(--surface0);
		border-color: var(--surface1);
		border-radius: 1ch;
		border-style: solid;
		display: inline-block;
		border-width: 1px;
		color: var(--text);
		cursor: pointer;
		font-weight: bold;
		width: max-content;
		text-decoration: none;
		padding-inline: 1ch;
		padding-block: 0.5ch;
		box-sizing: border-box;
		transition: background-color 0.1s ease, transform 0.2s ease;
	}
	.button:hover {
		background-color: var(--surface1);
	}
	.button:active {
		background-color: var(--surface2);
		transform: translateY(2px);
	}
	.suggested {
		background-color: var(--rosewater);
		color: var(--base);
	}
	.suggested:hover {
		background-color: var(--rosewater);
		color: var(--base);
	}
</style>
