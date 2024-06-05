<!-- qui JS  -->
<script>
import store from '../data/store.js'
export default{
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
}


</script>
<!-- QUI HTML -->
<template>
    <footer>
        <section class="upper-footer">
            <div class="row gap-1">
                <div class="col-3 py-5 ">
                    <img class="ms-3 mb-2" src="../assets/photo/images/cropped-Group-39-2x.png" alt="cropped-Group-39-2x.png">
                    <p class="ms-3 w-100">
                       While the lovely valley teems with vapour around
                       me, and the meridian sun strikes the upper surface
                       of the impenetrable foliage of my trees-While the
                       lovely valley teems with vapour around me.
                    </p>
                </div>
                <div class="col-2 py-5   ">
                    <h3 class="ms-3">QUICK LINKS</h3>
                    <hr class="d-inline-block ms-4 me-2 rounded bg-success opacity-100" />
                    <hr class="separator w-25 d-inline-block rounded bg-success opacity-100" />
                    <ul class="text-black text-decoration-none">
                        <li >
                            <a class="text-black text-decoration-none " href="">Careers</a>
                        </li>
                        <li>
                            <a class="text-black text-decoration-none" href="">news</a>
                        </li>
                        <li>
                            <a class="text-black text-decoration-none" href="">Terms of Use</a>
                        </li>
                        <li>
                            <a class="text-black text-decoration-none" href="">Privacy Projects</a>
                        </li>
                        <li>
                            <a class="text-black text-decoration-none" href="">About</a>
                        </li>
                        <li>
                            <a class="text-black text-decoration-none" href="">Contact</a>
                        </li>
                    </ul>

                </div>
                <div class="col-3 py-5 ">
                    <h3>CONTACT</h3>
                    <hr class="d-inline-block me-2 rounded bg-success opacity-100" />
                    <hr class="separator w-25 d-inline-block rounded bg-success opacity-100" />
                    <p>
                       Patricia C. Amedee 4401 Waldeck Street
                       Crapevine Nashville, TX 76051
                    </p>
                    <p>info@yourdomain.com</p>
                    <p>+99 (0) 101 0000 888</p>


                </div>
                <div class="col-3 py-5 ">
                    <h3>LOCATION ON MAP</h3>
                    <hr class="d-inline-block me-2 rounded bg-success opacity-100" />
                    <hr class="separator w-25 d-inline-block rounded bg-success opacity-100" />
                    <img class="p-5" src="../assets\photo\images\map.png" alt="map.png">


                </div>
            </div>
        </section>
        <section class="lower-footer p-5">
            <div class="row debug-row justify-content-between ">
                <div class="col-3 d-flex justify-content-center align-items-center ">
                    <i class="fa-regular fa-copyright"></i>
                    <p class="ms-2 p-0 m-0">2024 PHLOX BUSINESS THEME.</p>
                </div>
                <div class="col-3  d-flex gap-3 justify-content-end">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest"></i>

                </div>
            </div>

        </section>
    </footer>

 
</template>
<!-- QUI CSS -->
<style scoped>
li{
    list-style: none;
}
a:hover{
    color: rgb(0, 216, 165)!important;
}

.lower-footer{
background: linear-gradient(
    rgba(12,12,12,1)0%,
    rgba(71,71,71,1)100%
);
color:rgba(71,71,71,1)
 ;
}
hr {
    width: 0.8rem;
    padding: 0.2rem 0;
    border: 0;
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
