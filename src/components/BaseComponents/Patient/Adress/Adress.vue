<template>
     <div class="patient__adress"><font-awesome-icon icon="map-marker-alt" /> {{adress}}</div>
</template>

<script>


export default {
  name: "Adress",
  props: {
      adress: String
  },
};
</script>

<style scoped>

</style>