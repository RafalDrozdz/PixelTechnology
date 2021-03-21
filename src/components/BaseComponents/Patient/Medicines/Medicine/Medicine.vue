<template>
    <li class="medicine"> 
        <span @click="handleOpen">{{medicine.medicationName}}</span>
        <Popup 
         v-if="isOpen" 
         :medicine="medicine"
         :isOpen.sync="isOpen" 
         v-on:handleClose="updateIsOpen($event)"/>       
    </li>
</template>

<script>
import Vue from "vue";
import Popup from "./Popup/Popup.vue";

export default Vue.extend({
  components: { Popup },
  name: "Medicine",
  props: {
    medicine: Object
  },
  data(){
    return {
      isOpen: false,
    }
  },
  methods: {
    handleOpen(){
      this.isOpen = true;     
    },
    updateIsOpen(updatedIsOpen){
      this.isOpen = updatedIsOpen;    
    },
  },
  
});
</script>

<style scoped>
  .medicine{
    cursor: pointer;
    margin: 5px 0;
  }
  .medicine > span{
    text-decoration: underline;
  }
  
  .medicine > span:hover{
    color: #888;
    text-decoration-color: #888;
  }
</style>