<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
    <h1> ce texte apparait sur toute les pages</h1>
</template>

<style lang="scss" >

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $test;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $couleurliens;
    }
  }
}

h1{
  color: #330885;
}

// @media screen and (min-width:1000px) {
//   h1{
//    display: none;
//   }
  
// }
</style>
