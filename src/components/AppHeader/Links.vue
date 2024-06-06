<script>
export default {
	name: "Links",
	data() {
		return {
			links: [
				{ url: "#home", info: "HOME" },
				{ url: "#ourMissions", info: "ABOUT" },
				{ url: "#ourWorks", info: "SERVICES" },
				{ url: "#ourResults", info: "SHOWCASE" },
				{ url: "#latestNews", info: "BLOG" },
				{ url: "#contactInfo", info: "CONTACT" },
			],
		};
	},
};
</script>

<template>
	<div class="col-6 my-auto">
		<ul class="nav justify-content-center">
			<li class="nav-item mx-3" v-for="link in links">
				<a
					class="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0"
					:href="link.url"
					>{{ link.info }}</a
				>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.nav-item {
	list-style: none;
}
</style>
