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
        <div class="row debug-row" >
            <div class="col-5 debug">
                <h3> Our recent <strong>web designs</strong> & some examples of past <strong>projects</strong></h3>
            </div>
            <div class="col-7 debug">
                <p>Far Far away, behind the word mountains, Far From the countries Vokalie end Consonentia, there live the
                blind texts. Seperated they live in Bookmarksgrove righi the coesi: OF the Semantics, è large languege
                ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountèins, far From the
                countries Vokalia and Consonentia, there live the blind texts. Separated they live in Bookmarksgrave.</p>
            </div>
        </div>
    </section>
    <section>
        <div class="row">
            <div class="card border-0 gx-1  col-3">
                <img src="../../assets\photo\images\ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
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
.debug{
    border: 1px dashed crimson;
}
.debug-row{
    border: 1px solid black;
}
button{
    background-color: rgb(134, 206, 117);  
}
span{
    color: white;
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
