<script>
export default {
  name:'Links',
  data() {
    return {
      links: [
        { url: '#home', info: 'HOME' },
        { url: '#ourMissions', info: 'ABOUT' },
        { url: '#ourWorks', info: 'SERVICES' },
        { url: '#ourResults', info: 'SHOWCASE' },
        { url: '#latestNews', info: 'BLOG' },
        { url: '#contactInfo', info: 'CONTACT' },
      ]
    };
  }
};



</script>



<template>
  <ul class="nav justify-content-center">
    <li class="nav-item m-1" v-for="link in links" :key="index">
      <a class="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0" :href="link.url" target="_blank">{{ link.info }}</a>
    </li>
  </ul> 
</template>




<style scoped>

.nav-item{
  list-style: none;
}


</style>