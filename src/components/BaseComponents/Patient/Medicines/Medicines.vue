<template>
    <div class="patient__mediciens">
      <div class="patient__mediciens__title">Medicines: </div>
      <ul>
        <Medicine v-for="item in medicines" :key="item.id" :medicine="item"/>   
      </ul>
      
    </div>
</template>

<script>
import Vue from "vue";
import Medicine from "./Medicine"

export default Vue.extend({
  name: "Medicines",
  props: {
    medicines: Array
  },
  components: {
    Medicine
  }
});
</script>

<style scoped>

</style>