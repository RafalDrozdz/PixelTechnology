<template>
        <div class="patient-card__phoneNumber"><font-awesome-icon icon="phone-alt" /> {{phoneNumber}}</div>
</template>

<script>
import Vue from "vue";


export default Vue.extend({
  name: "PhoneNumber",
  props: {
      phoneNumber: String
  },
});
</script>

<style scoped>
  .patient-card__phoneNumber{
      font-size: 18px;
      margin: 10px 0;
  }
</style>