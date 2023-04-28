<script>
	export let toggled = false
	export let disabled = false
</script>

<!--
	@component

	Use Switches when it will instantly apply. Otherwise use a Checkbox.

	@param {toggled} boolean
	@param {disabled} boolean
-->

<button aria-pressed={toggled} on:click={() => (toggled = !toggled)} {disabled}>
	<slot />
</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		position: relative;
		margin: 0;
		border: 1px solid var(--surface1);
		border-radius: 20px;
		background-color: var(--surface0);
		appearance: none;
		inline-size: 40px;
		block-size: 20px;
		transition: background-color 0.1s;
	}
	button::before {
		content: "";
		position: absolute;
		border-radius: 7px;
		background-color: var(--rosewater);
		inset-inline-start: 3px;
		inline-size: 12px;
		block-size: 12px;
		transition: translate 0.1s, background-color 0.1s;
	}
	button:hover {
		background-color: var(--surface1);
	}
	button:active {
		background-color: var(--surface2);
	}
	button[aria-pressed="true"] {
		background: var(--rosewater);
		border: none;
	}
	button[aria-pressed="true"]::before {
		translate: 20px;
		background-color: var(--surface0);
	}
	@media (prefers-color-scheme: light) {
		button:not([aria-pressed="true"]):before {
			background-color: var(--blue);
		}
		button[aria-pressed="true"] {
			background-color: var(--blue);
		}
	}
</style>
