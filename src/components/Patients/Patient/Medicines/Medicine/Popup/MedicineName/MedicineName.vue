<template>
     <div class="medicine-popup__name">{{name}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "MedicineName",
  props: {
      name: String
  }
    
});
</script>

<style scoped>
  .medicine-popup__name{
      font-size: 26px;
      margin: 0 0 6px -5px;
  }
</style>