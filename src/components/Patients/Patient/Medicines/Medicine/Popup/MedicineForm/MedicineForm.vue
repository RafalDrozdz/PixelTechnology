<template>
     <div class="medicine__popup__form">Form: {{form}}</div>
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

<style scoped>
  
</style>