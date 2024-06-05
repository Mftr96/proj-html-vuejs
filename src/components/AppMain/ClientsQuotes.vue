<script>
export default {
	name: "ClientsQuotes",
	components: {},
};
</script>

<template>
	<div class="myBg mt-5">
		<div class="clientsQuotesBox row mx-0 justify-content-center">
			<div class="col-7 text-center py-5 px-4">
				<i class="fa-solid fa-quote-left display-2"></i>

				<p class="fs-3 fst-italic mt-5 text-white">
					When it comes to barbequing, there are two main schools of thought for the techniques
					that you can use. Freshly scrambled eggs with applewood smoked bacon - are amazing!
				</p>

				<div class="circledBox rounded-circle border border-4 border-white mb-4 mx-auto">
					<img
						src="../../assets/photo/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
						class="w-100 h-100 rounded-circle object-fit-cover" />
				</div>
				<div class="mb-1">
					<h4>LISSA DURBIN</h4>
					<span class="text-white">Client</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.clientsQuotesBox {
	background-color: rgba(28, 28, 28, 0.803);
	padding: 5rem 0;
}

.myBg {
	background-image: url(../../assets/photo/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg);
	background-position: center;
}

i,
h4 {
	color: #00d9a6;
}

p {
	line-height: 2.5rem;
}

.circledBox {
	width: 7rem;
	height: 7rem;
}

p {
	margin-bottom: 5rem;
}
</style>
