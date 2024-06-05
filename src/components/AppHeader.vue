<script>

import Links from './AppHeader/Links.vue';
import Jumbtron from './AppHeader/Jumbtron.vue';
import CaroselHeader from './AppHeader/CaroselHeader.vue';


export default {
  components: {
    Links,
    Jumbtron,
    CaroselHeader,
  },


  
}






</script>




<template>
  <header>
    <div id="home" class="number">
      <div class="row mx-0">
        <div class="col-6 text-center my-2">
          <i class="fa-solid fa-phone"></i>
          (001) 88451234 88455438
        </div>
        <div class="col-6 text-center">
          <i class="fa-brands fa-facebook-f m-2"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-pinterest-p m-2"></i>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container text-center">
        <a class="navbar-brand" href="#"><img class="logo" src="../assets/photo/cropped-Group-39-2x.png" alt=""></a>
        <Links/>

        <span class="navbar-text">
          <button class="btn rounded-5 text-white px-5 py-3 shadow-lg fs-6">
            <div class="background"></div>
            PURCHASE
          </button>
        </span>
      </div>
    </nav>
    <Jumbtron/>



  </header>










</template>





<style scoped>


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
  position: fixed;
  top: 2.3rem;
  z-index: 3;
  width: 100%;
}

.number {
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #393939;
  width: 100%;
}
</style>
