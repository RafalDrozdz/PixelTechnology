<template>
  <main>
    <DrawerNav />
    <Loader v-if="patients.data==null" class="large"/>
    <Patients v-else-if="patients.data.length"/>
    <NoPatients v-else />
  </main>
</template>

<script>
import Vue from "vue";
import Patients from "@/components/Patients";
import NoPatients from "@/components/NoPatients";
import DrawerNav from "@/components/DrawerNav";
import Loader from "@/components/Loader";


export default Vue.extend({
  name: "Main",
  computed: {
    patients(){
      return this.$store.state.patients;
    }
  },
  components: {
    DrawerNav,
    Patients,
    NoPatients,
    Loader,
  }
});
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 300px);
    margin-top: 60px;
    min-height: calc(100vh - 180px);
  }
  @media (max-width: 1025px) {
    main{
      width: 100%;
      margin-top: 180px;
    }       
  }

</style>