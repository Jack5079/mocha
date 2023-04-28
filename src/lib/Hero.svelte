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
		overflow: hidden;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding-inline: 20px;
	}

	header :global(section) {
		position: relative;
	}
</style>
