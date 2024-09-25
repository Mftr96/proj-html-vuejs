<script>

import Links from './AppHeader/Links.vue';
import Jumbotron from './AppHeader/Jumbotron.vue';


export default {
  components: {
    Links,
    Jumbotron,

  },


}






</script>




<template>
  <header>
    <div id="home" class="number">
      <div class="row justify-content-around p-2  mx-0 text-light">
        <div class="col-2  ms-2  ">
          <span class="me-2">(001) 88451234</span>
          <span>88455438</span>
        </div>
        <div class="col-7"></div>
        <div class="col-2 d-flex align-items-center justify-content-end me-2 p-0   ">
          <i class="fa-brands fa-facebook-f "></i>
          <i class="fa-brands fa-x-twitter ms-3 me-3"></i>
          <i class="fa-brands fa-pinterest-p  "></i>
        </div>
      </div>
    </div>


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand me-auto" href="#">
          <img class="logo" src="../assets/photo/images/cropped-Group-39-2x.png" alt="Logo">
        </a>

        <!-- Pulsante Toggle -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Links />
        <span class="navbar-text">
          <button class="btn rounded-5 text-white px-5 py-3 shadow-lg fs-7">
            <div class="background"></div>
            ACQUISTA
          </button>
          <button class="btn btn-primary m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">
            <i class="fas fa-search"></i>
          </button>
        </span>
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

button {
  background: linear-gradient(271deg,
      rgba(122, 222, 108, 1) 0%,
      rgba(88, 221, 125, 1) 60%,
      rgba(0, 217, 166, 1) 100%);
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
  top:5%;
  z-index: 4;
  position: fixed;
  width: 100%;
}

.number {
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #393939;
  width: 100%;
}
</style>
