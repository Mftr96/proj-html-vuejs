<!-- qui JS  -->
<script>


</script>
<!-- QUI HTML -->
<template>
    <section id="NewProject">
        <div class="row justify-content-center gap-4">
            <div class="col-5 border text-center rounded-4  square-left">
                <p class="mt-5">are you ready?</p>
                <h3 class="text-light mb-5">Start a new project</h3>
                <div class="input-box badge mb-5 p-3 rounded-pill w-50">
                    <input class="me-2 border-0  p-2" type="text" placeholder="Enter Your Email Adress">
                    <a class="text-decoration-none text-secondary" href="">SUBMIT</a>
                </div>
            </div>
            <div class="col-5  text-center rounded-4 square-right">
                <p class="mt-5">What are you Waiting For?</p>
                <h3 class="text-light mb-5">Let's Talk About Work</h3>
                <div class="mb-5">
                    <a href="">
                        <!-- chiedere bottone a Fabio  -->
                        <button class="btn rounded-5 border-0 text-white px-5 py-3 shadow-lg mt-4 fs-6">
                        <div class="background"></div>
                        READ MORE
                        </button>
                    </a>
                </div>


            </div>
        </div>
    </section>
 
</template>
<!-- QUI CSS -->
<style scoped>
.square-left{
    background: linear-gradient(
        271deg,
        rgba(65, 65, 65, 1) 0%,
        rgba(47, 47, 47, 1) 50%,
        rgba(18, 20, 19, 1) 100%
    );
}

.square-left p{
    color: rgb(153, 153, 153);
}
.input-box{
    background-color: rgb(62, 62, 62);
}

input{
    background-color:inherit;
}

.square-right{
    background: linear-gradient(
        271deg,
        rgba(122, 222, 108, 1) 0%,
        rgba(88, 221, 125, 1) 60%,
        rgba(0, 217, 166, 1) 100%
    );  }

.square-right p{
    color: rgb(204, 246, 222);
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
        rgba(122, 222, 108, 1) 0%,
        rgba(88, 221, 125, 1) 60%,
        rgba(0, 217, 166, 1) 100%
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
        rgba(65, 65, 65, 1) 0%,
        rgba(47, 47, 47, 1) 50%,
        rgba(18, 20, 19, 1) 100%
    );
}

</style>
