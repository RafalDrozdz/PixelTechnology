<template>
  <main>
    <DrawerNav />
    <div class="patients">
      <Patient v-for="item in patients" :key="item.id" :patient="item"/>
    </div>
  </main>
</template>

<script>
import Vue from "vue";
import Patient from "@/components/BaseComponents/Patient";
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
    Patient,
    DrawerNav
  }
});
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 300px);
    margin: 60px 0;
  }
  .patients{
    display: flex;
    max-width: 1500px;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
  @media (max-width: 1025px) {
        main{
            width: 100%;
        }  
    }

</style>