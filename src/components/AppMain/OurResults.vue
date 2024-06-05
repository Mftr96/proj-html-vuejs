<!-- qui JS  -->
<script>
import store from "../../data/store.js";
export default {
	data() {
		store;
	},
	methods: {},
	mounted() {},
};
</script>

<template>
	<section class="ourResultsBox my-5 position-relative">
		<div class="row mx-0 justify-content-center">
			<span class="myBg col-5 p-0 rounded-4 position-relative">
				<div
					class="ourResultsBoxLeft row justify-content-center text-center fs-3 h-100 text-white fw-bold mx-0 rounded-4 shadow-lg">
					<h2 class="bigNumber">280</h2>

					<h4 class="my-5">PROJECTS</h4>

					<div class="row justify-content-center px-0">
						<div class="col-4 px-0">
							<span class="display-5">+3,500</span>
							<h4 class="mt-3">USERS' COMMENTS</h4>
						</div>

						<div class="col-1 h-100 px-0">
							<span class="verticalLine vr opacity-100 mt-3"></span>
						</div>

						<div class="col-4 px-0">
							<span class="display-5">100%</span>
							<h4 class="mt-3">HAPPY CLIENTS</h4>
						</div>
					</div>
				</div>
			</span>

			<div class="ourResultsBoxRight col-5 rounded-4 px-0 shadow-lg position-relative bg-white">
				<div class="row mx-0 h-100 align-content-center justify-content-center">
					<div class="col-9 px-0">
						<p class="fw-bold pt-4 display-4">We <span>Love</span> What We Do</p>

						<hr class="d-inline-block me-2 rounded opacity-100" />

						<hr class="separator d-inline-block rounded opacity-100" />

						<p class="mt-3">
							Far far away, behind the word mountains, far from the countries Vokalia and
							Conscnantia, there live the blind texts. Separated they live in Bookmarksgrove
							right at the coast of the Semantics, a large language ocean.Separated they live
							in Bookmarksgrove. Far far away, behind the word mountains. large language
							ocean. far from the countries Vokalia and Consonantia
						</p>

						<ul class="list-unstyled mt-5 lh-lg">
							<li>
								<i class="fa-solid fa-check me-2"></i>far far away, behind the word
								mountains
							</li>
							<li><i class="fa-solid fa-check me-2"></i>large language ocean</li>
							<li>
								<i class="fa-solid fa-check me-2"></i>far from the countries Vakalia and
								Consanantia
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.ourResultsBoxLeft {
	background: linear-gradient(
		271deg,
		rgba(122, 222, 108, 0.85) 0%,
		rgba(88, 221, 125, 0.85) 60%,
		rgba(0, 217, 166, 0.85) 100%
	);
	padding: 10rem 0;
}

.ourResultsBoxRight {
	left: -3rem;
	z-index: 1;
	top: 5rem;
}

.myBg {
	background-image: url(../../assets/photo/person-with-long-curly-hair-PZ99QM2-2x.jpg);
	background-size: cover;
	background-position-x: right;
	right: -4rem;
	z-index: 0;
}

.verticalLine {
	width: 0.1rem;
	height: 4rem;
}

li {
	list-style: none;
}

.bigNumber {
	font-size: 8rem;
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
button {
	background: linear-gradient(
		271deg,
		rgba(122, 222, 108, 1) 0%,
		rgba(88, 221, 125, 1) 60%,
		rgba(0, 217, 166, 1) 100%
	);
}

p span,
i {
	color: #00d9a6;
}
</style>
