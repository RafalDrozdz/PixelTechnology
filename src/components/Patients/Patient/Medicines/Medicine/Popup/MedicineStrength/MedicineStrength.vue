<template>
     <div class="medicine-popup__strength">Strength: {{strength}}</div>
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
