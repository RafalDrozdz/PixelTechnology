<template>
    <div class="patient__name">{{`${name} ${lastName}`}}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Name",
  props: {
      name: String,
      lastName: String
  },
});
</script>

<style scoped>
.patient__name{
    font-weight: 600;
}
</style>