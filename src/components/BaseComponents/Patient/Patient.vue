<template>
    <div class="patient">
        <div class="patient__title">
            <Name :name="patient.name" :lastName="patient.lastName"/>
            <Gender :gender="patient.gender"/>
        </div>
        <div class="patient__box">
            <PhoneNumber :phoneNumber="patient.phoneNumber"/>
            <Adress :adress="patient.adress"/>
            <Age :age="patient.age"/>  
            <Medicines v-if="!condition" :medicines="patientMedicines"/>  
        </div>
               
    </div>
</template>

<script>
import Vue from "vue";
import store from "@/store"
import Medicines from "./Medicines" 
import Gender from "./Gender"
import Name from "./Name"
import Age from './Age'
import PhoneNumber from './PhoneNumber'
import Adress from './Adress/'

export default Vue.extend({
  name: "Patient",
  props: {
      patient: Object
  },
  computed: {
      patientMedicines(){
        const patientMedicines = store.getters.getMedicines.filter(item => item.patientIds.includes(this.patient.id))
        return patientMedicines;
      },
      condition(){
        const filter = store.getters.getFilter.option
        const conditon = (filter==="over30-medicines" && this.patient.age < 30) || (filter==="men-medicines" && this.patient.gender!=="male")
        return conditon;
      }
  },
  components: {
    Medicines,
    Gender,
    Name,
    Age,
    PhoneNumber,
    Adress
  }
});
</script>

<style scoped>
    .patient{
        min-width: 250px;
        max-width: 700px;
        flex-basis: 47%;
        border-radius: 12px;
        padding: 5px;
        margin: 10px;
        box-shadow: -2px 5px 6px 3px #aaa;
    }
    .patient__title{
        display: flex;
        font-size: 26px;
    }
    .patient__box{
        margin: 0 12px;
    }
    @media (max-width: 1025px) {
        .patient{
            flex-basis: 90%;
        }  
    }
</style>