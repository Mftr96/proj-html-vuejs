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
            <div class="col-6 square-left" >

            </div>
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
                        <li><i class="fa-solid fa-check me-2"></i>far fram the countries Vakalia and Consanantia</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    
</template>

<!-- QUI CSS -->
<style scoped>
.square-left{
    border: 1px solid crimson;
}
.square-right{
    border: 1px solid yellowgreen;
}
.line-short{
    width: 20px;
    color: green;
}

.line-long{
    width: 60px;
    color:green;
}

li{
    list-style: none;
}
</style>
