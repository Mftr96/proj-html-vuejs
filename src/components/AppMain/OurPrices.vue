<script>
export default {
	name: "OurPrices",
	components: {},
	data() {
		return {
			advantagesList: [
				"Creative Design Enabled",
				"Vibrant Color Usage",
				"Eye Catching Design",
				"Extreme Typography",
				"Exceptional Design",
			],
		};
	},
};
</script>

<template>
	<div class="ourPricesBox row mx-0 justify-content-between mt-5">
		<div class="ourPricesBoxLeft col-4 pe-4">
			<div class="col-10 mt-5">
				<p class="fw-bold py-4 display-4">With <span>Live Chat 24/7</span> Support</p>
			</div>

			<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

			<hr class="separator d-inline-block rounded bg-success opacity-100" />

			<p class="mt-3">
				Far far away, behind the word mountains, far from the countriesVokalia and Consonantia,
				there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
				the Semantics.
			</p>
		</div>

		<div class="ourPricesBoxRight col-8">
			<div class="row justify-content-center gap-5 text-center">
				<div class="priceCard col px-0 shadow-lg rounded-4">
					<div class="py-2 bg-black rounded-top-4"></div>

					<div class="priceCardTop py-4">
						<h3 class="fw-bold">DESIGNING</h3>
						<span>All Designs</span>
					</div>

					<div class="priceCardCenter py-4 fs-4 text-white bg-black">
						<span class="display-4">$ 10</span> / Design
					</div>

					<div class="priceCardBottom py-4">
						<ul class="list-unstyled pt-4">
							<li v-for="advantage in advantagesList" class="text-decoration-none">
								<i class="fa-solid fa-check"></i> {{ advantage }}
							</li>
						</ul>
					</div>
				</div>

				<div class="priceCard col px-0 shadow-lg rounded-4">
					<div class="py-2 my-bg-gradient rounded-top-4"></div>
					<div class="priceCardTop py-4">
						<h3 class="fw-bold">DEVELOPEMENT</h3>
						<span>WordPress Projects</span>
					</div>

					<div class="priceCardCenter py-4 fs-4 text-white my-bg-gradient">
						<span class="display-4">$ 15</span> / Design
					</div>

					<div class="priceCardBottom py-4">
						<ul class="list-unstyled pt-4">
							<li v-for="advantage in advantagesList" class="text-decoration-none">
								<i class="fa-solid fa-check"></i> {{ advantage }}
							</li>
						</ul>
					</div>
				</div>

				<div class="priceCard col px-0 shadow-lg rounded-4">
					<div class="py-2 bg-black rounded-top-4"></div>
					<div class="priceCardTop py-4">
						<h3 class="fw-bold">SEO</h3>
						<span>Web Products</span>
					</div>

					<div class="priceCardCenter py-4 fs-4 text-white bg-black">
						<span class="display-4">$ 10</span> / Design
					</div>

					<div class="priceCardBottom py-4">
						<ul class="list-unstyled pt-4">
							<li v-for="advantage in advantagesList" class="text-decoration-none">
								<i class="fa-solid fa-check"></i> {{ advantage }}
							</li>
						</ul>
					</div>
				</div>
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
.my-bg-gradient {
	background: linear-gradient(
		271deg,
		rgba(122, 222, 108, 1) 0%,
		rgba(88, 221, 125, 1) 60%,
		rgba(0, 217, 166, 1) 100%
	);
}

li {
	line-height: 2.5rem;
}
</style>
