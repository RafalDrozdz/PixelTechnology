<template>
    <div class="patients">
      <Patient v-for="item in patients" :key="item.id" :patient="item"/>
    </div>
</template>

<script>
import Vue from "vue";
import Patient from "./Patient";
import store from "@/store";

export default Vue.extend({
  name: "Patients",
  computed: {
    patients(){
      return store.getters.getPatients;
    }
  },
  components: {
    Patient,
  }
});
</script>

<style scoped>
  .patients{
    display: flex;
    max-width: 1500px;
    flex-wrap: wrap;
    justify-content: space-around;
    min-height: calc(100vh - 60px);
    width: 100%;
  }
  @media (max-width: 1025px) {
        .patients{
          min-height: calc(100vh - 180px);
        } 
  }

</style>