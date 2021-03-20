<template>
        <div class="patient__phoneNumber"><font-awesome-icon icon="phone-alt" /> {{phoneNumber}}</div>
</template>

<script>

export default {
  name: "PhoneNumber",
  props: {
      phoneNumber: String
  },
};
</script>

<style scoped>


</style>