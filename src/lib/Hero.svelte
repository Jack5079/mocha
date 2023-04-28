<header>
	<slot />
</header>

<style>
	header {
		width: 100vw;
		min-height: 40vh;
		border-bottom: solid 1px var(--surface0);
		margin-bottom: 5ch;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10ch;
		flex-direction: row;
		flex-wrap: 1;
		padding-inline: 20%;
		box-sizing: border-box;
	}
	header :global(section) {
		inline-size: 50%;
	}
	@media (max-width: 800px) {
		header {
			padding-inline: 10%;
			flex-direction: column;
		}
		header :global(section) {
			inline-size: 100%;
		}

	}
</style>
