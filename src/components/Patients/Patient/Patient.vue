<template>
    <div class="patient-card">
        <div class="patient-card__heading">
            <Name :name="patient.name" :lastName="patient.lastName"/>
            <Gender :gender="patient.gender"/>
        </div>
        <div class="patient-card__content">
            <PhoneNumber :phoneNumber="patient.phoneNumber"/>
            <Adress :adress="patient.adress"/>
            <Age :age="patient.age"/>
            <div class="patient-card__medicines-container">
                <Loader class="small" v-if="patientMedicines==null"/> 
                <Medicines v-if="!condition" :medicines="patientMedicines"/>
            </div>  
        </div>        
    </div>
</template>

<script>
import Vue from "vue";
import Medicines from "./Medicines" 
import Gender from "./Gender"
import Name from "./Name"
import Age from './Age'
import PhoneNumber from './PhoneNumber'
import Adress from './Adress/'
import Loader from "@/components/Loader";

export default Vue.extend({
  name: "Patient",
  props: {
      patient: Object
  },
  computed: {
      patientMedicines(){
        let patientMedicines = undefined
        if(this.$store.state.medicines.data!==undefined){
            patientMedicines = this.$store.state.medicines.data.filter(item => item.patientIds.includes(this.patient.id))
        }
        return patientMedicines;
      },
      condition(){
        const filter = this.$store.state.filter.option
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
    Adress,
    Loader
  }
});
</script>

<style scoped>
    .patient-card{
        min-width: 250px;
        max-width: 700px;
        flex-basis: 47%;
        border-radius: 12px;
        padding: 5px;
        margin: 10px;
        box-shadow: -2px 5px 6px 3px #aaa;
    }
    .patient-card__heading{
        display: flex;
        font-size: 26px;
    }
    .patient-card__content{
        margin: 0 12px;
    }
    .patient-card__medicines-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 1025px) {
        .patient-card{
            flex-basis: 90%;
        }  
    }
</style>