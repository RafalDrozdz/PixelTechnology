<template>
    <div class="patient__age"><font-awesome-icon icon="birthday-cake" /> {{age}}</div>
</template>

<script>


export default {
  name: "Age",
  props: {
      age: Number
  },
};
</script>

<style scoped>
.patient__age{
   font-size: 20px; 
}
</style>