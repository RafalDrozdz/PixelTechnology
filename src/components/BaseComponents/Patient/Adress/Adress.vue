<template>
     <div class="patient__adress"><font-awesome-icon icon="map-marker-alt" /> {{adress}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Adress",
  props: {
      adress: String
  },
});
</script>

<style scoped>
  .patient__adress{ 
      font-size: 18px;
      margin: 10px 0;
  }

</style>