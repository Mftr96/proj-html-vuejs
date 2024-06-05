<script>
export default {
	name: "OurSolutions",
	components: {},
};
</script>

<template>
	<div class="ourSolBox row mx-0">
		<div class="ourSolBoxLeft col-4 ps-0 mt-5">
			<p class="fw-bold py-4 display-4">
				We Are Here To Make Your <span>Website</span> Look More <span>Elegant</span> And
				Stylish!
			</p>

			<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

			<hr class="separator d-inline-block rounded bg-success opacity-100" />

			<div>
				<button class="btn rounded-5 text-white px-5 py-3 shadow-lg mt-4 fs-6">
					<div class="background"></div>
					VIEW ALL
				</button>
			</div>
		</div>

		<div class="ourSolBoxRight col-8">
			<div class="row gap-5 justify-content-end">
				<div
					class="my-card col-5 p-5 border border-1 border-secondary-emphasis rounded-4 shadow">
					<i class="fa-solid fa-gauge-simple-high display-4"></i>
					<h2 class="my-4">Speed Optimization</h2>
					<p>
						Far far away, behind the word mountains, far from the countries Vokalia
						Separated...
					</p>
				</div>

				<div
					class="my-card col-5 p-5 border border-1 border-secondary-emphasis rounded-4 shadow">
					<i class="fa-solid fa-cloud display-4"></i>
					<h2 class="my-4">Cloud Solutions</h2>
					<p>
						Far far away, behind the word mountains, far from the countries Vokalia
						Separated...
					</p>
				</div>

				<div
					class="my-card col-5 p-5 border border-1 border-secondary-emphasis rounded-4 shadow">
					<i class="fa-solid fa-tablet-screen-button display-4"></i>
					<h2 class="my-4">Website Design</h2>
					<p>
						Far far away, behind the word mountains, far from the countries Vokalia
						Separated...
					</p>
				</div>

				<div
					class="my-card col-5 p-5 border border-1 border-secondary-emphasis rounded-4 shadow">
					<i class="fa-solid fa-stopwatch display-4"></i>
					<h2 class="my-4">Online Marketing</h2>
					<p>
						Far far away, behind the word mountains, far from the countries Vokalia
						Separated...
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.ourSolBox {
	margin-bottom: 10rem;
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

hr,
.separator,
button {
	background: linear-gradient(
		271deg,
		rgba(122, 222, 108, 1) 0%,
		rgba(88, 221, 125, 1) 60%,
		rgba(0, 217, 166, 1) 100%
	);
}

.my-card {
	background: linear-gradient(white, white);
	transition: all 2s;
}

.my-card:hover {
	background: linear-gradient(
		90deg,
		rgba(0, 217, 166, 1) 0%,
		rgba(88, 221, 125, 1) 60%,
		rgba(122, 222, 108, 1) 100%
	);
	cursor: pointer;
}

.my-card:hover i,
.my-card:hover h2,
.my-card:hover p {
	color: white;
}

p span,
i {
	color: #00d9a6;
}
</style>
