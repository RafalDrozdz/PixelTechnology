<template>
    <div class="medicine__popup__unit">Unit: {{unit}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MedicineUnit",
  props: {
      unit: String
  }
    
});
</script>

<style scoped>
  
</style>