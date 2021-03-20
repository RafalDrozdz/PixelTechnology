<template>
    <div class="patient__name">{{`${name} ${lastName}`}}</div>
</template>

<script>


export default {
  name: "Name",
  props: {
      name: String,
      lastName: String
  },
};
</script>

<style scoped>
.patient__name{
    font-weight: 600;
}
</style>