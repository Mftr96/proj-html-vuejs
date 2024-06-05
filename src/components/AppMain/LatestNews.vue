<script>
import store from '../../data/store.js'
// da risolvere l'importazione dell'helper
import helper from '../../data/helper.js'
export default{
    name:'LatestNews',
    data(){
        return{
            store,
            helper,
            
            //link foto per immagini card
            UrlPhoto:[
                {percorso:"../../assets/photo/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg",
                listitem:"Marketing Ideas"},

                {percorso:"../../assets/photo/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg",
                listitem:"Rest During Hour Works",},
                {percorso:"../../assets/photo/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg",
                listitem:"Develop Your Startup Idea"
                }
            ],
        }
    },
    methods:
    {
        getImg(path) {
            let risultato = new URL(`../../assets/photo/` +path, import.meta.url);
            return risultato.href;
        },
        

    },
    mounted(){
    }
}
</script>

<template>
    <section id="Latest-News">
       <div class="container w-50 display-1">
            <h2 class="w-100 mt-5 display-5 ">Latest News And Our <strong class="d-inline-block">Blog</strong></h2>
            <div class="my-0 mx-auto w-25">
                <hr class="d-inline-block me-2 rounded bg-success opacity-100" />
                <hr class="separator d-inline-block rounded bg-success opacity-100"/>
            </div>
       </div>
       <div class="row mb-5">
            <div v-for="foto in UrlPhoto" class="photo-box col-4 overflow-hidden rounded ">
                <img class=" w-100" :src="getImg(foto.percorso)" alt="">
                <div class="info p-2 z-1 rounded bg-white   w-75 my-0 mx-auto">
                   <p>May 24.2018<i class="fa-solid fa-circle"></i> Alex</p>
                   <ul>
                    <li>{{foto.listitem}}</li>
                   </ul> 
                </div>
            </div>
 
       </div>

    </section>

</template>

<style scoped>
.photo-box:hover img{
    scale: 1.2;
    transition: 0.5s;
}
.photo-box:hover .info{
    transition: 0.5s;
    scale: 1.1;
    color: white;
}
.photo-box:hover .info{
    background: linear-gradient(
      271deg,
      rgba(122, 222, 108, 1) 0%,
      rgba(88, 221, 125, 1) 60%,
      rgba(0, 217, 166, 1) 100%
  );
  transition: 0.5s;
}
.info{
    position: relative;
    bottom: 40px;
}

.info:hover{
    transition: 0.5s;
    scale: 1.1;
}


img:hover{
    scale: 1.2;
    transition: 0.5s;
}
::marker{
    color: green;
    font-size: 25px;
}
p>.fa-circle{
    font-size: 4px;
    position: relative;
    bottom: 3px;
}



</style>