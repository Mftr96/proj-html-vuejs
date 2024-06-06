<script>
export default {
	name: "Jumbotron",
	data() {
		return {
			slides: [
				{
					image: "Group-36-2x.png",
					title: "We Are a Web Design",
					greenTitle: "Agency",
				},
				{
					image: "Group-40-2x.png",
					title: "A Group of Expert",
					greenTitle: "Planners",
				},
				{
					image: "Group-35-2x.png",
					title: "Focus on Your",
					greenTitle: "Business",
				},
			],
			activeSlide: 0,
		};
	},
	methods: {
		checkActive(index) {
			return index == this.activeSlide ? `active` : ``;
		},
		prev() {
			this.activeSlide--;
			this.activeSlide < 0 ? (this.activeSlide = 2) : ``;
		},
		next() {
			this.activeSlide++;
			this.activeSlide > this.slides.length - 1 ? (this.activeSlide = 0) : ``;
		},
		getImg(path) {
			let risultato = new URL(`../../assets/photo/images/` + path, import.meta.url);
			return risultato.href;
		},
	},
};
</script>

<template>
	<div v-for="(slide, i) in slides" :class="checkActive(i)" class="jumboBox mb-3 slide">
		<div class="row align-items-center mx-0 overflow-hidden">
			<div class="col-5 position-relative">
				<p class="green text-start">17 years of experiance</p>

				<div class="col-9">
					<p class="fw-bold py-4 display-3">
						{{ slide.title }}
						<span>{{ slide.greenTitle }}</span>
					</p>
				</div>

				<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

				<hr class="separator d-inline-block rounded bg-success opacity-100" />

				<p class="mt-3">
					Far far away, behind the word mountains, far from the countries Vokalia and
					Consonantia,there live the blind texts. Separated they live in Bookmarksgrove right
					at the coast of theSemantics, a large language ocean.Separated they live in
					Bookmarksgrove.
				</p>
				<p class="black-card text-start my-5">
					<button class="bigBtn btn rounded-5 text-white px-5 py-3 shadow-lg mt-4 fs-6">
						READ MORE
					</button>
				</p>

				<span>
					<a class="link-underline link-underline-opacity-0" href="#">Facebook</a>
					<a class="link-offset-2 link-underline link-underline-opacity-0" href="#"
						>Instagram</a
					>
					<a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Twitter</a>
					<a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Youtube</a>
				<button @click="prev()"><i class="fa-solid fa-arrow-left"></i></button>
				<button @click="next()"><i class="fa-solid fa-arrow-right"></i></button>
				</span>

			</div>

			<div class="col-7 px-0">
				<img :src="getImg(slide.image)" class="w-100" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.green {
	font-size: 20px;
	color: #00d9a6;
	font-family: quicksand;
	font-weight: 500;
	line-height: 120%;
	letter-spacing: 7px;
	background-color: transparent;
}

h1 {
	font-size: 72px;
	color: #202020;
	font-family: cursive;
	font-weight: 700;
	line-height: 120%;
	letter-spacing: -4px;
	background-color: transparent;
}

p span {
	color: #00d9a6;
}

.bigBtn {
	font-size: 0.6rem;
	display: inline-block;
	position: relative;
	background-color: black;
	transition: color 0.5s;
	z-index: 1;
	overflow: hidden;
}

.bigBtn:hover {
	background-color: #00d9a6;
}

a {
	color: black;
	margin-right: 2rem;
}

a:hover {
	color: #00d9a6;
}

.jumboBox {
	margin: 8rem 0 8rem 15rem;
	
}

hr,
.separator {
	background: linear-gradient(
		271deg,
		rgba(122, 222, 108, 1) 0%,
		rgba(88, 221, 125, 1) 60%,
		rgba(0, 217, 166, 1) 100%
	);
}

.carouselBtn {
	right: -4.5rem;
	bottom: -4.5rem;
	position:absolute;
	z-index: 10;
}

.carouselBtn button {
	background-color: #dbdbdb;
	width: 3rem;
	height: 3rem;
}

.carouselBtn button:hover {
	background-color: #00d9a6;
}

img {
	scale: 1.2;
}
.slide {
    display: none;
}

.slide.active {
    display: block;
}
/* .carouselBtn {
    right: -4.5rem;
    bottom: -4.5rem;
} */

/* .carouselBtn button {
    background-color: #dbdbdb;
    width: 3rem;
    height: 3rem;
} */

.carouselBtn button:hover {
    background-color: #00d9a6;
}

img {
    scale: 1.2;
}

.jumboBox {
    margin: 8rem 0 8rem 15rem;
}
</style>
