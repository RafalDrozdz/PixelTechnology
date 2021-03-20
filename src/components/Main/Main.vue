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
    width: 100%;
    margin-top: 60px;
  }
  .patients{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: calc(100% - 300px);
  }

</style>