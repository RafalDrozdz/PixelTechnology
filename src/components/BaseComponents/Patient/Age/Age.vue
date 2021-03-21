<template>
    <div class="patient__age"><font-awesome-icon icon="birthday-cake" /> {{age}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Age",
  props: {
      age: Number
  },
});
</script>

<style scoped>
  .patient__age{
      font-size: 18px;
      margin: 10px 0;
  }
</style>