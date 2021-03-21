<template>
        <div class="patient__phoneNumber"><font-awesome-icon icon="phone-alt" /> {{phoneNumber}}</div>
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
  .patient__phoneNumber{
      font-size: 18px;
      margin: 10px 0;
  }
</style>