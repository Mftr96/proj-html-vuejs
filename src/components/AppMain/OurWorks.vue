<!-- qui JS  -->
<script>
//importazione dati dallo store
import store from '../../data/store.js'
export default {
    data (){
        store
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<!-- QUI HTML -->
<template>
    <section>
        <div class="row justify-content-between mx-2 debug-row" >
            <div class="col-6 p-5 m-0 debug">
                <hr class="d-inline-block me-2 rounded bg-success opacity-100" />
                <hr class="separator d-inline-block rounded bg-success opacity-100" />
                <h3 class="p-3  display-5 "> Our recent  <strong>web designs</strong> & <br>some examples of <br> past <strong>projects</strong></h3>
                <hr class="d-inline-block me-2 rounded bg-success opacity-100" />
                <hr class="separator d-inline-block rounded bg-success opacity-100" />
            </div>
            <div class="col-6 p-5 d-flex flex-column-reverse p-0 m-0 debug ">
                <p class="px-0 ">Far Far away, behind the word mountains, Far From the countries Vokalie end Consonentia, there live the
                blind texts. Seperated they live in Bookmarksgrove righi the coesi: OF the Semantics, è large languege
                ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountèins, far From the
                countries Vokalia and Consonentia, there live the blind texts. Separated they live in Bookmarksgrave.</p>
            </div>
        </div>
    </section>
    <section>
        <div class="row">
            <div class="card border-0 gx-1  col-3">
                <div class=" w-100"></div>
                <img src="../../assets\photo\images\ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
                <div class="z-1 m-2  ">
                    <h2>The Basket of Flowers</h2>
                    <span class="text-dark ">BRANDING</span>
                    <i class="fa-solid fa-circle"></i>
                    <span class="text-dark ">MARKETING</span>
                </div>
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets\photo\images\sunisa-misa-531163-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets\photo\images\355H-1024x1024.jpg" alt="">
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets\photo\images\photo-1448932252197-d19750584e56-1024x1024.jpg" alt="">
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets\photo\images\business-competition-PB366D8-1024x1024.jpg" alt="">
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets/photo/images/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg" alt="">
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets\photo\images\aa9a4539-PQGJ7HU-1024x1024.jpg" alt="">
            </div>
            <div class="card border-0 gx-1 col-3">
                <img src="../../assets\photo\images\cody-davis-253928-unsplash-1024x1024.jpg" alt="">
            </div>
        </div>
    </section>
    <section>
        <div class="row p-5 m-5" >
                <div class="col-12 m-3 text-center">
                    <button class="btn rounded-5 text-white px-5 py-3 shadow-lg mt-4 fs-6">
                    <div class="background"></div>
                    READ MORE
                    </button>
                </div>
        </div>
    </section>
 
</template>


<!-- QUI CSS -->
<style scoped>

button{
    background-color: rgb(134, 206, 117);  
}
span{
    color: white;
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

img:hover{
    scale: 1.2;
    transition: 0.5s;
    position: relative;
    z-index: 1;
    
}

.background {
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: -1;
    border-radius: 50%;
    background: linear-gradient(
        271deg,
        rgba(65, 65, 65, 1) 0%,
        rgba(47, 47, 47, 1) 50%,
        rgba(18, 20, 19, 1) 100%
    );

}

button:hover .background {
    width: 150%;
    height: 400%;
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


</style>
