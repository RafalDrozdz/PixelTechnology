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
       console.log(this.isOpen)
    },
    updateIsOpen(updatedIsOpen){
      this.isOpen = updatedIsOpen;
      console.log(updatedIsOpen)
      console.log(this.isOpen)
      
    },
  },
  
});
</script>

<style scoped>

</style>