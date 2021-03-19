<template>
  <main>
    <div class="patients">
      <Patient v-for="item in patients" :key="item.id" :patient="item"/>
    </div>
  </main>
</template>

<script>
import Patient from "../BaseComponents/Patient"
import store from "../../store"

export default {
  name: "Main",
  computed: {
    patients(){
      return store.getters.getPatients;
    }
  },
  components: {
    Patient
  }
};
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
}

</style>