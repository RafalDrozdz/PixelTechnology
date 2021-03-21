<template>
    <div class="patient-card__name">{{`${name} ${lastName}`}}</div>
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
.patient-card__name{
    font-weight: 600;
}
</style>