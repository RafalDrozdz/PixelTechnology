<template>
    <div v-if="medicines!==undefined && !!medicines.length"  class="patient-card__mediciens">
      <div class="patient-card__medicines_container">
        <div class="patient-card__mediciens__title">Medicines: </div>
        <ul>
          <Medicine v-for="item in medicines" :key="item.id" :medicine="item"/>   
        </ul>   
      </div>
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
    Medicine,
  }
});
</script>

<style scoped>
  .patient-card__mediciens{
    margin: 20px 0;
  }
  .patient-card__mediciens ul{
    margin: 10px 30px;
    padding: 0;
  }
  .patient-card__mediciens__title{
    font-size: 20px;
    font-weight: 600;
  }
  
</style>