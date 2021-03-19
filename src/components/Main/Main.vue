<template>
  <main>
    <div class="patients">
      <Patient v-for="item in patients" :key="item.id" :patient="item"/>
    </div>
  </main>
</template>

<script>
import { getPatients } from "../../api";
import Patient from "../BaseComponents/Patient"

export default {
  name: "Main",
  data(){
      return{
          patients: [],
      }
  },
  mounted(){
    const data = getPatients();
    data.then((result) => this.patients = result)
  },
  components: {
    Patient
  }
};
</script>

<style scoped>
main {
  width: 100%;
  background: #ddd;
  margin-top: 60px;
}
.patients{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>