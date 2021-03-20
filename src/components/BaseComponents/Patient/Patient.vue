<template>
    <div class="patient">
        <div class="patient__title">
            <Name :name="patient.name" :lastName="patient.lastName"/>
            <Gender :gender="patient.gender"/>
        </div>  
        <PhoneNumber :phoneNumber="patient.phoneNumber"/>
        <Adress :adress="patient.adress"/>
        <Age :age="patient.age"/>
        <Medicines :medicines="patientMedicines"/>         
    </div>
</template>

<script>
import Medicines from "./Medicines" 
import Gender from "./Gender"
import Name from "./Name"
import store from "../../../store"
import Age from './Age/Age.vue'
import PhoneNumber from './PhoneNumber'
import Adress from './Adress/Adress.vue'

export default {
  name: "Patient",
  props: {
      patient: Object
  },
  computed: {
      patientMedicines(){
        const patientMedicines = store.getters.getMedicines.filter(item => item.patientIds.includes(this.patient.id))
        return patientMedicines;
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
};
</script>

<style scoped>
.patient{
    display: flex;
    flex-direction: column;
    min-width: 250px;
    max-width: 400px;
    width: 40%;
    border-radius: 12px;
    padding: 5px;
    margin: 10px;
    box-shadow: -2px 5px 6px 3px #aaa;
}
.patient__title{
    display: flex;
    font-size: 26px;
}

@media (max-width: 600px) {
    .patient{
        width: 90%;
    }
    
}
</style>