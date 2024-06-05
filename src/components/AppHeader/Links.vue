<script>
export default {
  name: 'LinkList',
  data() {
    return {
      links: [
        { url: '#home', home: 'HOME' },
        { url: '#ourMissions', about: 'ABOUT' },
        { url: '#ourWorks', services: 'SERVICES' },
        { url: '#ourResults', showcase: 'SHOWCASE' },
        { url: '#latestNews', blog: 'BLOG' },
        { url: '#contactInfo', contact: 'CONTACT' },
      ]
    };
  }
};



</script>



<template>
  <ul class="nav justify-content-center">
    <li class="nav-item m-1" v-for="(link, index) in links" :key="index">
      <a class="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0" :href="link.url" target="_blank">{{ link.home }}</a>
    </li>
    <li class="nav-item m-1" v-for="(link, index) in links" :key="index">
      <a class=" link-body-emphasis link-offset-2 link-underline link-underline-opacity-0" :href="link.url" target="_blank">{{ link.about }}</a>
    </li>
    <li class="nav-item m-1" v-for="(link, index) in links" :key="index">
      <a class="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0":href="link.url" target="_blank">{{ link.services }}</a>
    </li>
    <li class="nav-item m-1" v-for="(link, index) in links" :key="index">
      <a class="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0":href="link.url" target="_blank">{{ link.showcase }}</a>
    </li>
    <li class="nav-item m-1" v-for="(link, index) in links" :key="index">
      <a class=" link-body-emphasis link-offset-2 link-underline link-underline-opacity-0":href="link.url" target="_blank">{{ link.blog }}</a>
    </li>
    <li class="nav-item m-1" v-for="(link, index) in links" :key="index">
      <a class="link-body-emphasis link-offset-2 link-underline link-underline-opacity-0":href="link.url" target="_blank">{{ link.contact }}</a>
    </li>
  </ul>




</template>




<style scoped>

.nav-item{
  list-style: none;
}


</style>