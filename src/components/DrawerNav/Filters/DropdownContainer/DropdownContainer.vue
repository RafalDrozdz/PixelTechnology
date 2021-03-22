<template>
  <div class="dropdown-container">
      <Button :handleClick="handleClick" :text="filter.text" :isOpen="isOpen"/>
      <Dropdown v-if="isOpen" :options="options"/>
  </div>
</template>

<script>
import Vue from "vue"
import { options } from "@/constants"
import Dropdown from "./Dropdown";
import Button from "./Button";


export default Vue.extend({
  components: { Button, Dropdown },
  name: "DropdownContainer",
  computed: {
    filter(){
      return this.$store.state.filter;
    },
    options(){
        return options;
    }
  },
  data() {
    return {
       isOpen: false, 
    }
  },
  mounted() {
    const appDom = document.getElementById("app");
    const buttonDom = document.querySelector('.dropdown-btn');
   
    const clickOutside = (event) => {
        if(![...buttonDom.childNodes].includes(event.target) && buttonDom!==event.target){
            this.isOpen = false;
        }      
    }
    appDom.addEventListener("click", (event) => clickOutside(event));
  },
  methods:{
      handleClick(){
          this.isOpen = !this.isOpen;     
      }
  }
});
</script>

<style scoped>
    .dropdown-container{
        position: relative;
        margin: 20px;
    }
</style>