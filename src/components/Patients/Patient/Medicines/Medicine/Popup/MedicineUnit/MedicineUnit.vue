<template>
    <div class="medicine-popup__unit">Unit: {{unit}}</div>
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
