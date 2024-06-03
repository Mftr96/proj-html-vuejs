<!-- qui JS  -->
<script>
import store from '../data/store.js'
import OurWorks from './AppMain/OurWorks.vue'
import OurResults from './AppMain/OurResults.vue'

export default {
    components:{
        OurWorks,
        OurResults
       
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
<!-- QUI HTML -->
<template>
    <OurWorks/>
    <OurResults/>
</template>
<!-- QUI CSS -->
<style scoped>

</style>
