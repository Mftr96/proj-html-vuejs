<script >
//importazione dati dallo store
import store from './data/store.js'
//importazione macro componenti 
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
    components:{
        AppHeader,
        AppMain,
        AppFooter,
    },
    data (){
        store
    },
    methods:{

    },
    mounted(){

    }
}

</script>

<template>
<AppHeader/>
<AppMain/>
<AppFooter/>

</template>

<style scoped>

</style>
