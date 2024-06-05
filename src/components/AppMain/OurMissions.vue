<script>
export default {
	name: "OurMissions",
	components: {},
};
</script>

<template>
	<div class="ourMissBox row mx-0 justify-content-center">
		<div class="ourMissBoxLeft col-5 position-relative">
			<img
				src="../../assets/photo/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
				class="w-100 rounded-4 position-relative z-2 shadow-lg" />

			<div class="bgImg w-100 position-absolute z-1 ms-3 rounded-5 px-1">
				<img
					src="../../assets/photo/busy-architect-PYVKWM4-1024x872.jpg"
					class="w-100 rounded-5 position-relative z-0 opacity-25" />
			</div>
		</div>

		<div class="ourMissBoxRight col-4">
			<div class="col-8 mb-3">
				<p class="fw-bold py-4 display-4">learn more about our <span>missions</span></p>

				<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

				<hr class="separator d-inline-block rounded bg-success opacity-100" />
			</div>

			<p>
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
				there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
				the Semantics, a large language ocean.Separated they live in Bookmarksgrove.
			</p>

			<div>
				<button class="btn rounded-5 text-white px-5 py-3 shadow-lg mt-4 fs-6">
					<div class="background"></div>
					READ MORE
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
p span {
	color: #00d9a6;
}

hr {
	width: 0.8rem;
	padding: 0.2rem 0;
	border: 0;
}

.separator {
	width: 3rem;
	padding: 0.2rem 0;
	border: 0;
}

hr,
.separator,
button,
.bgImg {
	background: linear-gradient(
		271deg,
		rgba(122, 222, 108, 1) 0%,
		rgba(88, 221, 125, 1) 60%,
		rgba(0, 217, 166, 1) 100%
	);
}

button {
	font-size: 0.6rem;
	display: inline-block;
	position: relative;
	background-color: #d5c264;
	transition: color 0.5s;
	z-index: 1;
	overflow: hidden;
}

.background {
	width: 0;
	height: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-image: linear-gradient(#000000, #000000);
	transition: 0.5s;
	z-index: -1;
	border-radius: 50%;
}

button:hover .background {
	width: 150%;
	height: 400%;
}

.ourMissBoxRight {
	padding-left: 10rem;
}

.bgImg {
	top: -6rem;
	left: -15rem;
}
</style>
