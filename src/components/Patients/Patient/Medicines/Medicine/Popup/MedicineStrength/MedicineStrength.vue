<template>
     <div class="medicine__popup__strength">Strength: {{strength}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MedicineStrength",
  props: {
      strength: Number
  }
    
});
</script>

<style scoped>
  
</style>