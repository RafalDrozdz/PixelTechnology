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
      return store.getters.getFilter
    },
    options(){
        return options
    }
  },
  data() {
    return {
       isOpen: false 
    }
  },
  mounted() {
    const appDom = document.getElementById("app");
    const DropdownDom = document.querySelector('.dropdown');
    const buttonDom = document.querySelector('.dropdownBtn');
    const buttonTextDom = document.querySelector('.dropdownBtn__text');
    const buttonPathDom = document.querySelector('.dropdownBtn path');
    const buttonSvgDom = document.querySelector('.dropdownBtn svg');


    const clickOutside = (event) => {
        if(event.target!==DropdownDom && 
        event.target !== buttonDom && 
        event.target !== buttonTextDom &&
        event.target !== buttonPathDom &&
        event.target !== buttonSvgDom){
            this.isOpen = false;
        }   
    }
    appDom.addEventListener("click", (event) => clickOutside(event))
       
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