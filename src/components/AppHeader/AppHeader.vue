<script>
import Links from "./AppHeader/Links.vue";
import Jumbotron from "./AppHeader/Jumbotron.vue";

export default {
	name: "AppHeader",
	components: {
		Links,
		Jumbotron,
	},
};
</script>

<template>
	<header id="home">
		<div class="number text-white position-fixed top-0 w-100">
			<div class="headerBox row">
				<div class="col-6 py-2">
					<a href="">
						<i class="fa-solid fa-phone text-white"></i>
					</a>

					(001) 88451234 88455438
				</div>

				<div class="col-6 text-end my-auto">
					<a href="#">
						<i class="fa-brands fa-facebook-f text-white"></i>
					</a>
					<a href="#" class="mx-4">
						<i class="fa-brands fa-twitter text-white"></i>
					</a>
					<a href="#">
						<i class="fa-brands fa-pinterest-p text-white"></i>
					</a>
				</div>
			</div>
		</div>

		<nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg py-4">
			<div class="headerBox row justify-content-between w-100">
				<div class="col-3 px-0">
					<a class="navbar-brand" href="#"
						><img class="logo" src="../assets/photo/images/cropped-Group-39-2x.png"
					/></a>
				</div>

				<Links />

				<div class="col-3 text-end px-0">
					<span class="navbar-text">
						<button class="btn rounded-5 text-white px-5 py-3 shadow-lg fs-6">
							<div class="background"></div>
							PURCHASE
						</button>
					</span>
				</div>
			</div>
		</nav>
		<div class="offcanvas offcanvas-fullscreen" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Start</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Chiudi"></button>
      </div>
      <div class="offcanvas-body">
        <form class="search-form">
          <div class="input-group">
            <input type="text" class="form-control border-bottom border-3" placeholder="Cerca..." aria-label="Search"
              aria-describedby="button-search">
            <button class="btn btn-primary" type="button" id="button-search">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>


		<Jumbotron />
	</header>
</template>

<style scoped>

.offcanvas-fullscreen {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}

.offcanvas-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}


.input-group>.form-control {
  position: relative;
  width: 80rem;
  min-width: 0;
  border: none;
  font-size: xx-large;
}

.search-container {
  position: relative;
}



.search-box {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  width: 200px;
  padding: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: left 0.3s ease;
  display: none;
}

.search-box.open {
  display: block;
  left: 50%;
}
.headerBox {
	margin: 0 10rem;
}

.search-container {
	position: relative;
}

.search-box {
	position: absolute;
	top: 50%;
	left: 100%;
	transform: translateY(-50%);
	width: 200px;
	padding: 5px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	background-color: white;
	transition: left 0.3s ease;
	display: none;
}

.search-box.open {
	display: block;
	left: 50%;
}

button {
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

.navbar {
	position: fixed;
	top: 2.5rem;
	z-index: 10;
	width: 100%;
}

.number {
	z-index: 10;
	background-color: #3c3c3c;
}
</style>
