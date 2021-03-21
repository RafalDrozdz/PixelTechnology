<template>
     <div class="medicine-popup__form">Form: {{form}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MedicineForm",
  props: {
      form: String
  }
    
});
</script>