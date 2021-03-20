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

</style>