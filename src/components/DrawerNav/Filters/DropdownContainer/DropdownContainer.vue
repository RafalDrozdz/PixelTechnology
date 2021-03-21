<template>
  <div class="dropdown__container">
      <Button :handleClick="handleClick" :text="filter.text" :isOpen="isOpen"/>
      <Dropdown v-if="isOpen" :options="options"/>
  </div>
</template>

<script>
import Vue from "vue"
import store from "@/store";
import { options } from "@/constans"
import Dropdown from "./Dropdown";
import Button from "./Button";


export default Vue.extend({
  components: { Button, Dropdown },
  name: "DropdownContainer",
  computed: {
    filter(){
      return store.getters.getFilter;
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
    const buttonDom = document.querySelector('.dropdownBtn');
   
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
    .dropdown__container{
        position: relative;
        margin: 20px;
    }
</style>