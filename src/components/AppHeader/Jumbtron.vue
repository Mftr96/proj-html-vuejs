<script>






</script>





<template>
    <div class="card mb-3">
        <div class="row g-0 align-items-center">
            <div class="left-col  col-4 text-cemter">
                <p class="green text-start">17 years of experiance</p>
                <h1 class="card-title text-center">We Are a</h1>
                <h1 class="card-title text-center">Web Design <span class="Agency">Agency</span></h1>
                <hr class="d-inline-block me-2 rounded bg-success opacity-100" />
                <hr class="separator d-inline-block rounded bg-success opacity-100" />
                <p class="description-card text-center">Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia,there live the blind texts. Separated they live in Bookmarksgrove right at
                    the coast of theSemantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                <p class="black-card text-start m-5"><button
                        class="btn rounded-5 text-white px-5 py-3 shadow-lg mt-4 fs-6">READ MORE</button>
                </p>
                <span class="social">
                    <a class="click link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 px-2 m-2"
                        href="#">Facebook</a>
                    <a class="click link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 px-2 m-2"
                        href="#">Instagram</a>
                    <a class="click link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 px-2 m-2"
                        href="#">Twitter</a>
                    <a class="click link-body-emphasis link-offset-2 link-underline link-underline-opacity-0 px-2 m-2"
                        href="#">Youtube</a>
                </span>
                
            </div>
            <div class="col-7">
                <CaroselHeader/>
                <div class="card-body">
                    <img src="../../assets/photo/Group-36-2x.png" class="First-photo" alt="...">
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.First-photo{
    width: 100%;
}

.left-col {
    margin-left: 8rem;
}


.green {
    font-size: 20px;
    color: #00d9a6;
    font-family: quicksand;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 7px;
    background-color: transparent;
}

h1 {
    font-size: 72px;
    color: #202020;
    font-family: cursive;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -4px;
    background-color: transparent;

}

.Agency {
    font-size: 72px;
    color: #00d9a6;
    font-family: cursive;
    letter-spacing: -4px;
    background-color: transparent;
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

.description-card {
    font-size: 15px;
    font-family: ubuntu;
    background-color: transparent;
}


button {
    font-size: 0.6rem;
    display: inline-block;
    position: relative;
    background-color: black;
    transition: color 0.5s;
    z-index: 1;
    overflow: hidden;
}

button:hover {
    background-color: #00d9a6;
}


.social {
    transition: color 0.2s;
    overflow: hidden;
}

.click:hover {
    background-color: #00d9a6;
}
</style>