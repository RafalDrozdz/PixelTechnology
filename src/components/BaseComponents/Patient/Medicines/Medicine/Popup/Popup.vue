<template>
    <div class="medicine__popup">
          <div class="medicine__popup__contanier">
            <MedicineClose v-on:handleClose="handleClose"/>
            <MedicineName :name="medicine.medicationName"/>
            <MedicineForm :form="medicine.form"/>
            <MedicineUnit :unit="medicine.unit"/>
            <MedicineStrength :strength="medicine.strength"/>
            <MedicineExpDate :expDate="medicine.expDate"/>      
          </div>
        <div class="medicine__popup__background" @mousedown="handleClose" />
    </div>
</template>

<script>
import Vue from "vue";
import MedicineClose from "./MedicineClose";
import MedicineExpDate from "./MedicineExpDate";
import MedicineForm from "./MedicineForm";
import MedicineName from "./MedicineName";
import MedicineStrength from "./MedicineStrength";
import MedicineUnit from "./MedicineUnit";

export default Vue.extend({
  components: { 
    MedicineUnit, 
    MedicineStrength, 
    MedicineExpDate, 
    MedicineForm, 
    MedicineName, 
    MedicineClose 
  },
  name: "Popup",
  props: {
    medicine: Object,
  },
  computed: {
  },
  methods: {
    handleClose(){
      this.$emit('handleClose', false)
    }
  }
    
});
</script>

<style scoped>
  .medicine__popup__background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 200;
  }
  .medicine__popup__contanier{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 16px 20px;
    width: 90%;
    max-width: 500px;
    min-width: 240px;
    z-index: 201;
    background-color: #fff;
    border-radius: 10px;
  }
</style>