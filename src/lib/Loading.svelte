<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 173.8 275.72"
	height="20"
	fill="currentColor"
>
	<circle
		cx="37.13"
		cy="26.43"
		r="21.6"
	/>
	<circle
		cx="127.16"
		cy="46.64"
		r="46.65"
	/>
	<circle
		cx="34.62"
		cy="117.87"
		r="34.62"
		class="middle"
	/>
	<circle
		cx="119.78"
		cy="130.68"
		r="21.6"
		class="middle"
	/>
	<circle
		cx="102.68"
		cy="219.58"
		r="56.14"
		class="bottom"
	/>
</svg>

<style>
	@keyframes blink {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	circle {
		animation: blink 0.5s infinite alternate;
	}
	.middle {
		animation-delay: 0.2s;
	}
	.bottom {
		animation-delay: 0.4s;
	}
</style>
