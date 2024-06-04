<!-- qui JS  -->
<script>
import store from '../data/store.js'
import OurWorks from './AppMain/OurWorks.vue'
import OurResults from './AppMain/OurResults.vue'
import NewProjects from './AppMain/NewProjects.vue'

export default {
    components:{
        OurWorks,
        OurResults,
        NewProjects,
       
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
    <NewProjects/>
</template>
<!-- QUI CSS -->
<style scoped>

</style>
