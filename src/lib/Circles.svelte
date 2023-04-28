<div class="circles" aria-hidden>
	<slot />
	<div class="circle1" />
	<div class="circle2" />
	<div class="circle3" />
</div>

<style>
	.circles {
		position: absolute;
		top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
		aspect-ratio: 1 / 1;
		overflow: visible;
	}
	@keyframes circle1Path {
		0% {
			top: 50%;
			left: 50%;
			width: 5%;
			height: 5%;
			opacity: 0.5;
		}

		50% {
			top: 0;
			left: 45%;
			width: 60%;
			height: 60%;
			opacity: 1;
		}

		100% {
			top: 50%;
			left: 50%;
			width: 5%;
			height: 5%;
			opacity: 0.5;
		}
	}

	@keyframes circle2Path {
		0% {
			top: 40%;
			left: 45%;
			width: 15%;
			height: 15%;
		}

		50% {
			top: 37%;
			left: -10%;
			width: 80%;
			height: 80%;
		}

		100% {
			top: 40%;
			left: 45%;
			width: 15%;
			height: 15%;
		}
	}

	@keyframes circle3Path {
		0% {
			top: 30%;
			left: 30%;
			width: 25%;
			height: 25%;
		}

		50% {
			top: -50%;
			left: -20%;
			width: 120%;
			height: 120%;
		}

		100% {
			top: 30%;
			left: 30%;
			width: 25%;
			height: 25%;
		}
	}
  
	.circle1 {
		position: absolute;
		animation: circle1Path 15s infinite;
		border-radius: 100%;
	}

	.circle2 {
		position: absolute;
		animation: circle2Path 20s infinite;
		border-radius: 100%;
	}

	.circle3 {
		position: absolute;
		animation: circle3Path 30s infinite;
		border-radius: 100%;
	}
	.circles div {
		background: radial-gradient(50% 50% at 50% 50%, var(--text) 0%, transparent 100%);
	}
</style>
