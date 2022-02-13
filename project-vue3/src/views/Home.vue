<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <Carousel/>
  <Header/>
</template>

<script>
// @ is an alias to /src

import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Home",
  components: {
    HelloWorld, Header, Carousel,
  },
};
</script>

<style lang="scss" scoped>
    
</style>
