<template>
     <div class="medicine__popup__expDate">Expiration date: {{expDate}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MedicineExpDate",
  props: {
      expDate: String
  }
    
});
</script>

<style scoped>
  
</style>