<template>
  <main>
    <DrawerNav />
    <Patients v-if="!!patients.length"/>
    <NoPatients v-else />
  </main>
</template>

<script>
import Vue from "vue";
import Patients from "@/components/Patients";
import NoPatients from "@/components/NoPatients";
import { DrawerNav } from "@/components/DrawerNav";
import store from "@/store";



export default Vue.extend({
  name: "Main",
  computed: {
    patients(){
      return store.getters.getPatients;
    }
  },
  components: {
    DrawerNav,
    Patients,
    NoPatients,
  }
});
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 300px);
    margin-top: 60px;
  }
  .noPatients{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
    font-size: 40px;
  }
  @media (max-width: 1025px) {
        main{
            width: 100%;
        } 
        .noPatients{
          font-size: 20px;
          min-height: calc(100vh - 180px);
        }
  }

</style>