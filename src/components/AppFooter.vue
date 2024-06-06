<script>
export default {
	name: "AppFooter",
	data() {
		return {
			links: ["Careers", "News", "Terms of Use", "Privacy Projects", "About", "Contact"],
		};
	},
	methods: {},
	mounted() {},
};
</script>
<template>
	<footer>
		<section id="contactInfo" class="footerTop">
			<div class="row justify-content-between">
				<div class="col-3">
					<img
						class="mb-2"
						src="../assets/photo//images/cropped-Group-39-2x.png"
						alt="cropped-Group-39-2x.png" />

					<p class="mt-3">
						While the lovely valley teems with vapour around me, and the meridian sun strikes
						the upper surface of the impenetrable foliage of my trees-While the lovely valley
						teems with vapour around me.
					</p>
				</div>

				<div class="col-2">
					<h4>QUICK LINKS</h4>

					<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

					<hr class="separator d-inline-block rounded bg-success opacity-100" />

					<ul class="text-black list-unstyled">
						<li v-for="link in links">
							<a class="text-black text-decoration-none lh-lg">{{ link }}</a>
						</li>
					</ul>
				</div>

				<div class="col-3">
					<h4>CONTACT</h4>

					<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

					<hr class="separator d-inline-block rounded bg-success opacity-100" />

					<p>Patricia C. Amedee 4401 Waldeck Street Crapevine Nashville, TX 76051</p>
					<p class="my-4">info@yourdomain.com</p>
					<p>+99 (0) 101 0000 888</p>
				</div>

				<div class="col-3">
					<h4>LOCATION ON MAP</h4>

					<hr class="d-inline-block me-2 rounded bg-success opacity-100" />

					<hr class="separator d-inline-block rounded bg-success opacity-100" />

					<img class="w-100" src="../assets/photo/images/map.png" />
				</div>
			</div>
		</section>

		<section class="footerBottom">
			<div class="row justify-content-between">
				<div class="col-3 my-auto">
					<p class="text-white-50 mb-0">
						<i class="fa-regular fa-copyright"></i> 2024 PHLOX BUSINESS THEME.
					</p>
				</div>

				<div class="col-3 d-flex gap-4 justify-content-end text-white-50 my-auto">
					<i class="fa-brands fa-facebook-f"></i>
					<i class="fa-brands fa-twitter"></i>
					<i class="fa-brands fa-pinterest-p"></i>
				</div>
			</div>
		</section>
	</footer>
</template>

<style scoped>
li {
	list-style: none;
}
a:hover {
	color: rgb(0, 216, 165) !important;
}

.footerBottom {
	background: linear-gradient(
		rgba(12, 12, 12, 1) 0%,
		rgba(71, 71, 71, 1) 50%,
		rgba(71, 71, 71, 1) 100%
	);
	color: white;
	padding: 2.5rem 10rem;
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

.footerTop {
	margin: 8rem 10rem;
}
</style>
