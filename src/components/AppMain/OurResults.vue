<!-- qui JS  -->
<script>
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
    <section class="our-results">
        <div class="row">
            <span class="my-bg col-6 p-0">
                <div class=" h-100 square-left d-flex justify-content-center align-items-center" >   
                    <div class="text-center  position-relative">
                        <h2 class="opacity-100">280</h2>
                        <h3>projects</h3>
                        <div class="d-flex">
                            <div class="me-3">
                                <h3>+3500</h3>
                                <p>USERS' COMMENTS</p>    
                            </div>
                            <div class="vertical-line"></div>
                            <div class="ms-3">
                                <h3>100%</h3>
                                <p>HAPPY CLIENTS</p>    
                            </div>
                        </div>
                    </div>

                </div>
            </span>
            <div class="col-6 p-3 square-right">
                <div class="d-flex flex-column align-items-center">
                    <h2 class="">We <strong>Love</strong> What We Do</h2>
                    <div class="d-flex ">
                        <div class="me-4"><hr class="line-short"></div>
                        <div class=""><hr class="line-long"></div>
                    </div>
                    <p class="text-center">Far far away, behind the word mountains, far from the countries
                        Vokalia and Conscnantia, there live the blind texts. Separated they
                        live in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.Separated they live in Bookmarksgrove. Far far
                        away, behind the word mountains. large language ocean. far from
                        the countries Vokalia and Consonantia
                    </p>
                    <ul>
                        <li><i class="fa-solid fa-check me-2"></i>far far away, behind the word mountains</li>
                        <li><i class="fa-solid fa-check me-2"></i>large language ocean</li>
                        <li><i class="fa-solid fa-check me-2"></i>far from the countries Vakalia and Consanantia</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    
</template>

<!-- QUI CSS -->
<style scoped>
.our-results{
    background-color: rgb(250, 250, 250);
}
.square-left{
    border: 1px solid crimson;
    border-radius: 5px;
    background-image: url(../../assets\photo\images\person-with-long-curly-hair-PZ99QM2-2x.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;

}

.my-bg{
    background: linear-gradient(
        271deg,
        rgba(122, 222, 108, 1) 0%,
        rgba(88, 221, 125, 1) 60%,
        rgba(0, 217, 166, 1) 100%
        );
        position: relative;
        z-index: 1;
        color: white;



}
.square-right{
    border: 1px solid yellowgreen;
    border-radius: 5px;
    background-color: white;
}

.vertical-line{
    border-left: 1px solid black;
    height: 40px;
    width: 1px;
    /* colorare di bianco dopo aver messo foto sfondo e colore */
}

.line-short{
    width: 20px;
    color: green;
}

.line-long{
    width: 60px;
    color:green;
}

hr{
    width: 20px;
}
li{
    list-style: none;
}
</style>
