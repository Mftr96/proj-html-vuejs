<!-- qui JS  -->
<script>
import store from '../data/store.js'
import OurSolutions from './AppMain/OurSolutions.vue'
import OurMissions from './AppMain/OurMissions.vue'
import OurWorks from './AppMain/OurWorks.vue'
import OurResults from './AppMain/OurResults.vue'
import OurPrices from './AppMain/OurPrices.vue'
import ClientsQuotes from './AppMain/ClientsQuotes.vue'
import LatestNews from './AppMain/LatestNews.vue'
import NewProjects from './AppMain/NewProjects.vue'


export default {
    name:'AppMain',
    components:{
        OurWorks,
        OurResults,
        NewProjects,
        LatestNews,
       
    },
    data (){
        return{
            store,
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
    <OurSolutions/>
    <OurMissions/>
    <OurWorks/>
    <OurResults/>
    <NewProjects/>
    <ClientsQuotes/>
    <LatestNews/>
    <NewProjects/>
</template>
<!-- QUI CSS -->
<style scoped>

</style>
