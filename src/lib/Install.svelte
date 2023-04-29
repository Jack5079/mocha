<!--
	@component

	Use for short install commands, like for a hero. Inline and includes a copy button.
-->
<code>
	<slot />
	<button aria-label="Copy to clipboard">
		<!-- https://invent.kde.org/pinheiro/oxygen2/-/blob/master/Icons/scalable/actions/small/16x16/edit-copy.svg -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
		>
			<path
				d="M3 0C1.9013572 0 1 .9013572 1 2v10c0 .773573.4475374 1.447654 1.0957031 1.779297C2.3084777 13.888166 2.5 13.739467 2.5 13.5V13c0-.07335-.0531014-.162513-.1113281-.207031C2.1512721 12.61146 2 12.326491 2 12V2c0-.5582047.4417953-1 1-1h8c.326493 0 .61146.1512699.792969.3886719C11.837485 1.4468967 11.92665 1.5 12 1.5h.263672c.369499 0 .601046-.3017834.396484-.60742188C12.300852.35573692 11.68996 0 11 0H3zm2 2c-1.0986439 0-2 .9013561-2 2v10c0 1.098644.9013561 2 2 2h4.5c2.77749 0 5.08053-2.073203 5.447266-4.751953C14.966006 11.111161 14.86268 11 14.724609 11h-.001953c-.414213 0-.779773.336317-.892578.734375C13.295137 13.622046 11.562519 15 9.5 15H5c-.5582053 0-1-.441795-1-1V4c0-.5582053.4417947-1 1-1h8c.558205 0 1 .4417947 1 1v4a1 1 0 0 1-1 1h-2c-1.0986439 0-2 .9013556-2 2v2.75a.25.25 0 0 0 .25.25.75.75 0 0 0 .75-.75V11c0-.558205.441795-1 1-1h2a2 2 0 0 0 2-2V4c0-1.0986439-.901356-2-2-2H5z"
				fill="currentColor"
			/>
		</svg>
	</button>
</code>

<style>
	code {
		background-color: var(--surface0);
		display: inline-flex;
		padding: 1ch;
		border-radius: 1ch;
		align-items: center;
		gap: 1ch;
		flex-direction: row;
	}
	code button {
		cursor: pointer;
		background: none;
		border: none;
		color: inherit;
		aspect-ratio: 1 / 1;
		vertical-align: middle;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		transition: background-color 0.1s;
	}
	code button:hover {
		background-color: var(--surface1);
	}
	code button:active {
		background-color: var(--surface2);
	}
</style>
