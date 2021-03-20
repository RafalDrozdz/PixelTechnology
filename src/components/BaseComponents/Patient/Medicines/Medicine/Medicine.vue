<template>
    <li class="medicine">
        {{medicine.medicationName}}       
    </li>
</template>

<script>

export default {
  name: "Medicine",
  props: {
    medicine: Object
  }
};
</script>

<style scoped>

</style>