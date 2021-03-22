<template>
   <div class="drawer-nav">
       <Filters />
   </div>
</template>

<script>
  import Vue from "vue";
  import Filters from './Filters';


  export default Vue.extend({
    components: { 
      Filters 
    },
    name: "DrawerNav",
  });
</script>

<style scoped>
  .drawer-nav{
      position: fixed;
      top: 57px;
      right: 0;
      width: 300px;
      height: calc(100vh - 57px);
      border-left: 1px solid #000;
      background-color: #aaa;
  }
  @media (max-width: 1025px) {
        .drawer-nav{
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: 100px;
        }  
    }
</style>