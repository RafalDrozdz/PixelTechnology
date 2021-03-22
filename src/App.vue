<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import Vue from "vue";
import MainPage from "./views/MainPage";

export default Vue.extend({
  name: "App",
  created(){
     this.$store.dispatch("fetchPatients"); 
     this.$store.dispatch("fetchMedicines"); 
  },
  components: {
    MainPage,
  },
});
</script>

<style>
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
